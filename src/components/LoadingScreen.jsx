import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 18);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="text-center">
        <div className="font-display text-2xl font-semibold text-[var(--text)] mb-8">
          Ravin<span className="text-[var(--accent)]">.</span>
        </div>

        <div className="w-64 h-[2px] bg-[var(--bg-muted)] rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-[var(--text)] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="font-mono text-xs text-[var(--text-subtle)] tracking-wider">
          {String(progress).padStart(3, "0")}%
        </p>
      </div>
    </div>
  );
};
