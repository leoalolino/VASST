export const StudentSchedule = () => {
  return (
    <>
      <div className="w-full p-6 bg-slate-50/30 min-h-screen overflow-y-auto">
        {/* 1. THE HEADER (Completely separate from the body) */}
        <div className="flex px-8 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
          <div className="w-[8%]">Code</div>
          <div className="w-[22%]">Subject Name</div>
          <div className="w-[10%] text-center">Type</div>
          <div className="w-[15%]">Days</div>
          <div className="w-[15%]">Time</div>
          <div className="w-[10%]">FTF Day</div>
          <div className="w-[10%]">Room</div>
          <div className="w-[10%] text-right">Instructor</div>
        </div>

        {/* 2. THE BODY (Static Rows) */}
        <div className="flex flex-col gap-3">
          {/* ROW 1 */}
          <div className="flex items-center px-8 py-5 bg-white border border-slate-200 rounded-sm  hover:border-blue-200 transition-all group">
            <div className="w-[8%] font-bold text-blue-600 text-xs">CS301</div>
            <div className="w-[22%] font-bold text-slate-900 text-[14px]">
              Advanced Data Structures
            </div>
            <div className="w-[10%] text-center">
              <span className="text-[9px] font-black uppercase px-2 py-1 bg-slate-100 text-slate-500 rounded">
                Lecture
              </span>
            </div>
            <div className="w-[15%] text-slate-600 font-medium text-[13px]">
              Mon / Wed
            </div>
            <div className="w-[15%] text-slate-400 font-medium text-[13px]">
              08:00 AM - 10:00 AM
            </div>
            <div className="w-[10%] text-[13px] font-semibold text-slate-700">
              Wednesday
            </div>
            <div className="w-[10%] text-slate-500 font-bold text-[13px]">
              Lab 402
            </div>
            <div className="w-[10%] text-right font-bold text-slate-900 text-[13px]">
              Dr. Aris
            </div>
          </div>

          {/* ROW 2 */}
          <div className="flex items-center px-8 py-5 bg-white border border-slate-200 rounded-sm  hover:border-blue-200 transition-all group">
            <div className="w-[8%] font-bold text-blue-600 text-xs">IT202</div>
            <div className="w-[22%] font-bold text-slate-900 text-[14px]">
              Mobile Architecture
            </div>
            <div className="w-[10%] text-center">
              <span className="text-[9px] font-black uppercase px-2 py-1 bg-blue-50 text-blue-600 rounded">
                Lab
              </span>
            </div>
            <div className="w-[15%] text-slate-600 font-medium text-[13px]">
              Tue / Thu
            </div>
            <div className="w-[15%] text-slate-400 font-medium text-[13px]">
              01:30 PM - 03:30 PM
            </div>
            <div className="w-[10%] text-[13px] font-semibold text-slate-700">
              Thursday
            </div>
            <div className="w-[10%] text-slate-500 font-bold text-[13px]">
              Rm 301
            </div>
            <div className="w-[10%] text-right font-bold text-slate-900 text-[13px]">
              Engr. Sarah
            </div>
          </div>
        </div>

        <div className="h-auto w-full mt-3">
          <button className="group flex items-center gap-2 px-5 py-2.5 bg-black text-white text-[13px] font-bold capitalize rounded-xs hover:bg-black/90 hover:shadow-lg hover:shadow-black/10 active:scale-95 transition-all duration-200 cursor-pointer">
            <span>Upload New Schedule</span>
          </button>
        </div>
      </div>
    </>
  );
};
