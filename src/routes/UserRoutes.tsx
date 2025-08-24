// src/routes/UserRoute.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/reusable/SideBar";
import UserNavbar from "@/components/User/UserNavbar";

const UserRoute: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <UserNavbar />

      {/* Main Dashboard Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar role="user" />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto mt-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserRoute;


