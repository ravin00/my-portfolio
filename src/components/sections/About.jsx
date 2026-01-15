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

  // ...getSkillClasses and getCategoryClasses unchanged...

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