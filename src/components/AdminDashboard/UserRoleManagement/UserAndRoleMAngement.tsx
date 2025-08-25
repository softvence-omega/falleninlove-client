import React from "react";


import group1 from "../../../assets/admin/Group 155.png"
import group2 from "../../../assets/admin/Group 156.png"
import group3 from "../../../assets/admin/Group 157.png"

const UserAndRoleMAngement: React.FC = () => {
    return (
        <div className="p-4">
            {/* Title */}
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-10">
                User & Role Management
            </h2>

            {/* Card Container */}
            <div className="mt-4 bg-white border border-orange-200 rounded-xl shadow-sm p-6 ">
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-4 mx-6">
                    User & Role Overview
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-6 ">
                    {/* Total Surveys */}
                    <div className="border border-[#8D5D3A75] rounded-lg p-5 px-10 flex items-center justify-between shadow-sm bg-[#F9FAFB] ">
                        {/* Left side: Number + Text */}
                        <div className="flex flex-col gap-3 items-start ">
                            <p className="text-gray-600 font-medium">Total Users</p>
                            <p className="text-[#2CBCA4] text-2xl font-bold">120</p>

                        </div>
                        {/* Right side: Image */}
                        <img src={group1} alt="group2" className="w-12 h-12" />
                    </div>

                    {/* Avg Response Rate */}
                    <div className="border border-[#8D5D3A75] rounded-lg p-5 flex items-center justify-center shadow-sm bg-[#F9FAFB] ">
                        <div className="flex items-center justify-between w-full">
                            {/* Number */}
                            <p className="text-green-600 text-xl font-bold">72</p>
                            {/* Image */}
                            <img src={group2} alt="group2" className="w-8 h-8" />
                        </div>
                    </div>


                    {/* Total Feedback Items */}
                    <div className="border border-[#8D5D3A75] rounded-lg p-5 px-10 flex items-center justify-between shadow-sm bg-[#F9FAFB] ">
                        {/* Left side: Number + Text */}
                        <div className="flex flex-col gap-3 items-start ">
                            <p className="text-gray-600 font-medium">Total Roles</p>
                            <p className="text-[#2CBCA4] text-2xl font-bold">8</p>

                        </div>
                        {/* Right side: Image */}
                        <img src={group3} alt="group2" className="w-12 h-12" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserAndRoleMAngement;
