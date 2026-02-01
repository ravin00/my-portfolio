import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const frontendSkills = [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3"
  ];
  const familiarFrontend = [
    "TailwindCSS",
    "Styled Components",
    "Redux",
    "Zustand"
  ];

  const backendSkills = [
    "Spring Boot",
    "ASP.NET"
  ];
  const familiarBackend = [
    "Node.js",
    "FastAPI"
  ];

  const databaseSkills = [
    "MongoDB",
    "PostgreSQL"
  ];
  const familiarDatabase = [
    "MySQL"
  ];

  const devopsSkills = [
    "Docker",
    "GitHub Actions",
    "Linux",
    "AWS"
  ];
  const familiarDevops = [
    "Kubernetes",
    "Bash",
    "Prometheus",
    "Grafana",
    "ArgoCD",
    "Jenkins"
  ];

  const skillCategories = [
    {
      title: "Frontend",
      // icon: "💻",
      skills: frontendSkills,
      familiar: familiarFrontend,
      color: "blue",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      title: "Backend",
      // icon: "⚙️",
      skills: backendSkills,
      familiar: familiarBackend,
      color: "green",
      gradient: "from-green-400 to-emerald-400"
    },
    {
      title: "Database",
      // icon: "🗄️",
      skills: databaseSkills,
      familiar: familiarDatabase,
      color: "purple",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      title: "DevOps",
      // icon: "🚀",
      skills: devopsSkills,
      familiar: familiarDevops,
      color: "orange",
      gradient: "from-orange-400 to-red-400"
    }
  ];

  const getSkillClasses = (category, skillIndex, isHovered) => {
    const baseClasses = "px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 cursor-default";
    const colorMap = {
      blue: isHovered
        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50 scale-110"
        : "bg-blue-500/20 text-blue-300 hover:bg-blue-500/40",
      green: isHovered
        ? "bg-green-500 text-white shadow-lg shadow-green-500/50 scale-110"
        : "bg-green-500/20 text-green-300 hover:bg-green-500/40",
      purple: isHovered
        ? "bg-purple-500 text-white shadow-lg shadow-purple-500/50 scale-110"
        : "bg-purple-500/20 text-purple-300 hover:bg-purple-500/40",
      orange: isHovered
        ? "bg-orange-500 text-white shadow-lg shadow-orange-500/50 scale-110"
        : "bg-orange-500/20 text-orange-300 hover:bg-orange-500/40"
    };
    return `${baseClasses} ${colorMap[category.color] || colorMap.blue}`;
  };

  const getCategoryClasses = (category, categoryIndex, isActive) => {
    const baseClasses = "p-6 rounded-xl border transition-all duration-500 transform";
    const colorMap = {
      blue: isActive
        ? "bg-blue-900/40 border-blue-500/60 shadow-xl shadow-blue-500/20 scale-105"
        : "bg-white/5 border-white/10 hover:border-blue-500/40",
      green: isActive
        ? "bg-green-900/40 border-green-500/60 shadow-xl shadow-green-500/20 scale-105"
        : "bg-white/5 border-white/10 hover:border-green-500/40",
      purple: isActive
        ? "bg-purple-900/40 border-purple-500/60 shadow-xl shadow-purple-500/20 scale-105"
        : "bg-white/5 border-white/10 hover:border-purple-500/40",
      orange: isActive
        ? "bg-orange-900/40 border-orange-500/60 shadow-xl shadow-orange-500/20 scale-105"
        : "bg-white/5 border-white/10 hover:border-orange-500/40"
    };
    return `${baseClasses} ${colorMap[category.color] || colorMap.blue}`;
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* ...background and header unchanged... */}

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* ...intro unchanged... */}

          {/* Interactive Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={getCategoryClasses(category, categoryIndex, activeCategory === categoryIndex)}
                onMouseEnter={() => setActiveCategory(categoryIndex)}
                onMouseLeave={() => setActiveCategory(null)}
                style={{
                  animationDelay: `${categoryIndex * 100}ms`
                }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3 animate-bounce">{category.icon}</span>
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>

                <div>
                  <div className="mb-2 text-blue-300 font-semibold text-xs">Proficient</div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.skills.map((tech, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={getSkillClasses(
                          category,
                          skillIndex,
                          hoveredSkill === `${categoryIndex}-pro-${skillIndex}`
                        )}
                        onMouseEnter={() => setHoveredSkill(`${categoryIndex}-pro-${skillIndex}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        style={{
                          animationDelay: `${skillIndex * 50}ms`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {category.familiar && category.familiar.length > 0 && (
                    <>
                      <div className="mb-2 text-gray-400 font-semibold text-xs">Familiar With</div>
                      <div className="flex flex-wrap gap-2">
                        {category.familiar.map((tech, skillIndex) => (
                          <span
                            key={skillIndex}
                            className={getSkillClasses(
                              category,
                              skillIndex,
                              hoveredSkill === `${categoryIndex}-fam-${skillIndex}`
                            ) + " opacity-70"}
                            onMouseEnter={() => setHoveredSkill(`${categoryIndex}-fam-${skillIndex}`)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            style={{
                              animationDelay: `${skillIndex * 50}ms`
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Animated Progress Bar */}
                <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transform transition-all duration-1000 ease-out`}
                    style={{
                      width: activeCategory === categoryIndex ? '100%' : '70%',
                      transform: activeCategory === categoryIndex ? 'translateX(0)' : 'translateX(-10%)'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* ...education and work experience unchanged... */}
        </div>
      </RevealOnScroll>
    </section>
  );
};