export const About = () => {
  return (
    <>
      <div className="w-full max-w-6xl mx-auto p-8 animate-in fade-in duration-700">
        {/* 1. HERO HEADER */}
        <div className="mb-12 border-b border-slate-100 pb-8">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
            Academic Schedule Status Tracker{" "}
            <span className="text-blue-600">(ASST)</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-2xl leading-relaxed">
            A minimalist approach to academic management, designed to bridge the
            gap between complex scheduling and student-centered accessibility.
          </p>
        </div>

        {/* 2. THE STORY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* WHY I CREATED THIS */}
          <div className="bg-white p-8 rounded-sm border border-slate-200   ">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-sm flex items-center justify-center mb-6">
              <span className="font-bold">?</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              The Purpose
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed italic">
              "Education is complex enough; the tools we use to navigate it
              shouldn't be."
            </p>
            <p className="text-slate-600 text-[13px] mt-4 leading-relaxed">
              ASST was born out of the necessity to simplify the daily academic
              pulse. I wanted to create a space where students could see their
              "Today's Update" at a single glance without digging through
              cluttered university portals.
            </p>
          </div>

          {/* THE CORE IDEA */}
          <div className="bg-white p-8 rounded-sm border border-slate-200   ">
            <div className="w-10 h-10 bg-slate-900 text-white rounded-sm flex items-center justify-center mb-6">
              <span className="font-bold">!</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              The Vision
            </h3>
            <p className="text-slate-600 text-[13px] leading-relaxed">
              Inspired by modern fintech and productivity apps, the idea was to
              treat academic schedules like a 'Financial Pulse.' By using a
              clean, non-intrusive UI, we reduce the cognitive load on students,
              letting them focus on what matters:{" "}
              <span className="font-bold text-slate-900">Learning.</span>
            </p>
          </div>

          {/* TARGET AUDIENCE */}
          <div className="bg-white p-8 rounded-sm border border-slate-200   ">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
              Our Niche
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 h-auto bg-blue-600 rounded-full" />
                <div>
                  <p className="text-[13px] font-bold text-slate-900">
                    Students
                  </p>
                  <p className="text-[12px] text-slate-500">
                    Fast access to room locations and class status.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 h-auto bg-slate-200 rounded-full" />
                <div>
                  <p className="text-[13px] font-bold text-slate-900">
                    Instructors
                  </p>
                  <p className="text-[12px] text-slate-500">
                    Professional management of session history and attendance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CREATOR SECTION */}
          <div className="bg-slate-900 p-8 rounded-sm border border-slate-800 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold mb-2">The Architect</h3>
              <p className="text-slate-400 text-[13px] leading-relaxed">
                Designed and developed with a focus on UI/UX excellence and
                technical precision.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs uppercase">
                JL
              </div>
              <div>
                <p className="text-[13px] font-bold">Johanness Leo</p>
                <p className="text-[11px] text-slate-500">
                  Lead Developer & UI Designer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
