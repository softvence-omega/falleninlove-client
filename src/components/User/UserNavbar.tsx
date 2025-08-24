import React, { useState } from 'react';
import { Search, Bell, ChevronDown, User, Settings, Globe, HelpCircle, LogOut } from 'lucide-react';

import logo from "../../assets/user/logo.png"

const UserNavbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between py-3 mx-3">
          {/* Logo and Last Updated Section */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <div className="flex items-center gap-3 space-x-1">
                <img className="w-6 h-8" src={logo} alt="logo" />
                <span className="text-2xl font-bold text-[#FF715B]">CareBot</span>
              </div>
            </div>
            {/* Last Updated (hide on small) */}
            <p className="text-[#919EAB] ml-10 hidden sm:block">
              Last updated: April 14th, 5:00 pm
            </p>
          </div>

          {/* Search Bar (hide on small) */}
          <div className="flex-1 max-w-md mx-8 hidden sm:block">
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                <div className="bg-[#2CBCA4] rounded-full p-1.5 flex items-center justify-center">
                  <Search className="h-4 w-4 text-white" />
                </div>
              </div>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-2.5 bg-gray-50 border border-[#FF6A0066] rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Language Selector (hide on small) */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                <span className="font-medium">EN</span>
                <ChevronDown className="h-4 w-5 text-black" />
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-24 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                  <button className="w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                    EN
                  </button>
                  <button className="w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                    FR
                  </button>
                  <button className="w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                    ES
                  </button>
                </div>
              )}
            </div>

            {/* Notifications (hide on small) */}
            <button className="relative p-1 text-gray-600 hover:text-gray-900 transition-colors duration-200 hidden sm:block">
              <Bell className="h-5 w-5" />
              <span className="absolute bottom-4 right-1 h-2 w-2 bg-[#DFBC00] rounded-full"></span>
            </button>

            {/* User Profile (always visible) */}
            <div className="relative">
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center space-x-6 p-1 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="text-right hidden sm:block">
                  <div className="text-xl font-semibold text-[#2CBCA4]">Armand</div>
                  <div className="text-[#1A2E42] text-sm">Premium</div>
                </div>
                <div className="flex items-center space-x-1">
                  <img
                    src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full object-cover border-2 border-teal-100"
                  />
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
              </button>

              {isProfileDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="text-sm font-semibold text-gray-900">Armand gopro</div>
                    <div className="text-xs text-gray-500">armand.gopro@caresuite.com.au</div>
                  </div>
                  <button className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3">
                    <User className="w-4 h-4 text-gray-500" />
                    <span>View Profile</span>
                  </button>
                  <button className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3">
                    <Settings className="w-4 h-4 text-gray-500" />
                    <span>Settings</span>
                  </button>
                  <button className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3">
                    <Globe className="w-4 h-4 text-gray-500" />
                    <span>Language & Accessibility</span>
                  </button>
                  <button className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-3">
                    <HelpCircle className="w-4 h-4 text-gray-500" />
                    <span>Help & Support</span>
                  </button>
                  <div className="border-t border-gray-100">
                    <button className="w-full px-4 py-3 text-left text-sm text-white bg-red-500 hover:bg-red-600 transition-colors duration-200 flex items-center space-x-3 rounded-b-lg">
                      <LogOut className="w-4 h-4 text-white" />
                      <span>Log Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Click outside handlers */}
      {(isLanguageDropdownOpen || isProfileDropdownOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsLanguageDropdownOpen(false);
            setIsProfileDropdownOpen(false);
          }}
        />
      )}
    </header>
  );
};

export default UserNavbar;
