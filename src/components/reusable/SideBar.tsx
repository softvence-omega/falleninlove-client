import React, { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import {
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Home,
  FileText,
  Bot,
  Mic,
  BookOpen,
  Shield,
  HeartPulse,
  Globe,
  HelpCircle,
} from "lucide-react";

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
    { name: "Home Dashboard", icon: <Home size={18} />, path: "/userdash" },
    {
      name: "Policies & Procedures Suite",
      icon: <FileText size={18} />,
      children: [
        { name: "Policies", icon: <ChevronRight size={14} />, path: "policies" },
        { name: "Procedures", icon: <ChevronRight size={14} />, path: "procedures" },
        { name: "Documents", icon: <ChevronRight size={14} />, path: "documents" },
        { name: "Bookmarks", icon: <ChevronRight size={14} />, path: "bookmarks" },
      ],
    },
    { name: "AI Policy Assistant", icon: <Bot size={18} />, path: "ai-poilicy-assistant" },
    { name: "Voice-Activated Companion", icon: <Mic size={18} />, path: "voice-activate-companion" },
    { name: "Induction & Training", icon: <BookOpen size={18} />, path: "induction-training" },
    { name: "Emergency Quick Access", icon: <Shield size={18} />, path: "emergency-access" },
    { name: "Survey & Wellbeing", icon: <HeartPulse size={18} />, path: "survey-well-being" },
    { name: "Language & Accessibility", icon: <Globe size={18} />, path: "settings" },
    { name: "Help & Support", icon: <HelpCircle size={18} />, path: "supports" },
  ],
  admin: [
    { name: "Org Dashboard", icon: <Home size={18} />, path: "/" },
    { name: "Document Suite", icon: <FileText size={18} />, path: "/documents" },
  ],
  superadmin: [
    { name: "Platform Dashboard", icon: <Home size={18} />, path: "/superadmin" },
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
      {/* ✅ Mobile Menu Button (now top-right corner) */}
      <div className="fixed top-4 right-4 z-[9999] lg:hidden">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 rounded-md bg-gray-800 text-white shadow-lg"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* ✅ Sidebar Drawer for Mobile */}
      <div
        className={`fixed inset-0 z-[9998] transition-transform duration-300 lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsSidebarOpen(false)}
        />
        {/* Sidebar */}
        <aside className="relative w-64 bg-white h-full shadow p-4 overflow-y-auto z-[10000]">
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
      </div>

      {/* ✅ Desktop Sidebar */}
      <aside
        className={`hidden lg:block w-64 bg-white border-r h-screen sticky top-0 ${className}`}
      >
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
                  `flex items-center gap-3 px-3 py-2 rounded-md font-medium ${
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
    </>
  );
};

export default Sidebar;
