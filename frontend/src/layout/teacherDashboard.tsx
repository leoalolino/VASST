import React, { useState, useRef, useEffect } from "react";
import { supabase } from "../supabaseClient"; // Assuming your client is here
import { sileo } from "sileo";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Settings,
  ChevronRight,
  Bell,
  Search,
  GraduationCap,
  School,
  MoreVertical,
  LogOut,
  User,
} from "lucide-react";

const mockUser = {
  display_name: "Instructor Name",
  email: "instructor@stagesedu.gh",
  role: "Teacher",
};

export const InstructorDashboardLayout = () => {
  const [activeTab, setActiveTab] = useState("Settings");
  const [activeSubTab, setActiveSubTab] = useState("School Profile");

  // State for the 3-dot menu
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex h-screen bg-[#F8F9FC] font-sans antialiased text-[#111827]">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col z-20">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-black p-1.5 rounded-sm">
            <GraduationCap className="text-white" size={22} />
          </div>
          <span className="font-bold text-lg tracking-tight">StagesSchool</span>
        </div>

        <nav className="flex-1 px-4 space-y-6">
          <div>
            <p className="text-[10px] font-bold text-gray-400 px-3 mb-2 uppercase tracking-widest">
              School Operations
            </p>
            <NavItem
              icon={<LayoutDashboard size={18} />}
              label="Dashboard"
              active={activeTab === "Dashboard"}
              onClick={() => setActiveTab("Dashboard")}
            />
            <NavItem
              icon={<BookOpen size={18} />}
              label="Teacher Workspace"
              hasSubmenu
            />
            <NavItem icon={<Users size={18} />} label="SIS" hasSubmenu />
          </div>

          <div>
            <p className="text-[10px] font-bold text-gray-400 px-3 mb-2 uppercase tracking-widest">
              User Management
            </p>
            <NavItem
              icon={<Settings size={18} />}
              label="Settings"
              active={activeTab === "Settings"}
              onClick={() => setActiveTab("Settings")}
            />
          </div>
        </nav>

        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-3 p-2">
            <div className="w-9 h-9 rounded-sm bg-black flex items-center justify-center text-black font-semibold text-sm">
              {mockUser.display_name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">
                {mockUser.display_name}
              </p>
              <p className="text-[11px] text-gray-500 truncate">
                {mockUser.email}
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0 relative z-30">
          <div className="flex items-center gap-2 text-[13px] text-gray-500">
            <LayoutDashboard size={14} />
            <ChevronRight size={14} />
            <span className="font-medium text-gray-900">Account Settings</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-sm border-2 border-white"></span>
            </button>

            {/* THE 3-DOT LOGOUT DROPDOWN */}
            <div className="relative ml-2" ref={menuRef}>
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className={`p-2 rounded-sm transition-colors ${showUserMenu ? "bg-gray-100 text-gray-900" : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"}`}
              >
                <MoreVertical size={20} />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-sm py-2 z-50 animate-in fade-in zoom-in duration-150 origin-top-right">
                  <div className="px-4 py-2 border-b border-gray-50 mb-1">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      Account
                    </p>
                  </div>
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                    <User size={16} className="text-gray-400" /> Profile
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                    <Settings size={16} className="text-gray-400" /> Settings
                  </button>
                  <div className="h-px bg-gray-100 my-1 mx-2" />
                  <button
                    onClick={async () => {
                      const res = await supabase.auth.signOut();
                      if (res)
                        sileo.success({
                          title: "success",
                          description: "Logged out successfully",
                        });
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors font-semibold"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-6xl mx-auto">
            <header className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                School Settings
              </h1>
              <p className="text-sm text-gray-500">
                Manage your school's profile and system preferences.
              </p>
            </header>

            <div className="flex gap-8">
              {/* Internal Settings Navigation */}
              <div className="w-56 shrink-0 flex flex-col space-y-1">
                <SubNavItem
                  label="School Profile"
                  active={activeSubTab === "School Profile"}
                  onClick={() => setActiveSubTab("School Profile")}
                />
                <SubNavItem
                  label="Branding & Appearance"
                  active={activeSubTab === "Branding"}
                />
                <SubNavItem
                  label="Academic Structure"
                  active={activeSubTab === "Academic"}
                />
              </div>

              {/* Form Card */}
              <div className="flex-1">
                <div className="bg-white border border-gray-200 rounded-sm shadow-xs overflow-hidden transition-all">
                  <div className="p-6 border-b border-gray-100 bg-gray-50/30">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                      <School size={18} className="text-black" /> Basic
                      Information
                    </h3>
                  </div>

                  <div className="p-8 space-y-6">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                        School Name *
                      </label>
                      <input
                        type="text"
                        className="w-full p-2.5 border border-gray-200 rounded-sm bg-gray-50 text-sm focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
                        defaultValue="Stages International School"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                          School Email
                        </label>
                        <input
                          type="email"
                          className="w-full p-2.5 border border-gray-200 rounded-sm bg-gray-50 text-sm focus:ring-2 focus:ring-black/20 focus:border-black outline-none transition-all"
                          defaultValue="stagesedu@edu.gh"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className="w-full p-2.5 border border-gray-200 rounded-sm bg-gray-50 text-sm focus:ring-2 focus:ring-black/20 focus:border-black outline-none transition-all"
                          defaultValue="03038383838"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex justify-end">
                    <button className="bg-black text-white px-6 py-2 rounded-sm text-sm font-bold hover:bg-black transition-colors active:scale-95">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// HELPER COMPONENTS
const NavItem = ({ icon, label, active, hasSubmenu, onClick }: any) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-between px-3 py-2 rounded-sm mb-0.5 transition-all ${active ? "bg-black text-white" : "text-gray-600 hover:bg-gray-50"}`}
  >
    <div className="flex items-center gap-3">
      {icon}
      <span className="text-[13px] font-medium">{label}</span>
    </div>
    {hasSubmenu && <ChevronRight size={14} className="text-gray-400" />}
  </button>
);

const SubNavItem = ({ label, active, onClick }: any) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-4 py-2 text-[13px] font-medium border-l-2 transition-all ${active ? "text-white border-black bg-black" : "text-gray-500 border-transparent hover:bg-gray-50"}`}
  >
    {label}
  </button>
);
