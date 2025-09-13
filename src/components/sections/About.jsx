import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";

export const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const frontendSkills = [
    "React",
    "TypeScript",
    "Next.js",
    "JavaScript",
    "TailwindCSS",
    "Styled Components",
    "Redux",
    "Zustand",
    "HTML5",
    "CSS3"
  ];

  const backendSkills = [
    "Node.js",
    "Fast-API",
    "Spring Boot",
    "ASP.NET",
    "GraphQL",
    "Kafka",
    "Express.js",
    "Redis",
    "RESTful APIs",
    "Microservices",
  ];

  const databaseSkills = [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "SQLServer"
  ];

  const devopsSkills = [
    "Docker",
    "Kubernetes",
    "Bash",
    "Linux",
    "AWS",
    "Azure",
    "CI/CD",
    "GitHub Actions",
    "Jenkins",
    "Terraform",
    "Prometheus",
    "Grafana",
    "ArgoCD"
  ];

  const skillCategories = [
    {
      title: "Frontend",
      // icon: "💻",
      skills: frontendSkills,
      color: "blue",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      title: "Backend",
      // icon: "⚙️",
      skills: backendSkills,
      color: "green",
      gradient: "from-green-400 to-emerald-400"
    },
    {
      title: "Database",
      // icon: "🗄️",
      skills: databaseSkills,
      color: "purple",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      title: "DevOps",
      // icon: "🚀",
      skills: devopsSkills,
      color: "orange",
      gradient: "from-orange-400 to-red-400"
    }
  ];

  const getSkillClasses = (category, skillIndex, isHovered) => {
    const baseClasses = "py-2 px-3 rounded-full text-sm font-medium transform transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1 hover:scale-110";
    
    switch(category.color) {
      case 'blue':
        return `${baseClasses} bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 hover:shadow-[0_4px_12px_rgba(59,130,246,0.3)] ${isHovered ? 'animate-pulse' : ''}`;
      case 'green':
        return `${baseClasses} bg-green-500/10 text-green-500 hover:bg-green-500/20 hover:shadow-[0_4px_12px_rgba(34,197,94,0.3)] ${isHovered ? 'animate-pulse' : ''}`;
      case 'purple':
        return `${baseClasses} bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 hover:shadow-[0_4px_12px_rgba(168,85,247,0.3)] ${isHovered ? 'animate-pulse' : ''}`;
      case 'orange':
        return `${baseClasses} bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 hover:shadow-[0_4px_12px_rgba(249,115,22,0.3)] ${isHovered ? 'animate-pulse' : ''}`;
      default:
        return baseClasses;
    }
  };

  const getCategoryClasses = (category, categoryIndex, isActive) => {
    const baseClasses = "rounded-2xl p-6 border border-white/10 cursor-pointer transform transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-105 hover:shadow-[0_12px_40px_rgba(59,130,246,0.15)] backdrop-blur-sm bg-white/5";
    
    switch(category.color) {
      case 'blue':
        return `${baseClasses} hover:border-blue-500/50 ${isActive ? 'border-blue-500/50 -translate-y-2 scale-105' : ''}`;
      case 'green':
        return `${baseClasses} hover:border-green-500/50 ${isActive ? 'border-green-500/50 -translate-y-2 scale-105' : ''}`;
      case 'purple':
        return `${baseClasses} hover:border-purple-500/50 ${isActive ? 'border-purple-500/50 -translate-y-2 scale-105' : ''}`;
      case 'orange':
        return `${baseClasses} hover:border-orange-500/50 ${isActive ? 'border-orange-500/50 -translate-y-2 scale-105' : ''}`;
      default:
        return baseClasses;
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-500/5 rounded-full animate-pulse delay-300"></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Animated Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full animate-pulse"></div>
          </div>

          {/* Animated Intro */}
          <div className="rounded-2xl p-8 border border-white/10 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_8px_32px_rgba(59,130,246,0.1)] transition-all duration-500 mb-12 backdrop-blur-sm bg-white/5">
            <p className="text-gray-300 text-center text-lg md:text-xl leading-relaxed">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                Passionate developer
              </span>{" "}
              with expertise in building scalable web applications and creating innovative solutions.
            </p>
          </div>

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
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((tech, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={getSkillClasses(
                        category, 
                        skillIndex, 
                        hoveredSkill === `${categoryIndex}-${skillIndex}`
                      )}
                      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      style={{
                        animationDelay: `${skillIndex * 50}ms`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
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

          {/* Enhanced Education and Work Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group p-8 rounded-2xl border border-white/10 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_12px_40px_rgba(59,130,246,0.1)] transition-all duration-500 backdrop-blur-sm bg-white/5">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4 group-hover:animate-bounce"></span>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Education
                </h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                  <h4 className="font-semibold text-blue-400 mb-2">
                    B.S. in Information Technology
                  </h4>
                  <p className="text-gray-300 text-sm mb-1">
                    Sri Lanka Institute of Information Technology
                  </p>
                  <p className="text-gray-400 text-sm">(2022-2026)</p>
                </div>
                <div className="p-4 rounded-lg bg-gray-500/5 border border-gray-500/20 hover:border-gray-500/40 transition-all duration-300">
                  <p className="text-gray-300 text-sm">
                    <strong>Relevant Coursework:</strong> Data Structures, Web Development, Cloud Computing, Software Engineering
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group p-8 rounded-2xl border border-white/10 hover:-translate-y-2 hover:border-green-500/30 hover:shadow-[0_12px_40px_rgba(34,197,94,0.1)] transition-all duration-500 backdrop-blur-sm bg-white/5">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4 group-hover:animate-bounce"></span>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Work Experience
                </h3>
              </div>
              <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <h4 className="font-semibold text-green-400 mb-2">
                  Software Engineer Intern
                </h4>
                <p className="text-gray-300 text-sm mb-2">
                  Creative Software (Cognite AS Client) - Oslo, Norway
                </p>
                <p className="text-gray-400 text-sm mb-3">(2024 Aug - 2025 Apr)</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {[
                    "Contributed to full-stack development using modern frameworks in an agile environment",
                    "Developed microservices for Cognite's industrial data platform as external Junior Software Engineer",
                    "Built frontend components and integrated REST APIs while focusing on clean, maintainable code",
                    "Collaborated remotely with cross-functional engineering teams to deliver scalable solutions"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">•</span>
                      <span className="hover:text-white transition-colors duration-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};