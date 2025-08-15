/*  Similar cards -  
User 
i.
 ii.
 Quick summery [Home dashboard]
 Key Emergency contacts [Emergency Quick Access]
 Admin 
i. Organization dashboard [Org dashboard top cards]
 Super admin  
i.
 ii.
 Dashboard top cards [Dashboard]
 View anonymized usage report top cards [AI and Automation library] */

import React from "react";
import clsx from "clsx";

interface QuickSummaryCardProps {
  title: string;
  value: string;
  linkText: string;
  linkHref: string;
  color: "blue" | "red" | "green" | "yellow";
}

const colorMap: Record<QuickSummaryCardProps["color"], string> = {
  blue: "text-blue-600",
  red: "text-red-600",
  green: "text-green-600",
  yellow: "text-yellow-600",
};

const QuickSummaryCard: React.FC<QuickSummaryCardProps> = ({
  title,
  value,
  linkText,
  linkHref,
  color,
}) => (
  <div className="mr-6">
    <div className="w-[275px] h-[175px] border border-orange-300 rounded-lg p-6 flex flex-col justify-between shadow-sm bg-white">
      <h4 className="text-gray-700 font-medium text-2xl">{title}</h4>
      <span className={clsx("text-2xl font-bold mt-2", colorMap[color])}>
        {value}
      </span>
      <a href={linkHref} className="text-lg text-gray-400 mt-2 hover:underline">
        {linkText} →
      </a>
    </div>
  </div>
);

export default QuickSummaryCard;
