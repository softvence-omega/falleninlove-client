"use client"

import { useState } from "react"

interface NotificationState {
  policyExpiryAlerts: boolean
  newComplianceAlerts: boolean
  newSurveyResponses: boolean
  userOnboardingProgress: boolean
  policyUpdates: boolean
  trainingReminders: boolean
}

export function Notification() {
  const [notifications, setNotifications] = useState<NotificationState>({
    policyExpiryAlerts: true,
    newComplianceAlerts: true,
    newSurveyResponses: false,
    userOnboardingProgress: false,
    policyUpdates: true,
    trainingReminders: true,
  })

  const handleCheckboxChange = (key: keyof NotificationState) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleSave = () => {
    console.log("Saving notification settings:", notifications)
    // Save to backend
  }

  return (
    <div className="p-4">

        <div className="bg-white rounded-lg border border-[#FFC399] p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-[#6B7280] mb-6">Notification Preferences</h2>

      <div className="space-y-6">
        {/* Email Notifications Section */}
        <div>
          <h3 className=" font-medium text-[#6B7280] mb-4">Email Notifications</h3>
          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={notifications.policyExpiryAlerts}
                onChange={() => handleCheckboxChange("policyExpiryAlerts")}
                className="h-4 w-4 text-emerald-600 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-600">Policy Expiry Alerts</span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={notifications.newComplianceAlerts}
                onChange={() => handleCheckboxChange("newComplianceAlerts")}
                className="h-4 w-4 text-emerald-600 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-600">New Compliance Alerts</span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={notifications.newSurveyResponses}
                onChange={() => handleCheckboxChange("newSurveyResponses")}
                className="h-4 w-4 text-emerald-600 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-600">New Survey Responses / Feedback</span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={notifications.userOnboardingProgress}
                onChange={() => handleCheckboxChange("userOnboardingProgress")}
                className="h-4 w-4 text-emerald-600 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-600">User Onboarding Progress</span>
            </label>
          </div>
        </div>

        {/* In-App Notifications Section */}
        <div>
          <h3 className="font-medium text-[#6B7280] mb-4">In-App Notifications</h3>
          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={notifications.policyUpdates}
                onChange={() => handleCheckboxChange("policyUpdates")}
                className="h-4 w-4 text-emerald-600 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-600">Policy Updates & New Documents</span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={notifications.trainingReminders}
                onChange={() => handleCheckboxChange("trainingReminders")}
                className="h-4 w-4 text-emerald-600 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-600">Training Reminders</span>
            </label>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-8">
        <button
          onClick={handleSave}
          className="bg-[#2CBCA4]  text-white px-6 py-2 rounded-md text-sm font-medium"
        >
          Save Notification Settings
        </button>
      </div>
    </div>
    </div>
  )
}
