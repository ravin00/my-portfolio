import { useEffect, useMemo, useRef, useState } from "react";
import { FaAws, FaDocker, FaGithub, FaLinkedin, FaPlay, FaRocket, FaTerminal } from "react-icons/fa";
import { SiDotnet, SiKubernetes, SiReact, SiSpringboot, SiTerraform, SiTypescript,SiJavascript } from "react-icons/si";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hoveredLetter, setHoveredLetter] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [activeSkill, setActiveSkill] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const heroRef = useRef(null);

  const headlines = useMemo(() => [
    "I build full-stack apps",
    "I automate everything",
    "I break prod on Fridays",
    "I turn coffee into code",
    "I debug with console.log",
    "I google Stack Overflow",
  ], []);

  // Time-based greeting
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    if (hour < 21) return "Good evening";
    return "Working late";
  }, []);

  // Fun status messages
  const statusMessages = useMemo(() => [
    "Ready to build something awesome!",
    "Currently powered by caffeine",
    "Probably debugging something",
    "git commit -m 'it works now'",
    "404: Sleep not found",
  ], []);

  const [currentStatus, setCurrentStatus] = useState(0);

  // Tech stack with icons and colors
  const techStack = useMemo(() => [
    { name: ".NET", icon: SiDotnet, color: "text-purple-600", bg: "bg-purple-100" },
    { name: "React", icon: SiReact, color: "text-cyan-500", bg: "bg-cyan-100" },
    { name: "Spring Boot", icon: SiSpringboot, color: "text-green-600", bg: "bg-green-100" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600", bg: "bg-blue-100" },
    { name: "Javascript", icon: SiJavascript, color: "text-yellow-400", bg: "bg-yellow-100" },
    { name: "Docker", icon: FaDocker, color: "text-blue-500", bg: "bg-blue-100" },
    { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600", bg: "bg-blue-100" },
    { name: "AWS", icon: FaAws, color: "text-orange-500", bg: "bg-orange-100" },
    { name: "Terraform", icon: SiTerraform, color: "text-purple-500", bg: "bg-purple-100" },
  ], []);

  // Rotate active skill for spotlight effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [techStack.length]);

  // Confetti effect on name click
  const handleNameClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 4) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
      setClickCount(0);
    }
  };

  // Confetti particles
  const confettiParticles = useMemo(() =>
    [...Array(50)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 0.5}s`,
      duration: `${2 + Math.random() * 2}s`,
      color: ['bg-purple-500', 'bg-cyan-500', 'bg-pink-500', 'bg-yellow-500', 'bg-green-500'][i % 5],
    })), []
  );

  // Rotate status messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatus((prev) => (prev + 1) % statusMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [statusMessages.length]);

  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Terminal commands
  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.toLowerCase().trim();
    let response = "";

    switch (cmd) {
      case "help":
        response = "Commands: help, skills, hire, projects, clear, sudo";
        break;
      case "skills":
        response = ".NET | React | Spring Boot | Docker | K8s | AWS | Terraform";
        break;
      case "hire":
        response = "Let's connect on LinkedIn or drop me a message!";
        break;
      case "projects":
        response = "Scroll down to see my work or check my GitHub!";
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      case "sudo":
        response = "Nice try! You don't have sudo access here";
        break;
      default:
        response = `Command not found: ${cmd}. Try 'help'`;
    }

    setTerminalHistory(prev => [...prev.slice(-4), { cmd: terminalInput, response }]);
    setTerminalInput("");
  };

  // Typing animation
  useEffect(() => {
    const currentText = headlines[textIndex];
    const speed = isDeleting ? 30 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % headlines.length);
      } else if (isDeleting) {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, headlines]);

  // Generate stable background elements with parallax
  const bgElements = useMemo(() =>
    [...Array(15)].map((_, i) => ({
      symbol: ["</>", "{}", "[]", "//", "&&", "=>", "++", "!=", "::"][i % 9],
      left: `${10 + (i * 7) % 80}%`,
      top: `${5 + (i * 11) % 85}%`,
      delay: `${i * 0.5}s`,
      duration: `${6 + (i % 4)}s`,
      parallax: i % 2 === 0 ? 1 : -1,
    })), []
  );

  // Name letters for individual animation
  const nameLetters = "RAVIN".split("");

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 pb-16 overflow-hidden bg-white"
    >
      {/* Clean white background with subtle patterns */}
      <div className="absolute inset-0 bg-white">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-100 to-cyan-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Confetti celebration */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {confettiParticles.map((p, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 ${p.color} rounded-sm animate-confetti`}
              style={{
                left: p.left,
                top: '-20px',
                animationDelay: p.delay,
                animationDuration: p.duration,
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Floating code symbols with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bgElements.map((el, i) => (
          <div
            key={i}
            className="absolute text-3xl text-gray-300/40 animate-float font-mono transition-transform duration-300"
            style={{
              left: el.left,
              top: el.top,
              animationDelay: el.delay,
              animationDuration: el.duration,
              transform: `translate(${mousePos.x * el.parallax}px, ${mousePos.y * el.parallax}px)`,
            }}
          >
            {el.symbol}
          </div>
        ))}
      </div>

      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
          {/* Main Hero Content */}
          <div className="text-center mb-12">
            {/* Live status badge */}
            <div className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <span className="font-funky text-sm text-gray-600">{greeting}! people</span>
            </div>

            {/* Interactive Name - Click 5 times for confetti! */}
            <h1
              className="font-heading text-7xl md:text-9xl text-gray-800 mb-6 flex justify-center gap-1 cursor-pointer select-none"
              onClick={handleNameClick}
              title="Click me 5 times!"
            >
              {nameLetters.map((letter, i) => (
                <span
                  key={i}
                  className={`inline-block transition-all duration-300 hover:text-purple-600 
                    ${hoveredLetter === i ? 'animate-bounce-crazy scale-125 text-purple-600' : ''}`}
                  onMouseEnter={() => setHoveredLetter(i)}
                  onMouseLeave={() => setHoveredLetter(null)}
                  style={{
                    textShadow: hoveredLetter === i
                      ? '0 0 30px rgba(147, 51, 234, 0.5), 4px 4px 0px rgba(147, 51, 234, 0.3)'
                      : '4px 4px 0px rgba(0,0,0,0.1)',
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>

            {/* Subtitle with gradient */}
            <p className="font-funky text-xl md:text-2xl mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
              <span className="text-gray-600"> & </span>
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Cloud/DevOps Enthusiast
              </span>
            </p>

            {/* Typing headline */}
            <div className="h-10 mb-8">
              <p className="font-mono text-lg md:text-xl text-gray-500">
                {">"} {displayedText}<span className="animate-typing text-purple-500 font-bold">|</span>
              </p>
            </div>

            {/* Animated Tech Stack Carousel */}
            <div className="mb-10">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4 font-mono">Tech Stack</p>
              <div className="flex flex-wrap justify-center gap-3">
                {techStack.map((tech, i) => {
                  const Icon = tech.icon;
                  const isActive = activeSkill === i;
                  return (
                    <div
                      key={tech.name}
                      className={`relative group cursor-pointer transition-all duration-500 ${isActive ? 'scale-110' : 'scale-100'}`}
                    >
                      <div className={`${tech.bg} ${isActive ? 'ring-2 ring-offset-2 ring-purple-400' : ''} 
                        p-3 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300
                        hover:shadow-lg hover:-translate-y-1`}
                      >
                        <Icon className={`text-2xl ${tech.color}`} />
                      </div>
                      {/* Tooltip */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-200 whitespace-nowrap">
                        <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded font-mono">
                          {tech.name}
                        </span>
                      </div>
                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick intro card */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 max-w-2xl mx-auto mb-8 hover:shadow-lg transition-shadow">
              <p className="font-body text-gray-600">
                Building scalable applications from <span className="font-bold text-purple-600">Sri Lanka</span>.
                I love turning complex problems into elegant solutions — and occasionally breaking prod on Fridays.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href="#projects"
                className="group relative bg-gray-900 text-white px-8 py-4 rounded-xl font-funky text-lg
                  overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center gap-2">
                  <FaRocket className="group-hover:animate-bounce" /> View My Work
                </span>
              </a>
              <a
                href="#contact"
                className="group bg-white border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-xl font-funky text-lg
                  transition-all duration-300 hover:border-purple-400 hover:shadow-lg hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  Let's Talk <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>
            </div>

            {/* Social Links with stats */}
            <div className="flex justify-center items-center gap-6">
              <a
                href="https://github.com/ravin00"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-gray-100 hover:bg-gray-900 hover:text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                <FaGithub className="text-xl" />
                <span className="font-mono text-sm">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ravin-bandara-/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-blue-100 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                <FaLinkedin className="text-xl text-blue-600 group-hover:text-white" />
                <span className="font-mono text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Interactive Terminal Card */}
          <div className="max-w-lg mx-auto mt-12">
            <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {/* Terminal Header */}
              <div className="bg-gray-100 border-b-2 border-gray-200 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors cursor-pointer"></div>
                </div>
                <div className="flex-1 flex items-center justify-center gap-2">
                  <FaTerminal className="text-gray-400" />
                  <span className="text-gray-500 text-sm font-mono">ravin@portfolio ~ zsh</span>
                </div>
                <FaPlay className="text-gray-400 text-xs" />
              </div>
              {/* Terminal Body */}
              <div className="bg-gray-900 p-4 font-mono text-sm min-h-[180px]">
                <p><span className="text-green-400">~</span> $ <span className="text-gray-300">whoami</span></p>
                <p className="text-purple-400 mb-2">Ravin Bandara - Full-Stack Developer</p>
                <p><span className="text-green-400">~</span> $ <span className="text-gray-300">echo $STATUS</span></p>
                <p className="text-yellow-400 mb-2">"{statusMessages[currentStatus]}"</p>

                {/* Command history */}
                {terminalHistory.map((item, i) => (
                  <div key={i} className="mb-2">
                    <p><span className="text-green-400">~</span> $ <span className="text-gray-300">{item.cmd}</span></p>
                    <p className="text-cyan-400">{item.response}</p>
                  </div>
                ))}

                {/* Interactive input */}
                <form onSubmit={handleTerminalSubmit} className="flex items-center">
                  <span className="text-green-400">~</span>
                  <span className="text-gray-300 mx-1">$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    className="bg-transparent text-gray-100 outline-none flex-1 caret-green-400"
                    placeholder="type 'help'..."
                  />
                </form>
              </div>
            </div>
            <p className="text-center text-xs text-gray-400 mt-3 font-mono flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Interactive terminal — try typing commands!
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-1">
              <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-bounce"></div>
            </div>
            <span className="text-xs text-gray-400 font-mono">scroll</span>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
