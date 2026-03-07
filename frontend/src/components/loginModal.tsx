import React, { useState } from "react";
import { LoginForm, RegistrationForm } from "../api/auth";

type Role = "student" | "teacher";
type Mode = "login" | "register" | "forgot";

export const LoginModal: React.FC = () => {
  const [role, setRole] = useState<Role>("student");
  const [mode, setMode] = useState<Mode>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // New state to toggle between "Enter ID" and "Enter Code"
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const handleResetRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isCodeSent) {
      // Logic to trigger the email goes here
      console.log("Sending code to ID:", name);
      setIsCodeSent(true);
    } else {
      // Logic to verify the 6-digit code goes here
      console.log("Verifying code:", verificationCode);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center p-6 font-sans antialiased text-[#111827]">
      <div className="w-full max-w-[440px] bg-white border border-gray-200 rounded-sm p-10 shadow-sm">
        {/* Header Section */}
        <div className="mb-8 text-left">
          <h1 className="text-[30px] font-bold tracking-tight text-gray-900 leading-tight">
            {mode === "login" && "Login"}
            {mode === "register" && "Create an account"}
            {mode === "forgot" &&
              (isCodeSent ? "Verify Code" : "Reset Password")}
          </h1>
          <p className="text-[15px] text-gray-500 mt-2 font-medium">
            {mode === "login" && "Welcome back! Please enter your details."}
            {mode === "register" && "Enter your information to get started."}
            {mode === "forgot" &&
              (isCodeSent
                ? "We've sent a 6-digit code to your school email."
                : "Enter your ID to receive a reset link.")}
          </p>
        </div>

        {/* Role Toggle - Hidden during forgot mode */}
        {mode !== "forgot" && (
          <div className="flex bg-gray-100 p-1 rounded-md mb-8 border border-gray-200/50">
            <button
              onClick={() => setRole("student")}
              className={`flex-1 py-2.5 text-[12px] font-bold rounded-md transition-all ${role === "student" ? "bg-white text-black" : "text-gray-400"}`}
            >
              STUDENT
            </button>
            <button
              onClick={() => setRole("teacher")}
              className={`flex-1 py-2.5 text-[12px] font-bold rounded-md transition-all ${role === "teacher" ? "bg-white text-black" : "text-gray-400"}`}
            >
              TEACHER
            </button>
          </div>
        )}

        <form
          className="space-y-5"
          onSubmit={
            mode === "forgot"
              ? handleResetRequest
              : (e) => {
                  e.preventDefault();
                  return mode === "login"
                    ? LoginForm(email, password)
                    : RegistrationForm(name, email, password);
                }
          }
        >
          {/* Registration Full Name */}
          {mode === "register" && (
            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-[14px] font-bold text-gray-900">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter Fullname"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-[15px] font-medium outline-none focus:ring-1 focus:ring-black transition-all"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          {/* Dynamic Input: ID or Verification Code */}
          <div className="flex flex-col gap-1.5 text-left">
            <label className="text-[14px] font-bold text-gray-900">
              {mode === "forgot" && isCodeSent
                ? "Verification Code"
                : role === "student"
                  ? "Email"
                  : "Email"}
            </label>
            <input
              type="text"
              onChange={(e) =>
                isCodeSent
                  ? setVerificationCode(e.target.value)
                  : setEmail(e.target.value)
              }
              placeholder={
                isCodeSent
                  ? "0 0 0 0 0 0"
                  : role === "student"
                    ? "Enter student ID"
                    : "Enter employee ID"
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-[15px] font-medium outline-none focus:ring-1 focus:ring-black transition-all  placeholder:tracking-normal"
              maxLength={isCodeSent ? 6 : undefined}
              required
            />
          </div>

          {/* Password Field */}
          {mode !== "forgot" && (
            <div className="flex flex-col gap-1.5 text-left">
              <label className="text-[14px] font-bold text-gray-900">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Correct password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-[15px] font-medium outline-none focus:ring-1 focus:ring-black transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                >
                  {showPassword ? (
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="flex items-center justify-between">
            {mode !== "forgot" ? (
              <>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
                  />
                  <span className="text-[14px] font-bold text-gray-700 group-hover:text-black">
                    Remember me
                  </span>
                </label>
                {mode === "login" && (
                  <button
                    type="button"
                    onClick={() => setMode("forgot")}
                    className="text-[14px] font-bold text-black hover:text-blue-500 transition-colors cursor-pointer"
                  >
                    Forgot password?
                  </button>
                )}
              </>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setMode("login");
                  setIsCodeSent(false);
                }}
                className="text-[14px] font-bold text-blue-500 hover:text-blue-400"
              >
                ← Back to Login
              </button>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#111827] text-white py-4 rounded-xl text-[16px] font-bold active:scale-[0.98] transition-all mt-4 hover:bg-black shadow-lg shadow-black/5"
          >
            {mode === "login" && "Login"}
            {mode === "register" && "Sign up"}
            {mode === "forgot" &&
              (isCodeSent ? "Verify Code" : "Send Reset Link")}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-[14px] text-gray-500 font-medium">
            {mode === "login"
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <span
              onClick={() => {
                setMode(mode === "login" ? "register" : "login");
                setIsCodeSent(false);
              }}
              className="font-extrabold text-blue-500 cursor-pointer hover:text-blue-400 transition-colors"
            >
              {mode === "login" ? "Register!" : "Login!"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
