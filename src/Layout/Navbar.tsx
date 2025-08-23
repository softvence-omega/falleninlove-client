import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/CompliancePageAdmin/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 mx-2 sm:mx-6 md:mx-8 lg:mx-12">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              width={40}
              className="sm:w-[45px] md:w-[50px]"
              src={logo}
              alt="logo"
            />
            <Link
              to="/"
              className="text-[#FF715B] text-xl sm:text-2xl md:text-3xl font-bold"
            >
              CareBot
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-2 xl:space-x-4">
            <Link
              to="/"
              className="text-black hover:bg-website-color-lightGray px-2 xl:px-3 py-2 rounded-md font-bold"
            >
              About Us
            </Link>
            <Link
              to="/about"
              className="text-black hover:bg-website-color-lightGray px-2 xl:px-3 py-2 rounded-md font-bold"
            >
              Feature
            </Link>
            <Link
              to="/policyadmin"
              className="text-black hover:bg-website-color-lightGray px-2 xl:px-3 py-2 rounded-md font-bold"
            >
              Testimonials
            </Link>
            <Link
              to="/services"
              className="text-black hover:bg-website-color-lightGray px-2 xl:px-3 py-2 rounded-md font-bold"
            >
              Blog
            </Link>
            <Link
              to="/userdash"
              className="text-black hover:bg-website-color-lightGray px-2 xl:px-3 py-2 rounded-md font-bold"
            >
              FAQ
            </Link>
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-black hover:bg-website-color-lightGray px-2 xl:px-3 py-2 rounded-md font-bold"
            >
              Contact
            </button>
            <Link
              to="/contact"
              className="text-white bg-[#2CBCA4] px-2 xl:px-3 py-2 rounded-md font-bold"
            >
              User Login
            </Link>
            <Link
              to="/contact"
              className="text-white bg-[#FF715B] px-2 xl:px-3 py-2 rounded-md font-bold"
            >
              Admin Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-black hover:text-gray-500 focus:outline-none"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg absolute top-16 left-0 w-full z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-4">
            <Link
              to="/"
              className="block text-black hover:bg-website-color-lightGray px-3 py-2 rounded-md font-bold"
            >
              About Us
            </Link>
            <Link
              to="/about"
              className="block text-black hover:bg-website-color-lightGray px-3 py-2 rounded-md font-bold"
            >
              Feature
            </Link>
            <Link
              to="/policyadmin"
              className="block text-black hover:bg-website-color-lightGray px-3 py-2 rounded-md font-bold"
            >
              Testimonials
            </Link>
            <Link
              to="/services"
              className="block text-black hover:bg-website-color-lightGray px-3 py-2 rounded-md font-bold"
            >
              Blog
            </Link>
            <Link
              to="/userdash"
              className="block text-black hover:bg-website-color-lightGray px-3 py-2 rounded-md font-bold"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="block text-black hover:bg-website-color-lightGray px-3 py-2 rounded-md font-bold"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="block text-white bg-[#2CBCA4] px-3 py-2 rounded-md font-bold"
            >
              User Login
            </Link>
            <Link
              to="/contact"
              className="block text-white bg-[#FF715B] px-3 py-2 rounded-md font-bold"
            >
              Admin Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
