// import React, { useState } from "react";
// import { supabase } from "../supabaseClient";
// import {
//   LayoutDashboard,
//   BookOpen,
//   Users,
//   Settings,
//   ChevronRight,
//   Bell,
//   Search,
//   GraduationCap,
//   UserCircle,
//   Globe,
//   Palette,
//   School,
// } from "lucide-react";
//
// interface Props {
//   user: User | null;
// }
//
// export const InstructorDashboard: React.FC<Props> = ({ user }) => {
//   const [activeTab, setActiveTab] = useState("Settings");
//   const [activeSubTab, setActiveSubTab] = useState("School Profile");
//
//   return (
//     <div className="flex h-screen bg-[#F8F9FC] font-sans antialiased text-[#111827]">
//       {/* 1. MAIN SIDEBAR */}
//       <aside className="w-64 bg-white border-r border-gray-200 flex flex-col z-20">
//         <div className="p-6 flex items-center gap-3">
//           <div className="bg-[#F97316] p-1.5 rounded-lg">
//             <GraduationCap className="text-white" size={22} />
//           </div>
//           <span className="font-bold text-lg tracking-tight">StagesSchool</span>
//         </div>
//
//         <nav className="flex-1 px-4 space-y-6 overflow-y-auto">
//           <div>
//             <p className="text-[10px] font-bold text-gray-400 px-3 mb-2 uppercase tracking-widest">
//               School Operations
//             </p>
//             <NavItem
//               icon={<LayoutDashboard size={18} />}
//               label="Dashboard"
//               active={activeTab === "Dashboard"}
//               onClick={() => setActiveTab("Dashboard")}
//             />
//             <NavItem
//               icon={<BookOpen size={18} />}
//               label="Teacher Workspace"
//               hasSubmenu
//             />
//             <NavItem icon={<Users size={18} />} label="SIS" hasSubmenu />
//           </div>
//
//           <div>
//             <p className="text-[10px] font-bold text-gray-400 px-3 mb-2 uppercase tracking-widest">
//               User Management
//             </p>
//             <NavItem
//               icon={<Settings size={18} />}
//               label="Settings"
//               active={activeTab === "Settings"}
//               onClick={() => setActiveTab("Settings")}
//             />
//           </div>
//         </nav>
//
//         {/* User Profile Footer */}
//         <div className="p-4 border-t border-gray-100 bg-gray-50/50">
//           <div className="flex items-center gap-3 p-2">
//             <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-semibold text-sm">
//               {user?.user_metadata.display_name?.charAt(0) || "I"}
//             </div>
//             <div className="flex-1 min-w-0">
//               <p className="text-sm font-semibold truncate">
//                 {user?.user_metadata.display_name || "Instructor"}
//               </p>
//               <p className="text-[11px] text-gray-500 truncate">
//                 {user?.email}
//               </p>
//             </div>
//           </div>
//         </div>
//       </aside>
//
//       {/* 2. CONTENT AREA */}
//       <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
//         {/* Top Header */}
//         <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
//           <div className="flex items-center gap-2 text-[13px] text-gray-500">
//             <LayoutDashboard size={14} />
//             <ChevronRight size={14} />
//             <span className="font-medium text-gray-900">Account Settings</span>
//           </div>
//           <div className="flex items-center gap-4">
//             <button className="p-2 text-gray-400 hover:text-gray-600">
//               <Search size={20} />
//             </button>
//             <button className="p-2 text-gray-400 hover:text-gray-600 relative">
//               <Bell size={20} />
//               <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
//             </button>
//           </div>
//         </header>
//
//         {/* Scrollable Dashboard Body */}
//         <main className="flex-1 overflow-y-auto p-8">
//           <div className="max-w-6xl mx-auto">
//             <header className="mb-8">
//               <h1 className="text-2xl font-bold text-gray-900 mb-1">
//                 School Settings
//               </h1>
//               <p className="text-sm text-gray-500">
//                 Manage your school's profile, configuration, and system
//                 preferences.
//               </p>
//             </header>
//
//             <div className="flex gap-8">
//               {/* Internal Settings Navigation */}
//               <div className="w-56 shrink-0 flex flex-col space-y-1">
//                 <SubNavItem
//                   label="School Profile"
//                   active={activeSubTab === "School Profile"}
//                   onClick={() => setActiveSubTab("School Profile")}
//                 />
//                 <SubNavItem
//                   label="Branding & Appearance"
//                   active={activeSubTab === "Branding"}
//                   onClick={() => setActiveSubTab("Branding")}
//                 />
//                 <SubNavItem
//                   label="Academic Structure"
//                   active={activeSubTab === "Academic"}
//                   onClick={() => setActiveSubTab("Academic")}
//                 />
//                 <SubNavItem
//                   label="Attendance"
//                   active={activeSubTab === "Attendance"}
//                   onClick={() => setActiveSubTab("Attendance")}
//                 />
//               </div>
//
//               {/* The "Basic Information" Form Card */}
//               <div className="flex-1">
//                 <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
//                   <div className="p-6 border-b border-gray-100 bg-gray-50/30 flex justify-between items-center">
//                     <div>
//                       <h3 className="font-bold text-gray-900 flex items-center gap-2">
//                         <School size={18} className="text-orange-500" /> Basic
//                         Information
//                       </h3>
//                       <p className="text-[11px] text-gray-500 mt-0.5">
//                         Core identity fields for your school.
//                       </p>
//                     </div>
//                   </div>
//
//                   <div className="p-8 space-y-8">
//                     {/* Input Group: School Name */}
//                     <div>
//                       <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
//                         School Name *
//                       </label>
//                       <input
//                         type="text"
//                         className="w-full p-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-sm"
//                         defaultValue="Stages International School"
//                       />
//                     </div>
//
//                     {/* Input Row: Email & Phone */}
//                     <div className="grid grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
//                           School Email
//                         </label>
//                         <input
//                           type="email"
//                           className="w-full p-2.5 border border-gray-200 rounded-lg bg-gray-50 text-sm"
//                           defaultValue="stagesedu@edu.gh"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
//                           Phone Number
//                         </label>
//                         <input
//                           type="text"
//                           className="w-full p-2.5 border border-gray-200 rounded-lg bg-gray-50 text-sm"
//                           defaultValue="03038383838"
//                         />
//                       </div>
//                     </div>
//
//                     {/* Contact & Location Section */}
//                     <div className="pt-4 border-t border-gray-100">
//                       <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-6">
//                         <Globe size={18} className="text-orange-500" /> Contact
//                         & Location
//                       </h3>
//                       <div className="space-y-6">
//                         <div>
//                           <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
//                             Full Address
//                           </label>
//                           <input
//                             type="text"
//                             className="w-full p-2.5 border border-gray-200 rounded-lg bg-gray-50 text-sm"
//                             defaultValue="P.O Box 5566, Kpando - Street"
//                           />
//                         </div>
//                         <div className="grid grid-cols-2 gap-6">
//                           <div>
//                             <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
//                               City / Town
//                             </label>
//                             <input
//                               type="text"
//                               className="w-full p-2.5 border border-gray-200 rounded-lg bg-gray-50 text-sm"
//                               defaultValue="Accra"
//                             />
//                           </div>
//                           <div>
//                             <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
//                               Country
//                             </label>
//                             <input
//                               type="text"
//                               className="w-full p-2.5 border border-gray-200 rounded-lg bg-gray-50 text-sm"
//                               defaultValue="Ghana"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//
//                   {/* Form Footer */}
//                   <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex justify-end">
//                     <button className="bg-[#F97316] hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm font-bold transition-colors shadow-sm">
//                       Save Changes
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };
//
// // Helper Components
// const NavItem = ({ icon, label, active, hasSubmenu, onClick }: any) => (
//   <button
//     onClick={onClick}
//     className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors mb-0.5 ${active ? "bg-orange-50 text-orange-600 shadow-sm" : "text-gray-600 hover:bg-gray-50"}`}
//   >
//     <div className="flex items-center gap-3">
//       {icon}
//       <span className="text-[13px] font-medium">{label}</span>
//     </div>
//     {hasSubmenu && <ChevronRight size={14} className="text-gray-400" />}
//   </button>
// );
//
// const SubNavItem = ({ label, active, onClick }: any) => (
//   <button
//     onClick={onClick}
//     className={`w-full text-left px-4 py-2 text-[13px] font-medium transition-all border-l-2 ${active ? "text-orange-600 border-orange-600 bg-orange-50/50" : "text-gray-500 border-transparent hover:bg-gray-50"}`}
//   >
//     {label}
//   </button>
// );
