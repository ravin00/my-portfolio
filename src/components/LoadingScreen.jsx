import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 3;
      });
    }, 16);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--red)]">
      <div className="text-center">
        <div className="font-mono text-sm font-semibold tracking-widest text-[var(--green)] uppercase mb-8">
          RAVIN BANDARA
        </div>
        <div className="w-48 h-[1px] bg-[var(--red-border)] overflow-hidden mb-4">
          <div
            className="h-full bg-[var(--green)] transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="font-mono text-[10px] text-[var(--white-muted)] tracking-wider">
          {String(Math.min(progress, 100)).padStart(3, "0")}
        </p>
      </div>
    </div>
  );
};
