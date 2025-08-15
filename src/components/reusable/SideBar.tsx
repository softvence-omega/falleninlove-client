import React, { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { ChevronRight, ChevronDown, Home, ListChecks, FileText, File, Bookmark, LayoutDashboard, Settings, HelpCircle, Pen, HeadphonesIcon } from "lucide-react";

export interface NavItem {
  name: string;
  icon: React.ReactNode;
  path?: string;
  children?: NavItem[];
}

interface SidebarProps {
  role?: "user" | "admin" | "superadmin";
  brandName?: string;
  className?: string;
  widthClass?: string;
}

// Role-based menu configuration
const menuConfig: Record<string, NavItem[]> = {
  // user sidebar
  user: [
    { name: "Home Dashboard", icon: <Home size={18} />, path: "/userdash" },
  {
    name: "Policies & Procedures Suite",
    icon: <ListChecks size={18} />, path:"/policies",
    children: [
      { name: "Policies", icon: <FileText size={16} />, path: "/policies/policies" },
      { name: "Procedures", icon: <ListChecks size={16} />, path: "/procedures" },
      { name: "Documents", icon: <File size={16} />, path: "/documents" },
      { name: "Bookmarks", icon: <Bookmark size={16} />, path: "/bookmarks" },
    ],
  },
  { name: "AI Policy Assistant", icon: <LayoutDashboard size={18} />, path: "/dashboard" },
  { name: "Voice-Activated Companion", icon: <Settings size={18} />, path: "/settings" },
  { name: "Induction & Training", icon: <Settings size={18} />, path: "/settings" },
    { name: "Emergency Quick Access", icon: <Settings size={18} />, path: "/settings" },
    { name: "Survey & Wellbeing", icon: <Pen size={18} />, path: "/settings" },
    { name: "Language a7 Accessibility", icon: <Settings size={18} />, path: "/settings" },
    { name: "Help & Support", icon: <HelpCircle size={18} />, path: "/settings" },
  ],
  // admin sidebar
  admin: [
   { name: "Org Dashboard", icon: <Home size={18} />, path: "/" },
  {  name: "Document Suite", icon: <ListChecks size={18} />  },
  { name: "AI Assistant Training Hub ", icon: <HeadphonesIcon   size={18} />, path: "/dashboard" },
  { name: "Induction Flow Builder", icon: <Settings size={18} />, path: "/settings" },
  { name: "Compliance Dashboard", icon: <Settings size={18} />, path: "/settings" },
    { name: "Survey & Feedback Management", icon: <Pen size={18} />, path: "/settings" },
    { name: "User & Role management", icon: <Settings size={18} />, path: "/settings" },
    { name: "Organization Settings & Branding", icon: <Settings size={18} />, path: "/settings" },
    { name: "Audit Mode Access", icon: <Settings size={18} />, path: "/settings" },
    { name: "Language a7 Accessibility", icon: <Settings size={18} />, path: "/settings" },
    { name: "Reports & Logs", icon: <ChevronRight size={18} />, path: "/audit" },
  ],
  // SuperAdmin Sidebar
  superadmin: [
    { name: "platform Dashboard", icon: <ChevronRight size={18} />, path: "/superadmin" },
    { name: "Document Suite Library", icon: <Settings size={18} />, path: "/settings" },
    { name: "AI & Automation Settings", icon: <Settings size={18} />, path: "/settings" },
    { name: "Organizations Manager", icon: <Settings size={18} />, path: "/settings" },
        { name: "System Settings", icon: <ChevronRight size={18} />, path: "/system-settings" },
    { name: "Audit Logs", icon: <ChevronRight size={18} />, path: "/audit" },
    { name: "Team & Access Control", icon: <Settings size={18} />, path: "/settings" },
    { name: "Communication Hub", icon: <Settings size={18} />, path: "/settings" },
    { name: "Compliance & Privacy", icon: <Settings size={18} />, path: "/settings" },
    { name: "AI Bot Training & Knowledge Hub", icon: <Settings size={18} />, path: "/settings" },
    { name: "AI Module Settings", icon: <Settings size={18} />, path: "/settings" },
    { name: "AI Version Control & Logs", icon: <Settings size={18} />, path: "/settings" },
  ],
};

const Sidebar: React.FC<SidebarProps> = ({
  role = "user",
  brandName = "CareBot",
  className = "",
  widthClass = "w-1/5",
}) => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (name: string) =>
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));

  // Select menu items based on role
  const navItems = useMemo(() => menuConfig[role] || [], [role]);

  return (
    <aside
      className={`bg-white h-screen border-r fixed left-0 top-0 z-50 ${widthClass} ${className}`}
    >
      <div className="p-4 text-xl font-bold text-blue-600 border-b">
        {brandName}
      </div>
      <nav className="flex flex-col gap-1 p-4">
        {navItems.map((item, idx) => {
          const isOpen = openMenus[item.name] || false;

          if (item.children) {
            return (
              <div key={idx}>
                <button
                  onClick={() => toggleMenu(item.name)}
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 w-full"
                >
                  {item.icon}
                  <span className="flex-1 text-left">{item.name}</span>
                  {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>
                {isOpen && (
                  <div className="ml-8 flex flex-col gap-1">
                    {item.children.map((sub, subIdx) => (
                      <NavLink
                        key={subIdx}
                        to={sub.path || "#"}
                        className={({ isActive }) =>
                          `flex items-center gap-2 px-2 py-1 rounded-md text-sm font-medium ${
                            isActive
                              ? "bg-blue-50 text-teal-700"
                              : "text-gray-500 hover:bg-gray-50"
                          }`
                        }
                      >
                        {sub.icon}
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <NavLink
              key={idx}
              to={item.path || "#"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 shadow-r-md rounded-md font-medium ${
                  isActive
                    ? "bg-blue-100 text-teal-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
