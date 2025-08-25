import React, { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import {
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
  FileCheck,
  Cog,
  FolderOpen,
  Bookmark,
  User,
  ArrowLeftCircle,
  LucideScrollText,
} from "lucide-react";
import { FaHeadset } from "react-icons/fa";
import { GrStatusWarning } from "react-icons/gr";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoLanguage } from "react-icons/io5";
import { PiHandshakeFill } from "react-icons/pi";
import { FiGrid } from "react-icons/fi";
import { LuScrollText } from "react-icons/lu";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { BsClipboardData } from "react-icons/bs";
import { PiUserListBold } from "react-icons/pi";

export interface NavItem {
  name: string;
  icon: React.ReactNode;
  path?: string;
  children?: NavItem[];
  badge?: string;
}

interface SidebarProps {
  role?: "user" | "admin" | "superadmin";
  brandName?: string;
  className?: string;
}

const menuConfig: Record<string, NavItem[]> = {
  user: [
    { name: "Home Dashboard", icon: <Home size={24} />, path: "/userdash" },
    {
      name: "Policies & Procedures Suite",
      icon: <LucideScrollText />
 ,
      children: [
        { name: "Policies", icon: <FileCheck size={18} />, path: "policies" },
        { name: "Procedures", icon: <Cog size={18} />, path: "procedures" },
        { name: "Documents", icon: <FolderOpen size={18} />, path: "documents" },
        { name: "Bookmarks", icon: <Bookmark size={18} />, path: "bookmarks" },
      ],
    },
    { name: "AI Policy Assistant", icon: <FaHeadset size={24}/>, path: "ai-policy-assistant" },
    { name: "Voice-Activated Companion", icon: <Mic size={24} />, path: "voice-activate-companion" },
    { name: "Induction & Training", icon: <BookOpen size={24} />, path: "induction-training" },
    { name: "Emergency Quick Access", icon: <GrStatusWarning  size={24}/>,path: "emergency-access" },
    { name: "Survey & Wellbeing", icon: <LiaClipboardListSolid size={24} />, path: "survey-well-being" },
    { name: "Language & Accessibility", icon: <IoLanguage size={24} />
, path: "settings" },
    { name: "Help & Support", icon: <PiHandshakeFill size={24} />, path: "supports" },
  ],
  admin: [
    { name: "Org Dashboard", icon: <FiGrid size={24} />, path: "/admin" },
    {
      name: "Document Suite",
      icon: <LuScrollText size={24} />,
      children: [
        { name: "Policies", icon: <FileCheck size={18} />, path: "admin-policies" },
        { name: "Procedures", icon: <Cog size={18} />, path: "admin-procedures" },
        { name: "Guidelines", icon: <BookOpen size={18} />, path: "admin-guidelines" },
        { name: "SOPs", icon: <Shield size={18} />, path: "admin-sops" },
        { name: "Forms", icon: <FileText size={18} />, path: "admin-forms" },
        { name: "Checklists", icon: <FileCheck size={18} />, path: "admin-checklists" },
        { name: "Work Instructions", icon: <FolderOpen size={18} />, path: "admin-work-instructions" },
        { name: "Training Materials", icon: <BookOpen size={18} />, path: "admin-training-materials" },
        { name: "Others", icon: <Bookmark size={18} />, path: "admin-others" },
      ],
    },
  
    { name: "Induction Flow Builder", icon: <Mic size={24} />, path: "admin-induction" },
    { name: "Compliance Dashboard", icon: <BiSolidBarChartAlt2 size={24}/>,path: "admin-compliance" },
    { name: "Survey & Feedback Management", icon: <BsClipboardData size={24} />, path: "admin-survey-feedback" },
    { name: "User & Role Management", icon: <PiUserListBold size={24}/>,path: "admin-user-role" },
    { name: "Organisation Settings & Branding", icon: <Cog size={24} />, path: "admin-org-settings" },
    { name: "Audit Mode Access", icon: <Shield size={24} />, path: "admin-audit" },
    { name: "Language", icon: <IoLanguage size={24}/>,path: "admin-language" },
    { name: "Reports & Logs", icon: <FileText size={24} />, path: "admin-reports" },
  ],
  superadmin: [
    { name: "Platform Dashboard", icon: <Home size={24} />, path: "/super-admin" },
    {
      name: "Document Suite Library",
      icon: <FileText size={24} />,
      children: [
        { name: "Document Upload", icon: <FileCheck size={18} />, path: "superadmin-doc-upload" },
        { name: "Master Templates", icon: <BookOpen size={18} />, path: "superadmin-master-templates" },
        { name: "Document Lifecycle Management", icon: <FolderOpen size={18} />, path: "superadmin-doc-lifecycle" },
        { name: "Usage Insights", icon: <HeartPulse size={18} />, path: "superadmin-usage-insights" },
        { name: "Rating & Feedback", icon: <Bookmark size={18} />, path: "superadmin-rating-feedback" },
      ],
    },
    { name: "AI & Automation Settings", icon: <Bot size={24} />, path: "superadmin-ai-automation" },
    { name: "Organisations Manager", icon: <Mic size={24} />, path: "superadmin-org-manager" },
    { name: "System Settings", icon: <Cog size={24} />, path: "superadmin-system-settings" },
    { name: "Audit Logs", icon: <FileText size={24} />, path: "superadmin-audit-logs" },
    { name: "Team & Access Control", icon: <User size={24} />, path: "superadmin-team-access" },
    { name: "Communication Hub", icon: <Globe size={24} />, path: "superadmin-communication" },
    { name: "Compliance & Privacy", icon: <Shield size={24} />, path: "superadmin-compliance-privacy" },
    { name: "AI Bot Training & Knowledge Hub", icon: <BookOpen size={24} />, path: "superadmin-ai-training" },
    { name: "AI Module Settings", icon: <Cog size={24} />, path: "superadmin-ai-module" },
    { name: "AI Version Control & Logs", icon: <FileText size={24} />, path: "superadmin-ai-version-control" },
  ],
};

