

import { useState } from "react"

interface OrganizationData {
  name: string
  address: string
  phone: string
  email: string
}

export default function Orgranisation() {
  const [formData, setFormData] = useState<OrganizationData>({
    name: "CareSuite AI Solutions",
    address: "123 Care Street, Sydney NSW 2000, Australia",
    phone: "+61 2 1234 5678",
    email: "contact@caresuite.com.au",
  })

  const handleInputChange = (field: keyof OrganizationData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSave = () => {
    console.log("Saving organization settings:", formData)
    // Save logic here
  }

  return (
    <div className="space-y-8 p-4">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-[#2D2D2D]">
        Organisation Settings & Branding
      </h1>

      {/* Settings Card */}
      <div className="bg-white rounded-lg border border-[#FFC399] p-8">
        <div className="space-y-6">
          {/* Section Header */}
          <h2 className="text-xl font-semibold text-[#6B7280] mb-6">
            General Organisation Information
          </h2>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Organization Name */}
            <div className="space-y-2">
              <label
                htmlFor="orgName"
                className=" text-[#6B7280]"
              >
                Organisation Name
              </label>
              <input
                id="orgName"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full px-3 py-2 border border-[#FFC399]  rounded-md text-[#6B7280] "
              />
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label
                htmlFor="address"
                className="text-[#6B7280]"
              >
                Address
              </label>
              <input
                id="address"
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="w-full px-3 py-2 border border-[#FFC399] text-[#6B7280]  rounded-md "
              />
            </div>

            {/* Phone and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Number */}
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-[#6B7280]"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full px-3 py-2 border border-[#FFC399] text-[#6B7280]  rounded-md "
                />
              </div>

              {/* Contact Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-[#6B7280]"
                >
                  Contact Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-3 py-2 border border-[#FFC399] text-[#6B7280]  rounded-md "
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-4">
            <button
              onClick={handleSave}
              className="bg-[#2CBCA4]  text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 cursor-pointer"
            >
              Save General Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
