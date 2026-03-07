import { useState } from "react";
import { Sidebar } from "../components/sidebar";
import { DailyStatus } from "./studentDashboard";
import { StudentSchedule } from "./schedule";
import { ScheduleHistory } from "./history";
import { About } from "./about";
import { Header } from "../components/header";

export const StudentDashboardLayout = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <>
      <div className="flex min-h-screen bg-[#F9FAFB] text-[#1e293b] font-sans antialiased">
        <aside className="w-[240px] border-r border-gray-200 flex flex-col sticky top-0 h-screen">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </aside>

        <main className="flex-1 overflow-y-auto">
          <Header />
          {activeTab === "Dashboard" ? (
            <DailyStatus />
          ) : activeTab === "Schedule" ? (
            <StudentSchedule />
          ) : activeTab === "History" ? (
            <ScheduleHistory />
          ) : (
            activeTab === "About" && <About />
          )}
        </main>
      </div>
    </>
  );
};
