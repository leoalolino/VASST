export const ScheduleHistory = () => {
  return (
    <>
      <div className="w-full p-6 bg-slate-50/30 min-h-screen">
        {/* 1. HEADER - Matches your Schedule exactly for alignment */}
        <div className="flex px-8 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
          <div className="w-[8%]">Code</div>
          <div className="w-[18%]">Subject Name</div>
          <div className="w-[10%]">Type</div>
          <div className="w-[12%]">Date</div>
          <div className="w-[15%]">Time Window</div>
          <div className="w-[12%] text-center">Status</div>
          <div className="w-[10%]">Room</div>
          <div className="w-[15%] text-right">Instructor</div>
        </div>

        {/* 2. SCROLLABLE BODY */}
        <div className="flex flex-col gap-3 max-h-[600px] overflow-y-auto pr-2">
          {/* ROW: MET CLASS */}
          <div className="flex items-center px-8 py-5 bg-white border border-gray-200 rounded-sm hover:border-green-200 transition-all group">
            <div className="w-[8%] font-bold text-blue-600 text-xs">CS301</div>
            <div className="w-[18%] font-bold text-slate-900 text-[14px]">
              Advanced Data Structures
            </div>
            <div className="w-[10%]">
              <span className="text-[9px] font-black uppercase px-2 py-1 bg-slate-100 text-slate-500 rounded">
                Lecture
              </span>
            </div>
            <div className="w-[12%] text-slate-600 font-medium text-[13px]">
              Mar 05, 2026
            </div>
            <div className="w-[15%] text-slate-400 font-medium text-[13px]">
              08:00 AM - 10:00 AM
            </div>

            {/* Status: Met */}
            <div className="w-[12%] text-center">
              <span className="px-3 py-1.5 rounded-sm text-[10px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-600 border border-emerald-100">
                Met Class
              </span>
            </div>

            <div className="w-[10%] text-slate-500 font-bold text-[13px]">
              Lab 402
            </div>
            <div className="w-[15%] text-right font-bold text-slate-900 text-[13px]">
              Dr. Aris
            </div>
          </div>

          {/* ROW: DID NOT MEET */}
          <div className="flex items-center px-8 py-5 bg-white border border-gray-200 rounded-sm  hover:border-red-200 transition-all group">
            <div className="w-[8%] font-bold text-blue-600 text-xs">IT202</div>
            <div className="w-[18%] font-bold text-slate-900 text-[14px]">
              Mobile Architecture
            </div>
            <div className="w-[10%]">
              <span className="text-[9px] font-black uppercase px-2 py-1 bg-blue-50 text-blue-600 rounded-sm">
                Lab
              </span>
            </div>
            <div className="w-[12%] text-slate-600 font-medium text-[13px]">
              Mar 04, 2026
            </div>
            <div className="w-[15%] text-slate-400 font-medium text-[13px]">
              01:30 PM - 03:30 PM
            </div>

            {/* Status: Did Not Meet */}
            <div className="w-[12%] text-center">
              <span className="px-3 py-1.5 rounded-sm text-[10px] font-black uppercase tracking-widest bg-red-50 text-red-600 border border-red-100">
                No Show
              </span>
            </div>

            <div className="w-[10%] text-slate-500 font-bold text-[13px]">
              Rm 301
            </div>
            <div className="w-[15%] text-right font-bold text-slate-900 text-[13px]">
              Engr. Sarah
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
