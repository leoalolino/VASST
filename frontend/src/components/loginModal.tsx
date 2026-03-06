import React, { useState } from "react";

type Role = "student" | "teacher";

export const LoginModal: React.FC = () => {
  const [role, setRole] = useState<Role>("student");

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-8 font-sans antialiased text-[#1A1A1A]">
      <div className="w-full max-w-[340px]">
        {/* Top Header */}
        <div className="mb-10 text-left">
          <h1 className="text-[28px] font-bold tracking-tight mb-1">Sign in</h1>
          <p className="text-[14px] text-gray-500">
            New user?{" "}
            <span className="font-semibold text-black cursor-pointer">
              Create an account
            </span>
          </p>
        </div>

        {/* Role Toggle - Ultra Minimal */}
        <div className="flex bg-gray-100 p-1 rounded-2xl mb-8">
          <button
            onClick={() => setRole("student")}
            className={`flex-1 py-2 text-[12px] font-bold rounded-xl transition-all ${
              role === "student"
                ? "bg-white text-black shadow-sm"
                : "text-gray-400"
            }`}
          >
            STUDENT
          </button>
          <button
            onClick={() => setRole("teacher")}
            className={`flex-1 py-2 text-[12px] font-bold rounded-xl transition-all ${
              role === "teacher"
                ? "bg-white text-black shadow-sm"
                : "text-gray-400"
            }`}
          >
            TEACHER
          </button>
        </div>

        {/* Input Fields */}
        <form className="space-y-6">
          <div className="relative border-b border-gray-200 pb-2 focus-within:border-black transition-colors">
            <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent text-[15px] outline-none placeholder:text-gray-300"
            />
          </div>

          <div className="relative border-b border-gray-200 pb-2 focus-within:border-black transition-colors">
            <div className="flex justify-between items-end">
              <div className="flex-1">
                <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-transparent text-[15px] outline-none"
                />
              </div>
              <button type="button" className="text-gray-400 pb-1">
                {/* Simple Eye Icon SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex justify-start">
            <a
              href="#"
              className="text-[13px] font-medium text-gray-400 hover:text-black transition-colors"
            >
              Forgot password?
            </a>
          </div>

          {/* The Big Black Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-full text-[15px] font-bold shadow-lg shadow-gray-200 active:scale-[0.98] transition-all mt-4"
          >
            Login
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[3px]">
            Academic Pulse
          </p>
        </div>
      </div>
    </div>
  );
};
