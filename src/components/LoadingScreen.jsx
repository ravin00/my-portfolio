import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 200);
          return 100;
        }
        return prev + 3;
      });
    }, 16);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--white)]">
      <div className="text-center">
        <div className="font-display text-2xl tracking-wide text-[var(--red)] uppercase mb-8">
          RAVIN BANDARA
        </div>
        <div className="w-48 h-[2px] bg-[var(--gray-light)] overflow-hidden mb-4">
          <div
            className="h-full bg-[var(--red)] transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="font-pixel text-xs text-[var(--text-muted)] tracking-wider">
          {String(Math.min(progress, 100)).padStart(3, "0")}
        </p>
      </div>
    </div>
  );
};
