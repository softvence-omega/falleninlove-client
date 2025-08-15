
import React, { useState } from "react";
import Sidebar from "@/components/reusable/SideBar"; // role-based sidebar
import { QuickSummaryCardProps } from "@/components/QuickSummaryCard";
import { FeatureCardProps } from "@/components/FeatureCard";
import QuickSummaryCard from "@/components/reusable/QuickSummaryCardUser";
import FeatureCard from "@/components/reusable/FeatureCardUser";
import UserhomedashFeature1 from "../assets/UserHomedashFeature/UserHomedashFeature1.png";
import UserhomedashFeature2 from "../assets/UserHomedashFeature/UserHomedashFeature2.png";
import UserhomedashFeature3 from "../assets/UserHomedashFeature/UserHomedashFeature3.png";
import UserhomedashFeature4 from "../assets/UserHomedashFeature/UserHomedashFeature4.png";
import UserhomedashFeature5 from "../assets/UserHomedashFeature/UserHomedashFeature5.png";
import UserhomedashFeature6 from "../assets/UserHomedashFeature/UserHomedashFeature6.png";

const quickSummaryData: QuickSummaryCardProps[] = [
  {
    title: "Assigned Policies",
    value: "12",
    linkText: "View All",
    linkHref: "#",
    color: "blue",
  },
  {
    title: "Pending Induction",
    value: "03",
    linkText: "Start Now",
    linkHref: "#",
    color: "red",
  },
  {
    title: "Survey & Wellbeing",
    value: "05",
    linkText: "See Details",
    linkHref: "#",
    color: "green",
  },
  {
    title: "Alerts",
    value: "01",
    linkText: "Resolve",
    linkHref: "#",
    color: "yellow",
  },
];

const featuresData: FeatureCardProps[] = [
  {
    title: "AI Policy Assistant",
    description: "Get instant, contextual guidance on policies and procedures.",
    buttonText: "Ask the AI",
    buttonColor: "green",
    img: UserhomedashFeature1,
  },
  {
    title: "Voice Companion",
    description: "Access information hands-free with voice commands.",
    buttonText: "Activate Voice",
    buttonColor: "yellow",
img: UserhomedashFeature2,
  },
  {
    title: "Induction & Training",
    description: "Manage your learning modules and track progress.",
    buttonText: "Go to Training",
    buttonColor: "blue",
    img: UserhomedashFeature3,
  },
  {
    title: "Surveys & Wellbeing",
    description: "Share your feedback and access wellbeing resources.",
    buttonText: "Take Survey",
    buttonColor: "yellow",
    img: UserhomedashFeature4,
  },
  {
    title: "Language & Accessibility",
    description: "Adjust language settings and accessibility options.",
    buttonText: "Settings",
    buttonColor: "yellow",
    img: UserhomedashFeature5,
  },
  {
    title: "Help & Support",
    description: "Find answers to your questions and get assistance.",
    buttonText: "Go Help",
    buttonColor: "blue",
    img: UserhomedashFeature6,
  },
];

const Dashboard: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }} className=" min-h-screen mx-auto">
      <div className="grid grid-cols-5 gap-0 min-h-screen ">
        {/* Role-based Sidebar — change role prop as needed */}
        <div className="col-span-5 sm:col-span-1 sticky top-0 h-screen"><Sidebar role="user" brandName="CareBot" className="h-full" /></div>

        <main className="col-span-5 sm:col-span-4 bg-gray-50 p-6">
          <h1 className="text-4xl text-[#2D2D2D] px-7 font-bold mb-6">
            Home Dashboard
          </h1>

          {/* Quick Summary */}
          <h2 className="text-2xl text-[#6B7280] px-7 font-bold mb-4">
            Quick Summary
          </h2>
          <div className="grid grid-flow-col auto-cols-[242px] gap-10 mb-8 pr-7 overflow-x-auto pb-2">
            {quickSummaryData.map((item, idx) => (
              <QuickSummaryCard key={idx} {...item} />
            ))}
          </div>

          {/* Key Features */}
          <h2 className="text-2xl text-[#6B7280] px-7 font-bold mb-4">
            Key Features
          </h2>
          <div className="grid  sm:grid-cols-2 md:grid-cols-2 gap-6 lg:grid-cols-3 sm:gap-6 xl:gap-8">
            {featuresData.map((item, idx) => (
              <FeatureCard
                key={idx}
                {...item}
                isActive={activeIndex === idx}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
