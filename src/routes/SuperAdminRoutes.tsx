// src/routes/SuperAdminRoutes.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "@/components/User/UserNavbar";
import SideBar from "@/components/reusable/SideBar";

const SuperAdminRoutes: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <UserNavbar />

      {/* Main Dashboard Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <SideBar role="superadmin" />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto mt-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SuperAdminRoutes;

