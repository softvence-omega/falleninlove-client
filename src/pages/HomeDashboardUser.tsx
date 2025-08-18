
import React, { useState } from "react";
import Sidebar from "@/components/reusable/SideBar"; // role-based sidebar
import QuickSummaryCard from "@/components/reusable/QuickSummaryCardUser";
import FeatureCard from "@/components/reusable/FeatureCardUser";
import { featuresData, quickSummaryData } from "@/lib/dashboardUserData";

const Dashboard: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }} className=" min-h-screen m-0">
      <div className="grid grid-cols-5 gap-0 min-h-screen mx-auto">
        {/* Role-based Sidebar — change role prop as needed */}
        <div className="col-span-5 sm:col-span-1 sticky top-0 h-screen"><Sidebar role="user" brandName="CareBot" className="h-full" /></div>

        <main className="col-span-5 sm:col-span-4 bg-gray-50 p-6">
          <h1 className="text-4xl text-[#2D2D2D] px-10 font-bold mb-6">
            Home Dashboard
          </h1>

          {/* Quick Summary */}
         <div className="w-full mb-10"> 
          <h2 className="text-2xl text-[#6B7280] px-10 font-bold mb-4">
            Quick Summary
          </h2>
          <div className="grid justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 xl:gap-4">
            {quickSummaryData.map((item, idx) => (
              <QuickSummaryCard key={idx} {...item} />
            ))}
          </div></div>

          {/* Key Features */}
         <div >
           <h2 className="text-2xl text-[#6B7280] px-10 font-bold mb-4">
            Key Features
          </h2>
          <div className="grid justify-items-center sm:grid-cols-2 md:grid-cols-2 gap-6 lg:grid-cols-3 sm:gap-6 xl:gap-8">
            {featuresData.map((item, idx) => (
              <FeatureCard
                key={idx}
                {...item}
                isActive={activeIndex === idx}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>
         </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
