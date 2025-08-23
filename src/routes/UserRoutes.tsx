// src/routes/UserRoute.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/reusable/SideBar";

const UserRoute: React.FC = () => {
  return (
    <div className="flex min-h-screen mt-16">
      <Sidebar role="user" brandName="CareBot" />

    <div className="flex min-h-screen ">
      {/* Sidebar */}
      <aside className="hidden lg:block w-64 bg-white shadow-lg mt-5">
        <Sidebar role="user" brandName="CareBot" className="h-full" />
      </aside>


      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default UserRoute;
