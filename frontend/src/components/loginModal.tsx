import React, { useState } from "react";

type Role = "student" | "teacher";
type Mode = "login" | "register";

export const LoginModal: React.FC = () => {
  const [role, setRole] = useState<Role>("student");
  const [mode, setMode] = useState<Mode>("login");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-8 font-sans antialiased text-[#1A1A1A]">
      <div className="w-full max-w-[340px]">
        {/* Header Section */}
        <div className="mb-10 text-left">
          <h1 className="text-[32px] font-black tracking-tighter mb-1 uppercase italic leading-none">
            {mode === "login" ? "Welcome Back" : "Join the Pulse"}
          </h1>
          <p className="text-[14px] text-gray-500 font-medium mt-2">
            {mode === "login"
              ? "New to the system?"
              : "Already have an account?"}{" "}
            <span
              onClick={() => setMode(mode === "login" ? "register" : "login")}
              className="font-bold text-black cursor-pointer hover:underline underline-offset-4"
            >
              {mode === "login" ? "Register" : "Sign in"}
            </span>
          </p>
        </div>

        {/* Role Toggle */}
        <div className="flex bg-gray-100 p-1 rounded-xl mb-8 border border-gray-200/50">
          <button
            onClick={() => setRole("student")}
            className={`flex-1 py-2 text-[11px] font-black rounded-lg transition-all tracking-widest ${
              role === "student"
                ? "bg-white text-black shadow-sm"
                : "text-gray-400"
            }`}
          >
            STUDENT
          </button>
          <button
            onClick={() => setRole("teacher")}
            className={`flex-1 py-2 text-[11px] font-black rounded-lg transition-all tracking-widest ${
              role === "teacher"
                ? "bg-white text-black shadow-sm"
                : "text-gray-400"
            }`}
          >
            TEACHER
          </button>
        </div>

        {/* Form Container */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {mode === "register" && (
            <div className="relative border-b border-gray-200 pb-2 focus-within:border-black transition-colors">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Johanness Leo"
                className="w-full bg-transparent text-[15px] font-bold outline-none placeholder:text-gray-200"
              />
            </div>
          )}

          <div className="relative border-b border-gray-200 pb-2 focus-within:border-black transition-colors">
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
              {role === "student" ? "Student ID" : "Employee ID"}
            </label>
            <input
              type="text"
              placeholder={role === "student" ? "2026-001" : "EMP-992"}
              className="w-full bg-transparent text-[15px] font-bold outline-none placeholder:text-gray-200"
            />
          </div>

          <div className="relative border-b border-gray-200 pb-2 focus-within:border-black transition-colors">
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="user@university.edu"
              className="w-full bg-transparent text-[15px] font-bold outline-none placeholder:text-gray-200"
            />
          </div>

          <div className="relative border-b border-gray-200 pb-2 focus-within:border-black transition-colors">
            <div className="flex justify-between items-end">
              <div className="flex-1">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-transparent text-[15px] font-bold outline-none"
                />
              </div>
              {/* RAW SVG EYE ICON */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 pb-1"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-xl text-[13px] font-black uppercase tracking-[2px] active:scale-[0.98] transition-all mt-4 flex items-center justify-center gap-2"
          >
            <span>{mode === "login" ? "Login" : "Register"}</span>
            {/* RAW SVG ARROW */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </form>

        <div className="mt-16 text-center opacity-20">
          <p className="text-[9px] font-black text-gray-900 uppercase tracking-[4px]">
            Academic Pulse
          </p>
        </div>
      </div>
    </div>
  );
};
