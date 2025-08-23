// src/routes/UserRoute.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/reusable/SideBar";
import UserNavbar from "@/components/User/UserNavbar";

const UserRoute: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <UserNavbar />

      {/* Main Dashboard Layout */}
      <div className="flex min-h-screen mt-16">
        {/* Sidebar */}
        <Sidebar role="user" />

        {/* Main Content (fills remaining space) */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default UserRoute;
