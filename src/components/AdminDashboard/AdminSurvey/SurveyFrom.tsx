import React from "react";
import { Trash2 } from "lucide-react";

const SurveyForm: React.FC = () => {
  return (
    <div className="p-4">
    <div className="p-6 mx-auto bg-white border border-[#FF6A0066] rounded-xl shadow-sm">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-6">Build \ Edit Survey</h2>

      {/* Survey Title */}
      <div className="mb-5">
        <label className="block text-[#6B7280] font-medium mb-1">Survey Title</label>
        <input
          type="text"
          defaultValue="Annual Staff Engagement Survey"
          className="w-full border text-[#6B7280] border-[#FF6A0066] rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-300"
        />
      </div>

      {/* Description */}
      <div className="mb-5">
        <label className="block text-[#6B7280] font-medium mb-1">Description</label>
        <textarea
          defaultValue="Brief Description of This Survey"
          className="w-full border border-[#FF6A0066] rounded-md px-3 py-2 text-[#6B7280] focus:outline-none focus:ring-1 focus:ring-orange-300"
        />
      </div>

      {/* Survey Type */}
      <div className="mb-6">
        <label className="block text-[#6B7280]  font-medium mb-1">Survey Type</label>
        <input
          type="text"
          defaultValue="Wellbeing"
          className="w-full text-[#6B7280] border border-[#FF6A0066] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange-300"
        />
      </div>

      {/* Survey Questions */}
      <div className="mb-6">
        <h3 className="font-medium mb-3 text-[#6B7280] text-xl">Survey Questions</h3>

        {/* Question Card */}
        <div className="border border-[#FF6A0066] rounded-md p-4 relative">
          {/* Delete Icon */}
          <button className="absolute top-2 right-2 text-red-500 hover:text-red-600">
            <Trash2 size={18} />
          </button>

          <label className="block text-[#6B7280] font-medium mb-1">Survey Type</label>
          <input
            type="text"
            defaultValue="How Satisfied are you with your current role ?"
            className="w-full text-[#6B7280] border border-[#FF6A0066] rounded-md px-3 py-2 mb-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-300"
          />

          <input
            type="text"
            defaultValue="Question Type : Text Input"
            className="w-full text-[#6B7280] border border-orange-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange-300"
          />
        </div>

        {/* Add New Question */}
        <button className="mt-4 px-5 py-2 rounded-md bg-[#1A2E42] text-white text-sm font-medium cursor-pointer">
          + Add New Question
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-3">
        <button className="px-5 py-2 rounded-md bg-[#FF715B] text-white text-sm font-medium cursor-pointer ">
          Cancel
        </button>
        <button className="px-5 py-2 rounded-md bg-[#2CBCA4] text-white text-sm font-medium cursor-pointer ">
          Save Survey
        </button>
        <button className="px-5 py-2 rounded-md bg-[#1A2E42] text-white text-sm font-medium cursor-pointer ">
          Publish Survey
        </button>
      </div>
    </div>
    </div>
  );
};

export default SurveyForm;
