import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);

  const projects = [
    {
      title: "Academic Scheduler",
      description: "The Time Sync Academic Scheduler is a simple, efficient tool designed to help students and faculty manage their academic schedules. It synchronizes classes, meetings, and events, preventing conflicts and ensuring smooth time management.",
      technologies: ["React", "TypeScript", "Chakra-UI", "Spring Boot", "Docker", "Redis", "Nginx", "Python", "ArgoCD", "GitHub Actions"],
      githubUrl: "https://github.com/VoidEngineers/Academic_Scheduler",
      gradient: "from-blue-500 to-cyan-500",
      status: "Completed"
    },
    {
      title: "SkillHive-POC",
      description: "SkillHive is a dynamic social platform designed to connect users by allowing them to offer services, create structured learning plans, and engage with the community through likes and comments",
      technologies: ["React", "Spring Boot", "Tailwind", "Redux"],
      githubUrl: "https://github.com/VoidEngineers/SkillHive-POC",
      gradient: "from-green-500 to-emerald-500",
      status: "Completed"
    },
    {
      title: "DevSecOps Pipeline",
      description: "This project involved the design and implementation of a DevSecOps pipeline to integrate security into every phase of the software development lifecycle (SDLC). The goal was to automate secure code delivery using modern CI/CD practices.",
      technologies: ["React", "Nginx", "Node.js", "PostgreSQL", "AWS", "Terraform", "Docker", "Jenkins", "GitHub Webhooks", "SonarQube", "Trivy", "OWASP", "Let's Encrypt", "AWS ALB"],
      githubUrl: "#",
      gradient: "from-purple-500 to-pink-500",
      status: "In Progress"
    },
    {
      title: "Expense Management System",
      description: "Comprehensive expense tracking application with analytics dashboard. Features expense management, budget tracking, spending trends, and savings goals with real-time reporting and data visualization.",
      technologies: [".NET", "React", "GitHub Actions", "Azure DevOps", "Docker", "Kubernetes", "Prometheus", "Grafana", "Azure"],
      githubUrl: "https://github.com/ravin00/ExpenseTracker",
      gradient: "from-orange-500 to-red-500",
      status: "In Progress"
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Simplified Background Elements - No floating dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-16 w-40 h-40 bg-blue-500/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-purple-500/5 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-green-500/5 rounded-full animate-pulse delay-1000"></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full animate-pulse"></div>
            <div className="mt-2 w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-400 mx-auto rounded-full animate-pulse delay-300"></div>
            <p className="text-gray-400 mt-6 text-lg animate-fade-in">Building innovative solutions with modern technologies</p>
          </div>

          {/* Interactive Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`
                  group relative p-8 rounded-2xl border border-white/10 cursor-pointer
                  transform transition-all duration-700 ease-out
                  hover:-translate-y-6 hover:scale-105
                  hover:border-white/30 hover:shadow-[0_25px_80px_rgba(59,130,246,0.25)]
                  backdrop-blur-sm bg-white/5
                  ${hoveredProject === index ? '-translate-y-3 scale-102 border-white/20 shadow-[0_15px_50px_rgba(59,130,246,0.15)]' : ''}
                `}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Animated corner accent */}
                <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500`}></div>
                
                {/* Project Status Badge - Fixed positioning */}
                <div className="absolute top-6 right-6 z-20">
                  <div className={`
                    relative px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm
                    ${project.status === 'Completed' ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 
                      project.status === 'Ongoing' ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' : 
                      'bg-blue-500/20 text-blue-300 border border-blue-500/30'}
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <span className="relative z-10">{project.status}</span>
                  </div>
                </div>

                {/* Project Header */}
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 origin-left`}>
                    {project.title}
                  </h3>
                  <div className={`mt-2 h-0.5 bg-gradient-to-r ${project.gradient} rounded-full transform transition-all duration-500 ${hoveredProject === index ? 'w-full' : 'w-12'}`}></div>
                </div>

                {/* Project Description */}
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300 line-clamp-4">
                  {project.description}
                </p>

                {/* Technologies - Removed glowing effects */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`
                        py-2 px-4 rounded-full text-sm font-medium border
                        transform transition-all duration-300 ease-out cursor-pointer
                        hover:scale-110 hover:-translate-y-1
                        border-white/20 text-white/80 bg-white/5
                        hover:bg-white/15 hover:text-white hover:border-white/40
                        ${hoveredTech === `${index}-${techIndex}` ? 
                          'scale-105 bg-white/20 text-white border-white/50' : ''}
                      `}
                      onMouseEnter={() => setHoveredTech(`${index}-${techIndex}`)}
                      onMouseLeave={() => setHoveredTech(null)}
                      style={{
                        animationDelay: `${techIndex * 50}ms`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group/link flex items-center gap-3 px-6 py-3 rounded-xl
                      bg-gradient-to-r ${project.gradient} bg-opacity-10
                      border border-white/20 text-white font-medium
                      transform transition-all duration-300
                      hover:scale-105 hover:-translate-y-1
                      hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)]
                      hover:bg-opacity-20 hover:border-white/40
                      relative overflow-hidden
                    `}
                  >
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover/link:translate-x-[200%] transition-transform duration-700"></div>
                    
                    <span className="relative z-10">View Project</span>
                    <svg 
                      className="relative z-10 w-4 h-4 transform transition-transform duration-300 group-hover/link:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Progress Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700/50 rounded-b-2xl overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${project.gradient} rounded-b-2xl transform transition-all duration-1000 ease-out`}
                    style={{
                      width: hoveredProject === index ? '100%' : '0%',
                      transform: hoveredProject === index ? 'translateX(0)' : 'translateX(-100%)'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="inline-block p-8 rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5 hover:border-white/30 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(59,130,246,0.2)] hover:-translate-y-2 group">
              <p className="text-gray-300 mb-6 text-lg group-hover:text-white transition-colors duration-300">Want to see more projects?</p>
              <a 
                href="https://github.com/ravin00" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white font-medium hover:scale-105 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(59,130,246,0.5)] relative overflow-hidden group/cta"
              >
                {/* Button animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover/cta:translate-x-[200%] transition-transform duration-700"></div>
                
                <span className="relative z-10">Visit My GitHub</span>
                <svg className="relative z-10 w-5 h-5 group-hover/cta:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};