import React, { useState } from "react";
import QuickSummaryCard from "@/components/reusable/QuickSummaryCardUser";
import FeatureCard from "@/components/reusable/FeatureCardUser";
import { featuresData, quickSummaryData } from "@/lib/dashboardUserData";

const HomeDashboardUser: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen w-full bg-gray-50 font-poppins">
      <div className="min-h-screen p-4 sm:p-6 lg:p-8 w-full">
        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#2D2D2D] font-bold mb-6 px-2 sm:px-6 lg:px-10">
          Home Dashboard
        </h1>

        {/* Quick Summary Section */}
        <section className="mb-10">
          <h2 className="text-lg sm:text-xl lg:text-2xl text-[#6B7280] font-bold mb-4 px-2 sm:px-6 lg:px-10">
            Quick Summary
          </h2>
          <div className="px-2 sm:px-4 lg:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {quickSummaryData.map((item, idx) => (
                <QuickSummaryCard key={idx} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section>
          <h2 className="text-lg sm:text-xl lg:text-2xl text-[#6B7280] font-bold mb-4 px-2 sm:px-6 lg:px-10">
            Key Features
          </h2>
          <div className="px-2 sm:px-4 lg:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
        </section>
      </div>
    </div>
  );
};

export default HomeDashboardUser;
