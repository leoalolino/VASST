import { useState } from "react";
import { ImageModal } from "../components/modal";

export const DailyStatus = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Next Class - Row Layout */}
          <div className=" p-6 rounded-sm border border-gray-100 shadow-sm hover:border-blue-200 transition-all group">
            <div className="flex items-center justify-between h-full">
              {/* Left Side: Time & Label */}
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[1.5px]">
                  Next Class At
                </p>
                <div className="flex items-center gap-2">
                  <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                    10:30 AM
                  </h4>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600">
                    In 14m
                  </span>
                </div>
              </div>

              {/* Right Side: Instructor & Subject */}
              <div className="text-right border-l border-gray-100 pl-6">
                <p className="text-[13px] font-bold text-slate-800">
                  Engr. Sarah
                </p>
                <p className="text-[11px] text-slate-400 font-medium italic">
                  Mobile Architecture
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Attendance Status - Row Layout */}
          <div className=" p-6 rounded-sm border border-gray-100 shadow-sm hover:border-blue-200 transition-all group">
            <div className="flex items-center justify-between h-full">
              {/* Left Side: Total Count */}
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[1.5px]">
                  Instructors Today
                </p>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                  06 Total
                </h4>
              </div>

              {/* Right Side: Attend vs Will Not */}
              <div className="flex flex-col gap-2 border-l border-gray-100 pl-6">
                <div className="flex items-center gap-2  bg-emerald-200 p-2 rounded-md border-emerald-600 border">
                  <div className="w-1.5 h-1.5 rounded-sm bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                  <p className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">
                    04 Attend
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-red-200 p-2 rounded-md border-red-600 border">
                  <div className="w-1.5 h-1.5 rounded-sm bg-red-500"></div>
                  <p className="text-[11px] font-bold text-red-600 uppercase tracking-wider">
                    02 Will Not
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MAIN TABLE (The "Zendenta" Style Table) */}
        <div className=" rounded-sm border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-50 flex items-center justify-between ">
            <div className="flex gap-4">
              <button className="text-xs font-bold text-blue-600 border-b-2 border-blue-600 pb-1">
                Today's Pulse
              </button>
              <button className="text-xs font-bold text-slate-400 hover:text-slate-600 pb-1">
                Weekly History
              </button>
            </div>
            <button className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-sm hover:bg-blue-100 transition-all">
              Export Data
            </button>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 text-[11px] font-bold text-black uppercase tracking-wider border-b border-gray-100">
                <th className="px-6 py-4">Course Name</th>
                <th className="px-6 py-4">Professor</th>
                <th className="px-6 py-4">Time Window</th>
                <th className="px-6 py-4">Current Status</th>
                <th className="px-6 py-4 text-center">Room Location</th>
                <th className="px-6 py-4 text-right">Room</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-[13px]">
              <tr className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4 pt-8 font-bold text-slate-900 leading-tight">
                  Advanced Data Structures
                </td>
                <td className="px-6 py-4 pt-8">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-600 font-medium">Dr. Aris</span>
                  </div>
                </td>
                <td className="px-6 py-4 pt-8 text-slate-400 font-medium tracking-tight">
                  08:00 AM - 10:00 AM
                </td>
                <td className="px-6 py-4 pt-8">
                  <span className="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest bg-blue-50 text-blue-600">
                    In Progress
                  </span>
                </td>
                {/* Button Centered using justify-center */}
                <td className="px-6 py-4 pt-8 text-center">
                  <div className="flex justify-center items-center w-full">
                    <button
                      onClick={() => setIsOpen(true)}
                      className="bg-black text-white py-1.5 px-4 rounded-md text-[11px] font-bold uppercase tracking-wider cursor-pointer hover:bg-slate-800 transition-all active:scale-95 shadow-sm"
                    >
                      view
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 pt-8 text-right font-bold text-slate-400 group-hover:text-slate-900">
                  Lab 402
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ImageModal modalStatus={isOpen} openModal={() => setIsOpen(!isOpen)} />
    </>
  );
};
