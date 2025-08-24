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
  HelpCircle,
  FileCheck,
  Cog,
  FolderOpen,
  Bookmark,
  User,
} from "lucide-react";

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
    { name: "Home Dashboard", icon: <Home size={20} />, path: "/userdash" },
    {
      name: "Policies & Procedures Suite",
      icon: <FileText size={20} />,
      children: [
        { name: "Policies", icon: <FileCheck size={18} />, path: "policies" },
        { name: "Procedures", icon: <Cog size={18} />, path: "procedures" },
        { name: "Documents", icon: <FolderOpen size={18} />, path: "documents" },
        { name: "Bookmarks", icon: <Bookmark size={18} />, path: "bookmarks" },
      ],
    },
    { name: "AI Policy Assistant", icon: <Bot size={20} />, path: "ai-policy-assistant" },
    { name: "Voice-Activated Companion", icon: <Mic size={20} />, path: "voice-activate-companion" },
    { name: "Induction & Training", icon: <BookOpen size={20} />, path: "induction-training" },
    { name: "Emergency Quick Access", icon: <Shield size={20} />, path: "emergency-access" },
    { name: "Survey & Wellbeing", icon: <HeartPulse size={20} />, path: "survey-well-being" },
    { name: "Language & Accessibility", icon: <Globe size={20} />, path: "settings" },
    { name: "Help & Support", icon: <HelpCircle size={20} />, path: "supports" },
  ],
   admin: [
    { name: "Org Dashboard", icon: <Home size={20} />, path: "/admin" },
    {
      name: "Document Suite",
      icon: <FileText size={20} />,
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
    { name: "AI Assistant Training Hub", icon: <Bot size={20} />, path: "admin-ai-training" },
    { name: "Induction Flow Builder", icon: <Mic size={20} />, path: "admin-induction" },
    { name: "Compliance Dashboard", icon: <Shield size={20} />, path: "admin-compliance" },
    { name: "Survey & Feedback Management", icon: <HeartPulse size={20} />, path: "admin-survey-feedback" },
    { name: "User & Role Management", icon: <User size={20} />, path: "admin-user-role" },
    { name: "Organisation Settings & Branding", icon: <Cog size={20} />, path: "admin-org-settings" },
    { name: "Audit Mode Access", icon: <Shield size={20} />, path: "admin-audit" },
    { name: "Language", icon: <Globe size={20} />, path: "admin-language" },
    { name: "Reports & Logs", icon: <FileText size={20} />, path: "admin-reports" },
  ],

  superadmin: [
    { name: "Platform Dashboard", icon: <Home size={20} />, path: "/superadmin" },
  ],
};

const AdminSideBar: React.FC<SidebarProps> = ({
  role = "user",
  className = "",
}) => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = (name: string) =>
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));

  const navItems = useMemo(() => menuConfig[role] || [], [role]);

  // Helper function to check if any child is active
  const isChildActive = (children: NavItem[]) => {
    return children.some(child => window.location.pathname === child.path);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg lg:hidden"
      >
        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Sidebar */}
      <div className={`lg:hidden ${isMobileOpen ? 'block' : 'hidden'}`}>
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

            <nav className="flex-1 px-6 py-6 space-y-3 overflow-y-auto">
              {navItems.map((item, idx) => {
                const isOpen = openMenus[item.name] || false;

                if (item.children) {
                  return (
                    <div key={idx}>
                      <button
                        onClick={() => toggleMenu(item.name)}
                        className="flex items-center gap-4 w-full py-3 text-left text-gray-700 hover:text-teal-600 transition-colors"
                      >
                        <div className="flex-shrink-0 text-gray-500">{item.icon}</div>
                        <span className="flex-1 font-medium">{item.name}</span>
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {isOpen && (
                        <div className="ml-12 space-y-2 mt-2">
                          {item.children.map((sub, subIdx) => (
                            <div key={subIdx} className="relative">
                              <NavLink
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
                                {({ isActive }) => (
                                  <>
                                    <div className="flex-shrink-0 text-gray-500">{sub.icon}</div>
                                    {sub.name}
                                    {isActive && (
                                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600" />
                                    )}
                                  </>
                                )}
                              </NavLink>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <div key={idx} className="relative">
                    <NavLink
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
                      {({ isActive }) => (
                        <>
                          <div className="flex-shrink-0 text-gray-500">{item.icon}</div>
                          <span>{item.name}</span>
                          {isActive && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600" />
                          )}
                        </>
                      )}
                    </NavLink>
                  </div>
                );
              })}
            </nav>
          </div>
        </aside>
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:block bg-white border-r h-screen sticky top-0 transition-all duration-300 ${
          isExpanded ? "w-72" : "w-16"
        } ${className}`}
      >
        <div className="flex flex-col h-full">
          {/* Header with Menu Toggle */}
          <div className={` ${isExpanded ? 'px-6 py-6' : 'px-2 py-6 flex justify-center'}`}>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className={`flex-1 overflow-y-auto ${isExpanded ? 'px-6 py-6' : 'px-2 py-6'}`}>
            <div className={`${isExpanded ? 'space-y-3' : 'space-y-2'}`}>
              {navItems.map((item, idx) => {
                const isOpen = openMenus[item.name] || false;
                const hasActiveChild = item.children && isChildActive(item.children);

                if (item.children) {
                  if (!isExpanded) {
                    return (
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

                  return (
                    <div key={idx}>
                      <button
                        onClick={() => toggleMenu(item.name)}
                        className={`flex items-center gap-4 w-full py-3 text-left font-medium transition-colors ${
                          isOpen || hasActiveChild ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
                        }`}
                      >
                        <div className="flex-shrink-0 text-gray-500">{item.icon}</div>
                        <span className="flex-1">{item.name}</span>
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
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
                  );
                }

                return (
                  <div key={idx}>
                    {!isExpanded ? (
                      <div className="flex justify-center">
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
                    ) : (
                      <div className="relative">
                        <NavLink
                          to={item.path || "#"}
                          className={({ isActive }) =>
                            `flex items-center gap-4 py-3 font-medium transition-colors ${
                              isActive
                                ? "text-teal-600"
                                : "text-gray-700 hover:text-teal-600"
                            }`
                          }
                        >
                          {({ isActive }) => (
                            <>
                              <div className="flex-shrink-0 text-gray-500">{item.icon}</div>
                              <span>{item.name}</span>
                              {isActive && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600" />
                              )}
                            </>
                          )}
                        </NavLink>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default AdminSideBar;