import { useState } from "react";

export const Header = () => {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  // Function to toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Optional: Add/Remove 'dark' class to the <html> tag for Tailwind dark mode
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <>
      <header className="h-16  border-b border-gray-200 px-8 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <span>Student Dashboard</span>
          <span className="text-slate-300">/</span>
          <span className="text-slate-900 font-semibold">Overview</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`w-9 h-9 flex items-center justify-center rounded-md border border-gray-200  text-slate-500 transition-all group cursor-pointer
              ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}
          >
            {theme === "light" ? (
              /* Moon Icon (Clicking this turns it DARK) */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 group-hover:-rotate-12 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            ) : (
              /* Sun Icon (Clicking this turns it LIGHT) */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 group-hover:rotate-45 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M3 12h2.25m.386-6.364 1.591 1.591M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            )}
          </button>

          <button className="relative w-9 h-9 flex items-center justify-center  border border-gray-200 rounded-lg text-slate-500 hover:bg-slate-50 hover:border-gray-300 transition-all cursor-pointer group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 group-hover:scale-110 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>

            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="relative inline-flex items-center justify-center rounded-sm h-4 w-4 bg-red-500 text-[10px] font-bold text-white border border-white">
                3
              </span>
            </span>
          </button>

          <div className="relative inline-block">
            {/* 3-DOTS BOX */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-200 bg-white text-slate-500 hover:bg-slate-50 active:scale-95 transition-all cursor-pointer"
            >
              <span className="font-bold text-xl mb-2">...</span>
            </button>

            {/* DROPDOWN MENU */}
            {isOpen && (
              <>
                {/* Backdrop to close when clicking outside */}
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsOpen(false)}
                />

                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-sm shadow-lg z-20 py-1 overflow-hidden">
                  <button className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                    Settings
                  </button>
                  <div className="h-px bg-slate-100 my-1" />
                  <button className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors">
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
