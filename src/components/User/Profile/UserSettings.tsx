import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function UserSettings() {
  const [timezone, setTimezone] = useState("(GMT +10:00) Sydney")
  const [dateFormat, setDateFormat] = useState("DD/MM/YYYY (e.g., 17/07/2025)")
  const [notificationEmail, setNotificationEmail] = useState("armand.gopro@caresuite.com.au")
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [inAppAlerts, setInAppAlerts] = useState(true)
  const [policyUpdateAlerts, setPolicyUpdateAlerts] = useState(true)

  const [isTimezoneOpen, setIsTimezoneOpen] = useState(false)
  const [isDateFormatOpen, setIsDateFormatOpen] = useState(false)

  const timezoneOptions = [
    "(GMT +10:00) Sydney",
    "(GMT +09:00) Tokyo",
    "(GMT +08:00) Singapore",
    "(GMT +00:00) London",
    "(GMT -05:00) New York",
    "(GMT -08:00) Los Angeles",
  ]

  const dateFormatOptions = [
    "DD/MM/YYYY (e.g., 17/07/2025)",
    "MM/DD/YYYY (e.g., 07/17/2025)",
    "YYYY-MM-DD (e.g., 2025-07-17)",
  ]

  const handleSaveSettings = () => {
    console.log("Settings saved!")
  }

  return (
    <div className="mx-auto bg-white">
      <h1 className="text-3xl font-bold text-[#2D2D2D] mb-6 px-6 pt-6">Settings</h1>

      {/* General Account Settings */}
      <div className="border border-[#FF6A0066] rounded-lg mx-6 mb-6">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-[#6B7280] mb-6">General Account Settings</h2>

          <div className="space-y-6">
            {/* Timezone */}
            <div className="relative">
              <label className="block  text-[#6B7280] mb-2">Timezone</label>
              <button
                onClick={() => setIsTimezoneOpen(!isTimezoneOpen)}
                className="w-1/2 flex items-center justify-between px-3 py-2 border border-[#FF6A0066] rounded-md bg-white text-left text-sm text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                <span>{timezone}</span>
                <ChevronDown className={`h-4 w-4 text-[#6B7280] transition-transform ${isTimezoneOpen ? "rotate-180" : ""}`} />
              </button>
              {isTimezoneOpen && (
                <div className="absolute z-10 mt-1 w-1/2 bg-white border border-[#FF6A0066] rounded-md shadow-lg">
                  {timezoneOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setTimezone(option)
                        setIsTimezoneOpen(false)
                      }}
                      className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Date Format */}
            <div className="relative">
              <label className="block  text-[#6B7280] mb-2">Date Format</label>
              <button
                onClick={() => setIsDateFormatOpen(!isDateFormatOpen)}
                className="w-1/2 flex items-center justify-between px-3 py-2 border border-[#FF6A0066] rounded-md bg-white text-left text-sm text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                <span>{dateFormat}</span>
                <ChevronDown className={`h-4 w-4 text-[#6B7280] transition-transform ${isDateFormatOpen ? "rotate-180" : ""}`} />
              </button>
              {isDateFormatOpen && (
                <div className="absolute z-10 mt-1 w-1/2 bg-white border border-[#FF6A0066] rounded-md shadow-lg">
                  {dateFormatOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setDateFormat(option)
                        setIsDateFormatOpen(false)
                      }}
                      className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Notification Email */}
            <div>
              <label className="block text-[#6B7280] mb-2">Notification Email</label>
              <input
                type="email"
                value={notificationEmail}
                onChange={(e) => setNotificationEmail(e.target.value)}
                className="w-1/2 px-3 py-2 border border-[#FF6A0066] rounded-md text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="border border-[#FF6A0066] rounded-lg mx-6 mb-6">
        <div className="p-6">
          <h2 className=" text-xl font-semibold text-[#6B7280] mb-6">Notification Preferences</h2>

          <div className="space-y-6">
            {/* Email Notifications */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-1">Email Notifications</h3>
                <p className=" text-[#6B7280]">Receive important updates and alerts via email.</p>
              </div>
              <button
                onClick={() => setEmailNotifications(!emailNotifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                  emailNotifications ? "bg-[#FF715B]" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    emailNotifications ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* In-App Alerts */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className=" text-xl font-semibold text-[#2D2D2D] mb-1">In-App Alerts</h3>
                <p className="text-[#6B7280]">Receive real-time notifications within the CareSuite AI application.</p>
              </div>
              <button
                onClick={() => setInAppAlerts(!inAppAlerts)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                  inAppAlerts ? "bg-[#2CBCA4]" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    inAppAlerts ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Policy Update Alerts */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-1">Policy Update Alerts</h3>
                <p className=" text-gray-600">Get notified when policies are updated or new ones are assigned.</p>
              </div>
              <button
                onClick={() => setPolicyUpdateAlerts(!policyUpdateAlerts)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                  policyUpdateAlerts ? "bg-[#2CBCA4]" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    policyUpdateAlerts ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="px-6 pb-6">
        <div className="flex justify-end">
          <button
            onClick={handleSaveSettings}
            className="px-6 py-3 bg-[#2CBCA4] text-white text-sm font-medium rounded-md cursor-pointer"
          >
            Save All Setting
          </button>
        </div>
      </div>
    </div>
  )
}
