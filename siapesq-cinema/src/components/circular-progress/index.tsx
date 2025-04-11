export default function CircularProgress({ small }: { small?: boolean }) {
  return (
    <div className="flex justify-center items-center">
      <div className={small ? "relative w-6 h-6" : "relative w-16 h-16"}>
        <div className="animate-spin text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 50 50"
            fill="none"
          >
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="white"
              strokeWidth="3"
              strokeDasharray="125.6"
              strokeDashoffset="31.4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
