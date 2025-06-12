export const Loader = () => {
  return (
    <div className="flex flex-col items-center min-h-[80vh] justify-center">
      <div className="mb-8 relative">
        <div
          className="w-10 h-10 border-4 border-t-[#] border-r-[#0792dd]/30 border-b-[#0792dd]/10 border-l-[#0792dd]/70 rounded-full animate-spin relative z-10"
          role="status"
          aria-label="Loading"
        />
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-4 bg-gradient-to-t from-transparent to-[rgba(219,68,68,0.1)] blur-sm"></div>
      </div>
      <p className="text-xl text-gray-600 mt-4 font-medium">
        Loading amazing products for you...
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Please wait while we fetch the latest items
      </p>
    </div>
  );
};
