
import React, { useState, useRef } from "react";
import { ChevronDown, User } from "lucide-react";
import profileImage from "../../../assets/user/profile.jpg"

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  language: string;
  address: string;
  role: string;
  organization: string;
  profileImage: string;
}

function UserProfile() {
  const [profile, setProfile] = useState<UserProfile>({
    firstName: "Armando",
    lastName: "gopro",
    email: "armand.gopro@caresuite.com.au",
    phone: "0123467896",
    country: "Aus",
    language: "English",
    address: "",
    role: "Care Worker",
    organization: "CareSuite Aged Care",
    profileImage:profileImage,
  });

  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const countries = ["Aus", "USA", "UK", "Canada", "Germany", "France"];
  const languages = ["English", "Spanish", "French", "German", "Italian"];

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (field: keyof UserProfile, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Saving profile:", profile);
  };

  const handleCancel = () => {
    console.log("Cancelling changes");
  };

  const handleChangePassword = () => {
    console.log("Change password clicked");
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile((prev) => ({ ...prev, profileImage: imageUrl }));
    }
  };

  return (
    <div className="min-h-screen  py-8 px-4">
      <div className=" mx-auto">
        <h1 className="text-3xl font-bold text-[#2D2D2D] mb-8">My Profile</h1>

        {/* Profile Header Section */}
        <div className="bg-[#F9FAFB] rounded-lg shadow-sm border border-[#FF6A0066] p-6 mb-6">
          <div className="flex items-center space-x-10 ml-4">
            {/* Profile Image + Change Photo */}
            <div className="flex flex-col  items-center">
              <div className="relative">
                <img
                  src={profile.profileImage}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border-2 border-[#FF6A0066]"
                />
                <div className="absolute inset-0 rounded-full bg-opacity-0 hover:bg-opacity-10 transition-all cursor-pointer flex items-center justify-center">
                  <User
                    className="text-white opacity-0 hover:opacity-100 transition-opacity"
                    size={28}
                  />
                </div>
              </div>
              <button
                className="mt-2 text-[#FF715B] cursor-pointer font-medium transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                Change Photo
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            {/* Profile Text */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-[#2CBCA4] mb-1">
                {profile.firstName} {profile.lastName}
              </h2>
              <p className="text-[#6B7280] mb-1">{profile.email}</p>
              <p className="text-[#6B7280]  mb-1">
                Phone:{" "}
                {profile.phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3")}
              </p>
              <p className="text-[#6B7280]  mb-1">Role: {profile.role}</p>
              <p className="text-[#6B7280]  mb-4">
                Organisation: {profile.organization}
              </p>
            </div>
          </div>
        </div>

        {/* Personal Details Section */}
        <div className="bg-[#F9FAFB] rounded-lg shadow-sm border border-[#FF6A0066] p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            Personal Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First name
              </label>
              <input
                type="text"
                value={profile.firstName}
                onChange={(e) =>
                  handleInputChange("firstName", e.target.value)
                }
                className="w-full px-3 py-2 border border-[#FF6A0066] bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last name
              </label>
              <input
                type="text"
                value={profile.lastName}
                onChange={(e) =>
                  handleInputChange("lastName", e.target.value)
                }
                className="w-full px-3 py-2 border border-[#FF6A0066] bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) =>
                  handleInputChange("email", e.target.value)
                }
                className="w-full px-3 py-2 border border-[#FF6A0066] bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) =>
                  handleInputChange("phone", e.target.value)
                }
                className="w-full px-3 py-2 border border-[#FF6A0066] bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Country Dropdown */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <button
                type="button"
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                className="w-full px-3 py-2 border border-[#FF6A0066] rounded-md bg-white text-left focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all flex justify-between items-center"
              >
                {profile.country}
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform ${
                    isCountryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isCountryOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-[#FF6A0066] rounded-md shadow-lg">
                  {countries.map((country) => (
                    <button
                      key={country}
                      onClick={() => {
                        handleInputChange("country", country);
                        setIsCountryOpen(false);
                      }}
                      className="w-full px-3 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors"
                    >
                      {country}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Dropdown */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <button
                type="button"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="w-full px-3 py-2 border border-[#FF6A0066] rounded-md bg-white text-left focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all flex justify-between items-center"
              >
                {profile.language}
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform ${
                    isLanguageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isLanguageOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-[#FF6A0066] rounded-md shadow-lg">
                  {languages.map((language) => (
                    <button
                      key={language}
                      onClick={() => {
                        handleInputChange("language", language);
                        setIsLanguageOpen(false);
                      }}
                      className="w-full px-3 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors"
                    >
                      {language}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Address - Full Width */}
         <div className="mt-6">
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Address
  </label>
  <input
    type="text"
    value={profile.address}
    onChange={(e) => handleInputChange("address", e.target.value)}
    className="w-full px-3 py-2 border border-[#FF6A0066] bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
    placeholder="Enter your address"
  />
</div>


          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 mt-8">
            <button
              onClick={handleCancel}
              className="px-6 py-2 border border-[#FF6A0066]  rounded-md bg-[#2CBCA4] text-white cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-[#1A2E42] text-white rounded-md  cursor-pointer"
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* Password & Security Section */}
        <div className="bg-[#F9FAFB]  rounded-lg shadow-sm border border-[#FF6A0066] p-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#6B7280] mb-1">
                Password & Security
              </h3>
              <p className="text-[#6B7280]">
                Manage your account security settings.
              </p>
            </div>
            <button
              onClick={handleChangePassword}
              className="px-4 py-2 bg-[#2CBCA4] text-white rounded-md cursor-pointer"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

