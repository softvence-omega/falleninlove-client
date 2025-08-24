// src/routes/AdminRoute.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "@/components/User/UserNavbar";
import SideBar from "@/components/reusable/SideBar";

const AdminRoute: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <UserNavbar />

      {/* Main Dashboard Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <SideBar role="admin" />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto mt-20">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminRoute;