const SideBar: React.FC<SidebarProps> = ({
  role = "user",
  className = "",
}) => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = (name: string) =>
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));

  const navItems = useMemo(() => menuConfig[role] || [], [role]);

  const isChildActive = (children: NavItem[]) => {
    return children.some(child => window.location.pathname === child.path);
  };

  return (
    <div className="mt-16">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-18 left-2 z-50 p-2 bg-transparent rounded-lg lg:hidden"
      >
        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Sidebar */}
      <div className={`lg:hidden ${isMobileOpen ? "block" : "hidden"}`}>
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsMobileOpen(false)}
        />
        <aside className="fixed top-0 left-0 z-50 w-80 h-full bg-white shadow-xl">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b">
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 px-6 overflow-y-auto">
              {navItems.map((item, idx) => {
                const isOpen = openMenus[item.name] || false;
                if (item.children) {
                  return (
                    <div key={idx}>
                      <button
                        onClick={() => toggleMenu(item.name)}
                        className="flex items-center gap-4 w-full py-3 text-left text-gray-700 hover:text-teal-600 transition-colors"
                      >
                        <div className="flex-shrink-0 text-gray-500">
                          {item.icon}
                        </div>
                        <span className="flex-1 font-medium">{item.name}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isOpen && (
                        <div className="ml-12 space-y-2 mt-2">
                          {item.children.map((sub, subIdx) => (
                            <NavLink
                              key={subIdx}
                              to={sub.path || "#"}
                              onClick={() => setIsMobileOpen(false)}
                              className={({ isActive }) =>
                                `flex items-center gap-3 py-2 font-medium transition-colors ${
                                  isActive
                                    ? "text-teal-600"
                                    : "text-gray-600 hover:text-teal-600"
                                }`
                              }
                            >
                              <div className="flex-shrink-0 text-gray-500">
                                {sub.icon}
                              </div>
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
                    onClick={() => setIsMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-4 py-3 font-medium transition-colors ${
                        isActive
                          ? "text-teal-600"
                          : "text-gray-700 hover:text-teal-600"
                      }`
                    }
                  >
                    <div className="flex-shrink-0 text-gray-500">
                      {item.icon}
                    </div>
                    <span>{item.name}</span>
                  </NavLink>
                );
              })}
            </nav>
          </div>
        </aside>
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col bg-white shadow h-screen sticky top-0 transition-all duration-300 ${
          isExpanded ? "w-72" : "w-16"
        } ${className}`}
      >
        {/* Header with Arrow on right */}
        <div className={`${isExpanded ? "px-6 py-4" : "px-2 py-4 flex justify-center"}`}>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-auto p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <ArrowLeftCircle size={20} className={`${!isExpanded ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Navigation */}
        <nav className={`${isExpanded ? "px-6 py-4" : "px-2 py-4"}`}>
          <div className={`${isExpanded ? "space-y-2" : "space-y-2"}`}>
            {navItems.map((item, idx) => {
              const isOpen = openMenus[item.name] || false;
              const hasActiveChild = item.children && isChildActive(item.children);

              if (item.children) {
                return isExpanded ? (
                  <div key={idx}>
                    <button
                      onClick={() => toggleMenu(item.name)}
                      className={`flex items-center gap-4 w-full py-3 text-left font-medium transition-colors ${
                        isOpen || hasActiveChild ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
                      }`}
                    >
                      <div className="flex-shrink-0 text-gray-500">{item.icon}</div>
                      <span className="flex-1">{item.name}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="ml-12 space-y-2 mt-2">
                        {item.children.map((sub, subIdx) => (
                          <NavLink
                            key={subIdx}
                            to={sub.path || "#"}
                            className={({ isActive }) =>
                              `flex items-center gap-3 py-2 font-medium transition-colors ${
                                isActive
                                  ? "text-teal-600"
                                  : "text-gray-600 hover:text-teal-600"
                              }`
                            }
                          >
                            <div className="flex-shrink-0 text-gray-500">{sub.icon}</div>
                            {sub.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div key={idx} className="flex justify-center">
                    <button
                      className={`p-3 rounded-lg transition-colors ${
                        hasActiveChild
                          ? "bg-teal-100 text-teal-600"
                          : "text-gray-500 hover:bg-gray-100 hover:text-teal-600"
                      }`}
                      title={item.name}
                    >
                      {item.icon}
                    </button>
                  </div>
                );
              }

              return isExpanded ? (
                <NavLink
                  key={idx}
                  to={item.path || "#"}
                  className={({ isActive }) =>
                    `flex items-center gap-4 py-3 font-medium transition-colors ${
                      isActive
                        ? "text-teal-600"
                        : "text-gray-700 hover:text-teal-600"
                    }`
                  }
                >
                  <div className="flex-shrink-0 text-gray-500">{item.icon}</div>
                  <span>{item.name}</span>
                </NavLink>
              ) : (
                <div key={idx} className="flex justify-center">
                  <NavLink
                    to={item.path || "#"}
                    className={({ isActive }) =>
                      `p-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-teal-100 text-teal-600"
                          : "text-gray-500 hover:bg-gray-100 hover:text-teal-600"
                      }`
                    }
                    title={item.name}
                  >
                    {item.icon}
                  </NavLink>
                </div>
              );
            })}
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
