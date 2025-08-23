import React, { useState } from "react";
import QuickSummaryCard from "@/components/reusable/QuickSummaryCardUser";
import FeatureCard from "@/components/reusable/FeatureCardUser";
import { featuresData, quickSummaryData } from "@/lib/dashboardUserData";

const HomeDashboardUser: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="min-h-screen m-0 mt-16 "
    >
      <div className="bg-gray-50 p-6 min-h-screen">
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
          </div>
        </div>

        {/* Key Features */}
        <div>
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
      </div>
    </div>
  );
};

export default HomeDashboardUser;
