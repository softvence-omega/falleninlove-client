import React from "react";


import group1 from "../../../assets/admin/Group 155.png"
import group2 from "../../../assets/admin/Group 156.png"
import group3 from "../../../assets/admin/Group 157.png"

const EngagementOverview: React.FC = () => {
  return (
    <div className="p-4">
      {/* Title */}
      <h2 className="text-4xl font-bold text-[#2D2D2D] mb-10">
        Surveys & Feedback Management
      </h2>

      {/* Card Container */}
      <div className="mt-4 bg-white border border-orange-200 rounded-xl shadow-sm p-6 ">
        <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4 mx-6">
          Engagement Overview
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-6 ">
          {/* Total Surveys */}
          <div className="border border-[#8D5D3A75] rounded-lg p-5 flex flex-col gap-2 items-center justify-center shadow-sm bg-[#F9FAFB]">
          <img src={group1} alt="group1" />
            <p className="text-gray-600 font-medium">Total Surveys</p>
            <p className="text-[#FF715B] text-2xl font-bold">8</p>
          </div>

          {/* Avg Response Rate */}
          <div className="border border-[#8D5D3A75] rounded-lg p-5 flex flex-col  gap-2 items-center justify-center shadow-sm bg-[#F9FAFB]">
          <img src={group2} alt="group2" />
            <p className="text-gray-600 font-medium">Avg. Response Rate</p>
            <p className="text-green-600 text-xl font-bold">72%</p>
          </div>

          {/* Total Feedback Items */}
          <div className="border border-[#8D5D3A75] rounded-lg p-5 flex flex-col  gap-2 items-center justify-center shadow-sm bg-[#F9FAFB]">
            <img src={group3} alt="group3" />
            <p className="text-gray-600 font-medium">Total Feedback Items</p>
            <p className="text-green-600 text-xl font-bold">45</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementOverview;
