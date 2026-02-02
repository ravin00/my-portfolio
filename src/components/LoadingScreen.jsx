import { useEffect, useState } from "react";
import { FaBug, FaCode, FaCoffee, FaDocker, FaGitAlt, FaRocket } from "react-icons/fa";
import { SiKubernetes, SiReact } from "react-icons/si";

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [joke, setJoke] = useState(0);
  const [consoleLines, setConsoleLines] = useState([]);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const loadingJokes = [
    "Turning coffee into code... ",
    "Debugging the bugs that debug bugs... ",
    "Asking Stack Overflow for life advice... ",
    "Waiting for npm install... ",
    "Pushing to main on a Friday... ",
    "It works on my machine! ",
    "Blaming the intern... ",
    "Deleting node_modules again... ",
  ];

  const consoleMessages = [
    "> Initializing awesomeness...",
    "> Loading dad jokes module...",
    "> Compiling sarcasm.js...",
    "> npm install coffee --save",
    "> Building portfolio...",
    "> Optimizing pixels...",
    "> Deploying creativity...",
    "> Ready to impress!",
  ];

  useEffect(() => {
    const speed = showEasterEgg ? 10 : 25;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, speed);

    const jokeInterval = setInterval(() => {
      setJoke(prev => (prev + 1) % loadingJokes.length);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearInterval(jokeInterval);
    };
  }, [onComplete, showEasterEgg]);

  // Console typing effect
  useEffect(() => {
    const messageIndex = Math.floor(progress / 12.5);
    if (messageIndex < consoleMessages.length && !consoleLines.includes(consoleMessages[messageIndex])) {
      setConsoleLines(prev => [...prev, consoleMessages[messageIndex]]);
    }
  }, [progress]);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 4 && !showEasterEgg) {
      setShowEasterEgg(true);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden cursor-pointer"
      style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      onClick={handleClick}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Floating tech icons */}
      <div className="absolute top-1/4 left-1/4 text-white/60 text-5xl animate-bounce-crazy">
        <FaCode />
      </div>
      <div className="absolute top-1/3 right-1/4 text-yellow-300/60 text-4xl animate-float" style={{ animationDelay: '0.5s' }}>
        <FaCoffee />
      </div>
      <div className="absolute bottom-1/3 left-1/3 text-green-300/60 text-5xl animate-spin-wobble">
        <FaRocket />
      </div>
      <div className="absolute bottom-1/4 right-1/3 text-red-300/60 text-4xl animate-shake">
        <FaBug />
      </div>
      <div className="absolute top-1/2 left-1/6 text-cyan-300/50 text-3xl animate-float" style={{ animationDelay: '1s' }}>
        <SiReact className="animate-spin" style={{ animationDuration: '3s' }} />
      </div>
      <div className="absolute top-1/5 right-1/6 text-blue-300/50 text-4xl animate-bounce" style={{ animationDelay: '0.3s' }}>
        <FaDocker />
      </div>
      <div className="absolute bottom-1/5 left-1/5 text-orange-300/50 text-3xl animate-float" style={{ animationDelay: '1.5s' }}>
        <FaGitAlt />
      </div>
      <div className="absolute bottom-1/3 right-1/5 text-blue-400/50 text-4xl animate-bounce-crazy" style={{ animationDelay: '0.7s' }}>
        <SiKubernetes />
      </div>

      {/* Main content */}
      <div className="text-center z-10">
        {/* Glitch effect logo */}
        <div className="relative">
          <h1 className="font-heading text-6xl md:text-8xl text-white cartoon-text mb-2 relative">
            <span className="relative inline-block">
              byRAVIN
              {/* Glitch layers */}
              <span className="absolute top-0 left-0 text-cyan-400 opacity-50 animate-pulse" style={{ clipPath: 'inset(20% 0 30% 0)', transform: 'translateX(-2px)' }}>
                byRAVIN
              </span>
              <span className="absolute top-0 left-0 text-pink-400 opacity-50 animate-pulse" style={{ clipPath: 'inset(50% 0 20% 0)', transform: 'translateX(2px)', animationDelay: '0.1s' }}>
                byRAVIN
              </span>
            </span>
          </h1>
          <p className="font-funky text-lg text-white/70 mb-4">
            Full-Stack Developer & DevOps Enthusiast
          </p>
        </div>

        {/* Loading joke */}
        <p className="font-funky text-2xl text-yellow-300 mb-6 animate-bounce h-10">
          {loadingJokes[joke]}
        </p>

        {/* Console window */}
        <div className="w-80 md:w-96 mx-auto mb-6 bg-gray-900/80 rounded-lg border-2 border-gray-600 overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-800 border-b border-gray-600">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-gray-400 text-xs font-mono">terminal</span>
          </div>
          <div className="p-3 h-28 overflow-hidden font-mono text-xs text-left">
            {consoleLines.map((line, i) => (
              <p key={i} className={`${i === consoleLines.length - 1 ? 'text-green-400' : 'text-gray-400'}`}>
                {line}
                {i === consoleLines.length - 1 && <span className="animate-pulse">_</span>}
              </p>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-80 h-6 bg-white/20 rounded-full border-4 border-white overflow-hidden mx-auto relative">
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3)'
            }}
          ></div>
          {/* Progress shine effect */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
            style={{ backgroundSize: '200% 100%' }}
          ></div>
        </div>

        <p className="mt-4 font-funky text-white text-xl font-bold">
          {progress}% {showEasterEgg ? '(TURBO MODE!)' : 'loaded'}
        </p>

        {/* Easter egg hint */}
        {clickCount > 0 && clickCount < 5 && !showEasterEgg && (
          <p className="mt-2 text-white/50 text-sm animate-pulse">
            {5 - clickCount} more clicks for turbo mode...
          </p>
        )}

        {progress === 100 && (
          <p className="mt-4 font-heading text-2xl text-yellow-300 animate-bounce">
            LET'S GOOO!
          </p>
        )}
      </div>

      {/* Footer hint */}
      <p className="absolute bottom-4 text-white/30 text-xs font-mono">
        Click anywhere for a surprise...
      </p>
    </div>
  );
};
