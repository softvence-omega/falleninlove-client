/* Similar cards -  
User 
1. Available policy cards [Policy and Procedure Suits]
 2. Pending induction modules [Induction and training]
 3. Completed training modules  [Induction and training]
 4. Critical Emergency procedure [Emergency Quick Access]
 5. Pending survey and completed survey cards [Survey and Wellbeing] */

import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import Sidebar, { NavItem } from "./SideBar";
import { Bookmark, File, FileText, Home, LayoutDashboard, ListChecks, Settings } from "lucide-react";
import PolicyActionButton from "./ButtonAll";
import { policies } from "@/lib/dashboardUserData";


interface Policy {
  id: string | number;
  title: string;
  description: string;
  category: string;
  delivery: string;
  lastUpdated: string;
  isPrimary?: boolean; 
  onClick?: () => void;
}

interface PolicyCardsProps {
  policies: Policy[];
}

const PolicyCards: React.FC<PolicyCardsProps> = ({}) => {
      const [activePolicyId, setActivePolicyId] = useState<number | string | null>(null);

    

  const navItems: NavItem[] = [
  { name: "Home Dashboard", icon: <Home size={18} />, path: "/" },
  {
    name: "Policies & Procedures Suite",
    icon: <ListChecks size={18} />,
    children: [
      { name: "Policies", icon: <FileText size={16} />, path: "/policies" },
      { name: "Procedures", icon: <ListChecks size={16} />, path: "/procedures" },
      { name: "Documents", icon: <File size={16} />, path: "/documents" },
      { name: "Bookmarks", icon: <Bookmark size={16} />, path: "/bookmarks" },
    ],
  },
  { name: "Dashboard", icon: <LayoutDashboard size={18} />, path: "/dashboard" },
  { name: "Settings", icon: <Settings size={18} />, path: "/settings" },
  
];

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }} className="min-h-screen mx-auto mt-16">
    <div className="grid grid-cols-5 gap-0 min-h-screen">
      <div className="col-span-5 sm:col-span-1 sticky top-0 h-screen">  <Sidebar navItems={navItems} brandName="CareBot" className="h-full" /></div>
    
        <main  className="col-span-5 sm:col-span-4 bg-gray-50 p-6"> <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {policies.map((policy) => {
        const isActive = activePolicyId === policy.id;

        return (
        <Card
          key={policy.id}
          className="w-full border border-orange-300 rounded-lg shadow-sm flex flex-col justify-between"
        >
          {/* Title */}
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold text-gray-800 leading-snug">
              {policy.title}
            </CardTitle>
          </CardHeader>

          {/* Description & Meta */}
          <CardContent className="flex flex-col gap-2">
            <p className="text-sm text-gray-600 leading-relaxed">{policy.description}</p>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>
                <span className="font-medium">Category:</span> {policy.category}
              </span>
              <span>
                <span className="font-medium">Last Updated:</span> {policy.lastUpdated}
              </span>
            </div>
            <span className="text-xs text-gray-500">{policy.delivery}</span>
          </CardContent>

          {/* Button */}
          <CardFooter>
            <PolicyActionButton
                      isActive={isActive}
                      onClick={() => setActivePolicyId(policy.id)} label=" View Policy"
            />
          </CardFooter>
        </Card>
        )
})}
    </div></main>
       
      </div>
    </div>
  );
};

export default PolicyCards;
