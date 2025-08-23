import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "@/components/reusable/SideBar"; // role-based sidebar
import QuickSummaryCard from "@/components/reusable/QuickSummaryCardUser";
import FeatureCard from "@/components/reusable/FeatureCardUser";
import { featuresData, quickSummaryData } from "@/lib/dashboardUserData";

const Dashboard: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="min-h-screen m-0 mt-16"
    >
      {/* Mobile menu button (top-left) */}
      <button
        aria-label="Toggle sidebar"
        onClick={() => setShowSidebar(true)}
        className="lg:hidden fixed top-20 left-4 z-50 bg-white shadow px-3 py-2 rounded-lg"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar overlay for small screens */}
      {showSidebar && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowSidebar(false)}
          ></div>

          {/* Sidebar panel */}
          <aside className="absolute top-0 left-0 w-64 h-full bg-white shadow-lg p-4">
            <button
              aria-label="Close sidebar"
              onClick={() => setShowSidebar(false)}
              className="absolute top-4 right-4"
            >
              <X className="w-6 h-6" />
            </button>
            <Sidebar role="user" brandName="CareBot" className="h-full" />
          </aside>
        </div>
      )}

      <div className="grid lg:grid-cols-5 gap-0 min-h-screen mx-auto">
        {/* Sidebar on LEFT for large screens */}
        <aside className="hidden lg:block lg:col-span-1 sticky top-16 h-[calc(100vh-4rem)] bg-white shadow">
          <Sidebar role="user" brandName="CareBot" className="h-full" />
        </aside>

        {/* Main Content */}
        <main className="col-span-5 lg:col-span-4 bg-gray-50 p-6">
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
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
