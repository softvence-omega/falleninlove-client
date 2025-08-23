import React from "react";
import { LifeBuoy, Brain, HeartPulse } from "lucide-react";

const SurveyWellbeing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className=" w-full">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          <span className="">
            Surveys & Wellbeing
          </span>
        </h1>

        {/* Pending Surveys */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-600 mb-6">Pending Surveys</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Annual Staff Wellbeing Survey
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Your feedback helps us understand and improve workplace wellbeing.
              </p>
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>Progress : 40%</span>
                <span>Date : 2024-06-15</span>
              </div>
              <button className="w-full cursor-pointer border py-3 rounded-md  text-black font-medium hover:bg-teal-500 transition-colors duration-200">
                Continue Module
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Policy Feedback: Incident Reporting
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Provide your insights on the recent updates to the Incident Reporting Policy.
              </p>
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>Progress : 40%</span>
                <span>Date : 2024-06-15</span>
              </div>
              <button className="w-full border cursor-pointer py-3 rounded-md  text-black font-medium hover:bg-teal-500 transition-colors duration-200">
                Continue Module
              </button>
            </div>
          </div>
        </section>

        {/* Completed Surveys */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-600 mb-6">Completed Surveys</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                New Employee Onboarding Experience
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Feedback on your initial onboarding process.
              </p>
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>Progress : 40%</span>
                <span>Date : 2024-06-15</span>
              </div>
              <button className="w-full py-3 cursor-pointer border rounded-md  text-black font-medium hover:bg-teal-500 transition-colors duration-200">
                Continue Module
              </button>
            </div>
          </div>
        </section>

        {/* Wellbeing Resources */}
        <section>
          <h2 className="text-xl font-semibold text-gray-600 mb-6">Wellbeing Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Resource 1: EAP */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full border border-gray-300">
                  <LifeBuoy size={24} className="text-gray-700" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Employee Assistance Program (EAP)
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Confidential counselling and support for personal and work-related issues.
              </p>
              <button className="w-full py-3 rounded-md bg-teal-500 text-white font-medium hover:bg-orange-400 transition-colors duration-200">
                Ask the AI
              </button>
            </div>

            {/* Resource 2: Stress Management */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full border border-gray-300">
                  <HeartPulse size={24} className="text-gray-700" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Stress Management Guide
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Tips and techniques for managing stress and promoting resilience.
              </p>
              <button className="w-full py-3 rounded-md bg-transparent text-gray-700 font-medium hover:bg-orange-400 hover:text-white border border-gray-300 transition-colors duration-200">
                Activate Voice
              </button>
            </div>

            {/* Resource 3: Mental Health */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full border border-gray-300">
                  <Brain size={24} className="text-gray-700" />
                </div>
              </div>
              <h3 className="text-lg font-semibent text-gray-900 mb-3">
                Mental Health Resources
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Links to external organizations offering mental health support and services.
              </p>
              <button className="w-full py-3 rounded-md bg-transparent text-gray-700 font-medium hover:bg-orange-400 hover:text-white border border-gray-300 transition-colors duration-200">
                Go to Training
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SurveyWellbeing;