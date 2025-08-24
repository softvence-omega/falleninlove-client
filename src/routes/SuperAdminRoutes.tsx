import React from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "@/components/User/UserNavbar";
import SideBar from "@/components/reusable/SideBar";

const SuperAdminRoutes: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <UserNavbar />

      {/* Main Dashboard Layout */}
      <div className="flex min-h-screen mt-16">
        {/* Sidebar */}
        <SideBar role="superadmin" />

        {/* Main Content (fills remaining space) */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default SuperAdminRoutes;
