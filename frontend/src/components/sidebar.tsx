type Tabs = {
  activeTab: string;
  setActiveTab: (val: string) => void;
};
export const Sidebar = ({ activeTab, setActiveTab }: Tabs) => {
  return (
    <>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="group flex items-center cursor-pointer">
            <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center text-white font-bold z-10">
              V
            </div>
            <span className="max-w-0 overflow-hidden whitespace-nowrap font-bold text-lg tracking-tight transition-all duration-500 ease-in-out opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-3">
              ASST
            </span>
          </div>
        </div>

        <nav className="space-y-1">
          <SidebarItem
            active={"Dashboard"}
            setActiveTab={setActiveTab}
            label="Today's Update"
            state={activeTab === "Dashboard"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                />
              </svg>
            }
          />

          <SidebarItem
            active={"Schedule"}
            setActiveTab={setActiveTab}
            label="Schedule"
            state={activeTab === "Schedule"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
            }
          />

          <SidebarItem
            active={"History"}
            setActiveTab={setActiveTab}
            label="Schedule Status History"
            state={activeTab === "History"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.561 1.561 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>
            }
          />

          <SidebarItem
            active={"About"}
            setActiveTab={setActiveTab}
            label="About"
            state={activeTab === "About"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.561 1.561 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>
            }
          />
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-slate-100 rounded-sm border border-gray-200" />
          <div className="text-xs">
            <p className="font-bold text-slate-900">Johanness Leo</p>
            <p className="text-slate-400">Student ID: 2026-001</p>
          </div>
        </div>
      </div>
    </>
  );
};

const SidebarItem = ({ label, icon, active, setActiveTab, state }: any) => (
  <div
    onClick={() => {
      (setActiveTab(active), console.log(active));
    }}
    className={`flex items-center gap-3 px-4 py-2.5 rounded-md cursor-pointer transition-all ${
      state
        ? "bg-gray-100 text-black font-bold"
        : "text-slate-500 hover:text-black hover:bg-gray-100"
    }`}
  >
    <span className="text-sm">{icon}</span>
    <span className="text-xs">{label}</span>
  </div>
);
