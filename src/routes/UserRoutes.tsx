// src/routes/UserRoute.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/reusable/SideBar";

const UserRoute: React.FC = () => {
  return (
    <div className="flex min-h-screen mt-16">
      

    <div className="flex min-h-screen ">
     
 <aside>
    <Sidebar role="user" brandName="CareBot" />
 </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6">
        <Outlet />
      </main>
    </div>
    </div>
  );
};

export default UserRoute;
