import { useState } from "react";
import { ImageModal } from "../components/modal";

export const DailyStatus = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Next Class - Row Layout */}
          <div className=" p-6 rounded-sm border border-gray-100 border-gray-200 hover:border-blue-200 transition-all group">
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
          <div className=" p-6 rounded-sm border border-gray-100 border-gray-200 hover:border-blue-200 transition-all group">
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
                <div className="flex items-center gap-2  bg-emerald-200 p-2 rounded-sm border-emerald-600 border">
                  <div className="w-1.5 h-1.5 rounded-sm bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                  <p className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">
                    04 Attend
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-red-200 p-2 rounded-sm border-red-600 border">
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
        <div className=" rounded-sm border-gray-200 overflow-hidden">
          <div className="px-6 py-5 border-r border-l border-t border-gray-200 flex items-center justify-between">
            <div className="flex gap-4">
              <button className="text-xs font-bold text-black-600 border-b-2 border-black pb-1">
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
          <div className="w-full">
            <div className="flex px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-r border-l border-gray-200">
              <div className="flex-1">Course Name</div>
              <div className="w-[15%]">Professor</div>
              <div className="w-[20%]">Time Window</div>
              <div className="w-[15%]">Current Status</div>
              <div className="w-[15%] text-center">Room Location</div>
              <div className="w-[10%] text-right">Room</div>
            </div>
            <div className="h-4" /> {/* SEPARATOR */}
            <div className="border border-gray-200  shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <tbody className="divide-y divide-slate-100 text-[13px]">
                  <tr className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-6 font-bold text-slate-900 w-auto">
                      Advanced Data Structures
                    </td>
                    <td className="px-6 py-6 w-[15%] text-slate-600 font-medium">
                      Dr. Aris
                    </td>
                    <td className="px-6 py-6 w-[20%] text-slate-400 font-medium">
                      08:00 AM - 10:00 AM
                    </td>
                    <td className="px-6 py-6 w-[15%]">
                      <span className="px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest bg-blue-50 text-blue-600">
                        In Progress
                      </span>
                    </td>
                    <td className="px-6 py-6 w-[15%] text-center">
                      <button
                        onClick={() => setIsOpen(true)}
                        className="bg-black text-white py-2 px-4 rounded-md text-[11px] font-bold uppercase hover:bg-slate-800 transition-all active:scale-95"
                      >
                        view
                      </button>
                    </td>
                    <td className="px-6 py-6 w-[10%] text-right font-bold text-slate-400 group-hover:text-slate-900">
                      Lab 402
                    </td>
                  </tr>
                  {/* More rows would go here */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ImageModal modalStatus={isOpen} openModal={() => setIsOpen(!isOpen)} />
    </>
  );
};
