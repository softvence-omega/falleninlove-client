import React, { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { ChevronRight, ChevronDown, Menu, X } from "lucide-react";

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
}

const menuConfig: Record<string, NavItem[]> = {
  user: [
    { name: "Home Dashboard", icon: <ChevronRight />, path: "/userdash" },
    {
      name: "Policies & Procedures Suite",
      icon: <ChevronRight />,
      children: [
        { name: "Policies", icon: <ChevronRight />, path: "policies" },
        { name: "Procedures", icon: <ChevronRight />, path: "procedures" },
        { name: "Documents", icon: <ChevronRight />, path: "documents" },
        { name: "Bookmarks", icon: <ChevronRight />, path: "bookmarks" },
      ],
    },
    { name: "AI Policy Assistant", icon: <ChevronRight />, path: "/dashboard" },
    { name: "Voice-Activated Companion", icon: <ChevronRight />, path: "/settings" },
    { name: "Induction & Training", icon: <ChevronRight />, path: "/settings" },
    { name: "Emergency Quick Access", icon: <ChevronRight />, path: "/settings" },
    { name: "Survey & Wellbeing", icon: <ChevronRight />, path: "/settings" },
    { name: "Language a7 Accessibility", icon: <ChevronRight />, path: "/settings" },
    { name: "Help & Support", icon: <ChevronRight />, path: "/settings" },
  ],
  admin: [
    { name: "Org Dashboard", icon: <ChevronRight />, path: "/" },
    { name: "Document Suite", icon: <ChevronRight />, path: "/documents" },
  ],
  superadmin: [
    { name: "Platform Dashboard", icon: <ChevronRight />, path: "/superadmin" },
  ],
};

const Sidebar: React.FC<SidebarProps> = ({
  role = "user",
  brandName = "CareBot",
  className = "",
}) => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMenu = (name: string) =>
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));

  const navItems = useMemo(() => menuConfig[role] || [], [role]);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 rounded bg-white shadow"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar Drawer for Mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsSidebarOpen(false)}
          />
          <aside className="relative w-64 bg-white h-full shadow p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-xl text-blue-600">{brandName}</span>
              <button onClick={() => setIsSidebarOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
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
                        <div className="ml-6 flex flex-col gap-1">
                          {item.children.map((sub, subIdx) => (
                            <NavLink
                              key={subIdx}
                              to={sub.path || "#"}
                              onClick={() => setIsSidebarOpen(false)}
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
                    onClick={() => setIsSidebarOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-md font-medium ${
                        isActive ? "bg-blue-100 text-teal-700" : "text-gray-600 hover:bg-gray-100"
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
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className={`hidden lg:block w-64 bg-white border-r h-screen sticky top-0 ${className}`}>
        <div className="p-4 text-xl font-bold text-blue-600 border-b">{brandName}</div>
        <nav className="flex flex-col gap-1 p-4 overflow-y-auto h-full">
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
                    <div className="ml-6 flex flex-col gap-1">
                      {item.children.map((sub, subIdx) => (
                        <NavLink
                          key={subIdx}
                          to={sub.path || "#"}
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-2 py-1 rounded-md text-sm font-medium ${
                              isActive ? "bg-blue-50 text-teal-700" : "text-gray-500 hover:bg-gray-50"
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
                  `flex items-center gap-3 px-3 py-2 rounded-md font-medium ${
                    isActive ? "bg-blue-100 text-teal-700" : "text-gray-600 hover:bg-gray-100"
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
    </>
  );
};

export default Sidebar;
