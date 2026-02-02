import { useState } from "react";
import { FaAws, FaBook, FaBriefcase, FaCloud, FaCode, FaCoffee, FaDocker, FaFigma, FaFlag, FaGamepad, FaGitAlt, FaGraduationCap, FaHeart, FaJira, FaJs, FaLinux, FaMusic, FaNodeJs, FaPlane, FaPython, FaReact, FaServer, FaTerminal, FaTools } from "react-icons/fa";
import { SiArgo, SiDotnet, SiExpress, SiFastapi, SiGithubactions, SiGrafana, SiHelm, SiJfrog, SiKubernetes, SiMongodb, SiMysql, SiPostgresql, SiPrometheus, SiSharp, SiSpringboot, SiTailwindcss, SiTerraform, SiTypescript } from "react-icons/si";
import ravinPhoto from "../../assets/WhatsApp Image 2026-02-02 at 03.44.56.jpeg";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const [flippedCard, setFlippedCard] = useState(null);
  const [funFact, setFunFact] = useState(null);
  const [clickCounts, setClickCounts] = useState({ Gaming: 0, Music: 0, Travel: 0, Coffee: 0, Learning: 0 });
  // Main tools I love to work with
  const mainToolCategories = [
    {
      name: 'The "Fluent" Zone',
      subtitle: "Languages",
      icon: FaCode,
      color: "from-cyan-400 to-blue-500",
      skills: [
        { name: "C#", icon: SiSharp, color: "text-purple-600", joke: "My comfort blanket" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600", joke: "JS, but with trust issues" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500", joke: "For the thrill of undefined" },
        { name: "Linux", icon: FaLinux, color: "text-gray-800", joke: "Sudo make me a sandwich" },
      ]
    },
    {
      name: 'The "Heavy Lifters"',
      subtitle: "Frameworks",
      icon: FaServer,
      color: "from-green-400 to-teal-500",
      skills: [
        { name: ".NET", icon: SiDotnet, color: "text-purple-600", joke: "Old reliable" },
        { name: "React", icon: FaReact, color: "text-cyan-500", joke: "Hooks > Classes, fight me" },
        { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500", joke: "Yes, I do Java too" },
      ]
    },
    {
      name: 'The "Please Don\'t Crash"',
      subtitle: "Infra & DevOps",
      icon: FaCloud,
      color: "from-orange-400 to-red-500",
      skills: [
        { name: "Docker", icon: FaDocker, color: "text-blue-400", joke: '"But it worked in the container!"' },
        { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500", joke: "Orchestrating chaos" },
        { name: "AWS", icon: FaAws, color: "text-orange-400", joke: "Helping Bezos buy rockets" },
      ]
    },
  ];

  // Other tools I've touched and have experience with
  const otherTools = [
    { name: "FastAPI", icon: SiFastapi, color: "text-teal-500" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
    { name: "Express", icon: SiExpress, color: "text-gray-700" },
    { name: "Python", icon: FaPython, color: "text-blue-500" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Terraform", icon: SiTerraform, color: "text-purple-600" },
    { name: "GitHub Actions", icon: SiGithubactions, color: "text-gray-700" },
    { name: "ArgoCD", icon: SiArgo, color: "text-orange-500" },
    { name: "Helm", icon: SiHelm, color: "text-blue-600" },
    { name: "Grafana", icon: SiGrafana, color: "text-orange-500" },
    { name: "Prometheus", icon: SiPrometheus, color: "text-red-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
    { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
    { name: "Figma", icon: FaFigma, color: "text-purple-500" },
    { name: "JIRA", icon: FaJira, color: "text-blue-600" },
    { name: "JFrog", icon: SiJfrog, color: "text-green-500" },
    { name: "Shell", icon: FaTerminal, color: "text-gray-700" },
  ];

  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Creative Software",
      period: "Aug 2024 - Apr 2025",
      type: "Full-time | Hybrid",
      highlights: [
        "Built React frontend for self-service portal with reusable components",
        "Designed wireframes & prototypes in Figma with UX team",
        "Developed backend APIs using FastAPI",
        "GitOps with ArgoCD & Terraform for automated deployments",
        "Built CI/CD pipelines with GitHub Actions",
        "Worked with Docker, Kubernetes & Helm Charts",
      ],
      color: "from-purple-400 to-pink-400"
    },
    {
      role: "External Junior Software Engineer",
      company: "Cognite (Oslo, Norway)",
      period: "Remote",
      type: "Contract",
      highlights: [
        "Contributed to innovative product development",
        "Collaborated with cross-functional teams",
        "Delivered high-quality software solutions",
      ],
      color: "from-cyan-400 to-blue-400"
    },
    {
      role: "Developer",
      company: "MS Club of SLIIT",
      period: "Jun 2024 - Present",
      type: "Community",
      highlights: [
        "Full-Stack Development with Next.js",
        "Knowledge sharing & mentorship",
        "Active community contributor",
      ],
      color: "from-green-400 to-teal-400"
    }
  ];

  const education = [
    {
      degree: "BSc (Hons) in Information Technology",
      school: "SLIIT University",
      period: "2022 - 2026",
      specialization: "Specialising in Information Technology"
    }
  ];

  const interests = [
    {
      name: "Gaming",
      icon: FaGamepad,
      color: "bg-purple-100",
      gradient: "from-purple-500 to-indigo-600",
      level: 85,
      backText: "I can speedrun debugging faster than any boss fight!",
      emoji: "🎮"
    },
    {
      name: "Music",
      icon: FaMusic,
      color: "bg-pink-100",
      gradient: "from-pink-500 to-rose-600",
      level: 70,
      backText: "My code has rhythm — usually in 4/4 time signature",
      emoji: "🎵"
    },
    {
      name: "Travel",
      icon: FaPlane,
      color: "bg-blue-100",
      gradient: "from-blue-500 to-cyan-600",
      level: 60,
      backText: "Dreaming of coding from beaches worldwide (with stable WiFi)",
      emoji: "✈️"
    },
    {
      name: "Coffee",
      icon: FaCoffee,
      color: "bg-amber-100",
      gradient: "from-amber-500 to-orange-600",
      level: 100,
      backText: "My blood type is espresso. Error rate drops 50% after first cup.",
      emoji: "☕"
    },
    {
      name: "Learning",
      icon: FaBook,
      color: "bg-green-100",
      gradient: "from-green-500 to-teal-600",
      level: 95,
      backText: "Currently learning: Everything I don't know yet (it's a long list)",
      emoji: "📚"
    },
  ];

  const funFactsList = [
    { text: "I debug code faster than I debug my life choices", emoji: "🐛" },
    { text: "My git commit messages are funnier than my jokes", emoji: "😂" },
    { text: "I speak fluent JavaScript and sarcasm", emoji: "💬" },
    { text: "Tabs > Spaces (this is a hill I'll die on)", emoji: "⌨️" },
    { text: "I once fixed a production bug while half asleep", emoji: "😴" },
    { text: "My rubber duck is my most trusted code reviewer", emoji: "🦆" },
    { text: "I've mass-produced more coffee than code some days", emoji: "☕" },
    { text: "My playlist: 50% Lo-fi, 50% keyboard ASMR", emoji: "🎧" },
  ];

  const handleCardClick = (name) => {
    setFlippedCard(flippedCard === name ? null : name);
    setClickCounts(prev => ({ ...prev, [name]: prev[name] + 1 }));
  };

  const getRandomFunFact = () => {
    const randomFact = funFactsList[Math.floor(Math.random() * funFactsList.length)];
    setFunFact(randomFact);
    setTimeout(() => setFunFact(null), 4000);
  };

  const funFacts = [
    "I debug code faster than I debug my life choices 🐛",
    "My git commit messages are funnier than my jokes 😂",
    "I speak fluent JavaScript and sarcasm 💬",
    "Tabs > Spaces (fight me) ⌨️",
  ];

  return (
    <section id="about" className="py-24 relative">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl md:text-6xl text-gray-800 cartoon-text mb-4">
              ABOUT ME
            </h2>
            <p className="font-funky text-xl text-gray-700">
              (Warning: May contain traces of caffeine and bad puns)
            </p>
          </div>

          {/* Intro Card */}
          <div className="cartoon-card p-8 mb-12 bg-gradient-to-r from-yellow-50 to-orange-50">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Bio */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-heading text-3xl text-gray-800 mb-4">
                  Hey there! I'm Ravin 👋
                </h3>
                <p className="font-body text-lg text-gray-700 mb-4">
                  I am an undergraduate student at SLIIT. When I'm not fighting with the compiler, I'm bridging the gap between development and operations.
                  I love building things that live on the internet and automating everything I touch!
                  <span className="block mt-2 text-purple-600 font-bold">
                    Currently shipping features at weekdays & breaking prod on weekends! 🚀
                  </span>
                </p>
                <div className="joke-card inline-block">
                  <p className="font-body text-gray-800">
                    "{funFacts[Math.floor(Math.random() * funFacts.length)]}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section - Screenshot Style */}
          <div className="mb-16">
            <h3 className="font-heading text-4xl text-center text-gray-800 cartoon-text-small mb-8">
              <FaBriefcase className="inline mr-3 text-purple-500" />
              EXPERIENCE
            </h3>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Photo Side */}
              <div className="lg:w-2/5 flex justify-center">
                <div className="relative">
                  <img
                    src={ravinPhoto}
                    alt="Ravin Bandara working"
                    className="rounded-3xl w-full max-w-md object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Timeline Side */}
              <div className="lg:w-3/5 space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex gap-4">
                    {/* Green Bar & Flag */}
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-green-400 rounded flex items-center justify-center">
                        <FaFlag className="text-white text-sm" />
                      </div>
                      <div className="w-1 flex-1 bg-green-400 mt-1"></div>
                    </div>

                    {/* Experience Card */}
                    <div className="flex-1 cartoon-card p-5 bg-white">
                      <h4 className="font-funky text-xl font-bold text-gray-800">{exp.role}</h4>
                      <p className="font-funky text-purple-600 font-semibold">{exp.company}</p>
                      <p className="font-body text-gray-600 mt-2">
                        {exp.highlights.join(" ")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="font-heading text-4xl text-center text-gray-800 cartoon-text-small mb-8">
              <FaGraduationCap className="inline mr-3 text-cyan-500" />
              EDUCATION
            </h3>
            {education.map((edu, index) => (
              <div key={index} className="cartoon-card p-6 bg-gradient-to-r from-cyan-50 to-blue-50">
                <div className="flex items-center gap-4">
                  <div>
                    <h4 className="font-funky text-xl font-bold text-gray-800">{edu.degree}</h4>
                    <p className="font-funky text-cyan-600 font-bold">{edu.school}</p>
                    <p className="text-gray-600">{edu.period} | {edu.specialization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Life Outside Coding - Interactive Cards */}
          <div className="mb-16">
            <h3 className="font-heading text-4xl text-center text-gray-800 cartoon-text-small mb-4">
              WHEN I'M NOT CODING...
            </h3>
            <p className="text-center font-body text-gray-500 mb-8">
              (Click the cards to flip them!)
            </p>

            {/* Interactive Flip Cards */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="relative w-40 h-48 cursor-pointer group perspective-1000"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleCardClick(interest.name)}
                >
                  {/* Card Container with flip effect */}
                  <div
                    className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${flippedCard === interest.name ? 'rotate-y-180' : ''
                      }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: flippedCard === interest.name ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                  >
                    {/* Front of Card */}
                    <div
                      className={`absolute inset-0 ${interest.color} rounded-2xl shadow-lg border-4 border-gray-800 flex flex-col items-center justify-center p-4 backface-hidden`}
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">
                        {interest.emoji}
                      </div>
                      <interest.icon className="text-3xl text-gray-700 mb-2" />
                      <span className="font-funky font-bold text-gray-800 text-lg">{interest.name}</span>

                      {/* Skill Level Bar */}
                      <div className="w-full mt-3">
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span>Level</span>
                          <span>{interest.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${interest.gradient} rounded-full transition-all duration-1000`}
                            style={{ width: `${interest.level}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Click counter badge */}
                      {clickCounts[interest.name] > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-mono animate-bounce">
                          {clickCounts[interest.name]}
                        </span>
                      )}
                    </div>

                    {/* Back of Card */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${interest.gradient} rounded-2xl shadow-lg border-4 border-gray-800 flex flex-col items-center justify-center p-4 text-white`}
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      <div className="text-4xl mb-3">{interest.emoji}</div>
                      <p className="font-body text-sm text-center leading-relaxed">
                        {interest.backText}
                      </p>
                      <div className="mt-3 text-xs opacity-75">
                        (tap to flip back)
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="flex justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="font-heading text-2xl text-purple-600">
                  {Object.values(clickCounts).reduce((a, b) => a + b, 0)}
                </div>
                <div className="font-body text-xs text-gray-500">Total Clicks</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-2xl text-cyan-600">
                  {interests.length}
                </div>
                <div className="font-body text-xs text-gray-500">Interests</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-2xl text-pink-600">
                  ∞
                </div>
                <div className="font-body text-xs text-gray-500">Curiosity</div>
              </div>
            </div>
          </div>

          {/* Skills Section - Refactored */}
          <div>
            <h3 className="font-heading text-4xl text-center text-gray-800 cartoon-text-small mb-4">
              <FaCode className="inline mr-3 text-green-500" />
              TECH STACK
            </h3>
            <p className="text-center font-body text-gray-600 mb-10">
              (aka the things I Google less often now)
            </p>

            {/* Main Tools I Love */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-3 mb-8">
                <FaHeart className="text-2xl text-red-500 animate-pulse" />
                <h4 className="font-heading text-2xl text-gray-800">Tools I Love to Work With</h4>
                <FaHeart className="text-2xl text-red-500 animate-pulse" />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {mainToolCategories.map((category, catIndex) => (
                  <div key={catIndex} className="cartoon-card overflow-hidden">
                    {/* Category Header */}
                    <div className={`bg-gradient-to-r ${category.color} p-4`}>
                      <div className="flex items-center gap-3">
                        <category.icon className="text-2xl text-white" />
                        <div>
                          <h5 className="font-heading text-lg text-white">{category.name}</h5>
                          <p className="font-body text-white/80 text-sm">{category.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    {/* Skills with jokes */}
                    <div className="p-4 space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center gap-3 group">
                          <skill.icon className={`text-3xl ${skill.color} group-hover:scale-125 transition-transform`} />
                          <div className="flex-1">
                            <span className="font-funky font-bold text-gray-800">{skill.name}</span>
                            <p className="font-body text-xs text-gray-500 italic">({skill.joke})</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Tools I've Touched */}
            <div>
              <div className="flex items-center justify-center gap-3 mb-6">
                <FaTools className="text-xl text-gray-500" />
                <h4 className="font-heading text-xl text-gray-600">Other Tools I've Touched</h4>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {otherTools.map((tool, index) => (
                  <div
                    key={index}
                    className="skill-badge px-4 py-2 flex items-center gap-2 hover:scale-105 transition-transform cursor-default"
                  >
                    <tool.icon className={`text-xl ${tool.color}`} />
                    <span className="font-funky text-sm text-gray-700">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="cartoon-card p-4 text-center bg-gradient-to-br from-purple-50 to-pink-50">
                <span className="font-heading text-3xl text-purple-600">500+</span>
                <p className="font-body text-gray-600 text-sm">Commits this year</p>
              </div>
              <div className="cartoon-card p-4 text-center bg-gradient-to-br from-cyan-50 to-blue-50">
                <span className="font-heading text-3xl text-cyan-600">∞</span>
                <p className="font-body text-gray-600 text-sm">Cups of coffee</p>
              </div>
              <div className="cartoon-card p-4 text-center bg-gradient-to-br from-green-50 to-teal-50">
                <span className="font-heading text-3xl text-green-600">99%</span>
                <p className="font-body text-gray-600 text-sm">Bugs eventually fixed</p>
              </div>
              <div className="cartoon-card p-4 text-center bg-gradient-to-br from-orange-50 to-amber-50">
                <span className="font-heading text-3xl text-orange-600">24/7</span>
                <p className="font-body text-gray-600 text-sm">Learning mode</p>
              </div>
            </div>

            {/* Fun footer */}
            <div className="text-center mt-10">
              <div className="joke-card inline-block">
                <p className="font-body text-gray-800">
                  "I don't always test my code, but when I do, I do it in production" 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
