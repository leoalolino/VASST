export const FullScreenLoader = () => (
  <div className="h-screen w-full flex flex-col items-center justify-center bg-[#F8F9FC]">
    <div className="relative">
      {/* The Logo with a pulse effect */}

      {/* Spinning ring around the logo */}
      <div className="absolute -inset-4 border-4 border-black border-t-gray-400 rounded-full animate-spin"></div>
    </div>
    <p className="mt-8 font-bold text-gray-400 uppercase tracking-[3px] text-[10px] animate-pulse">
      Verifying Credentials...
    </p>
  </div>
);
