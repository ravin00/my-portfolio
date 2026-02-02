import { FaBrain, FaCalendarAlt, FaCloud, FaCoffee, FaGithub, FaMoneyBillWave, FaReact, FaUsers } from "react-icons/fa";
import { SiArgo, SiDocker, SiDotnet, SiFastapi, SiGooglecloud, SiGrafana, SiKubernetes, SiMongodb, SiPostgresql, SiPrometheus, SiRedux, SiScikitlearn, SiSpringboot, SiTailwindcss, SiTerraform, SiTimescale, SiTypescript } from "react-icons/si";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    const projects = [
        {
            title: "EduMind - Learning Analytics Platform",
            tagline: "Because AI shouldn't be a black box 🧠",
            period: "2025 - Present",
            description: "Cloud-native learning analytics platform using Explainable AI (XAI) to predict student outcomes before failure occurs. Features real-time behavioral analysis, VARK-based learning style recognition, and transparent AI reasoning. Built with microservices architecture on GCP/GKE with LGTM observability stack.",
            tags: [
                { name: "React", icon: FaReact, color: "text-cyan-500" },
                { name: "FastAPI", icon: SiFastapi, color: "text-teal-500" },
                { name: "Scikit-learn", icon: SiScikitlearn, color: "text-orange-500" },
                { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
                { name: "TimescaleDB", icon: SiTimescale, color: "text-yellow-600" },
                { name: "GKE", icon: SiGooglecloud, color: "text-blue-500" },
                { name: "Terraform", icon: SiTerraform, color: "text-purple-600" },
                { name: "Grafana", icon: SiGrafana, color: "text-orange-500" },
            ],
            github: "https://github.com/VoidEngineers/EduMind",
            color: "from-indigo-500 to-purple-600",
            icon: FaBrain,
            featured: true
        },
        {
            title: "SkillHive - Social Learning Platform",
            tagline: "Connect, Learn, Grow together 🐝",
            period: "2025 - Present",
            description: "A dynamic social platform connecting users to offer services, create structured learning plans, and engage through likes and comments. Features real-time collaboration, service marketplace, and community-driven learning paths.",
            tags: [
                { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
                { name: "React", icon: FaReact, color: "text-cyan-500" },
                { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
                { name: "Redux", icon: SiRedux, color: "text-purple-500" },
                { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
            ],
            github: "https://github.com/VoidEngineers/SkillHive-POC",
            color: "from-amber-400 to-orange-500",
            icon: FaUsers,
            featured: true
        },
        {
            title: "Self-Service Portal — Cognite F25e Platform",
            tagline: "Automating the boring stuff like a boss 🤖",
            period: "08/2024 - 04/2025",
            description: "Designed and implemented a responsive self-service portal enabling efficient resource requests, configuration, and monitoring for Cognite's F25e platform. Built frontend in React + TypeScript and backend APIs in FastAPI. Automated CI/CD pipelines with GitHub Actions.",
            tags: [
                { name: "React", icon: FaReact, color: "text-cyan-500" },
                { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
                { name: "FastAPI", icon: SiFastapi, color: "text-teal-500" },
                { name: "Docker", icon: SiDocker, color: "text-blue-400" },
                { name: "K8s", icon: SiKubernetes, color: "text-blue-500" },
                { name: "ArgoCD", icon: SiArgo, color: "text-orange-500" },
            ],
            github: "#",
            color: "from-purple-400 to-indigo-500",
            icon: FaCloud,
            featured: true
        },
        {
            title: "ExpenseTracker - Full-Stack Financial Manager",
            tagline: "Where your money goes to be tracked 💸",
            period: "05/2025 - 06/2025",
            description: "Architected a microservices-based expense tracking platform with 6 services using .NET 9, handling budgets, expenses, and analytics with real-time monitoring. Built secure RESTful APIs with JWT authentication and 90%+ test coverage.",
            tags: [
                { name: ".NET 9", icon: SiDotnet, color: "text-purple-600" },
                { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
                { name: "React", icon: FaReact, color: "text-cyan-500" },
                { name: "Docker", icon: SiDocker, color: "text-blue-400" },
                { name: "K8s", icon: SiKubernetes, color: "text-blue-500" },
                { name: "Prometheus", icon: SiPrometheus, color: "text-red-500" },
            ],
            github: "https://github.com/ravin00/ExpenseTracker",
            color: "from-green-400 to-teal-500",
            icon: FaMoneyBillWave,
            featured: false
        },
        {
            title: "Online Cafe Management System",
            tagline: "git push --force your coffee orders ☕",
            period: "04/2024 - 10/2025",
            description: "Full-stack web application for menu management and order processing. Migrated from monolith to microservices with Dockerized deployments, Nginx, GitHub Actions CI, and Argo CD GitOps.",
            tags: [
                { name: "React", icon: FaReact, color: "text-cyan-500" },
                { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
                { name: "Redux", icon: SiRedux, color: "text-purple-500" },
                { name: "Docker", icon: SiDocker, color: "text-blue-400" },
                { name: "ArgoCD", icon: SiArgo, color: "text-orange-500" },
            ],
            github: "https://github.com/ravin00/Cafe-Management-System",
            color: "from-amber-400 to-orange-500",
            icon: FaCoffee,
            featured: false
        },
        {
            title: "Time Sync - Academic Scheduler",
            tagline: "Because professors can't git merge their schedules 📅",
            period: "02/2025 - 05/2025",
            description: "Scheduling platform for academic planning with real-time collaboration and conflict detection. Built with Spring Boot microservices and React UI, deployed on Kubernetes.",
            tags: [
                { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
                { name: "React", icon: FaReact, color: "text-cyan-500" },
                { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
                { name: "K8s", icon: SiKubernetes, color: "text-blue-500" },
            ],
            github: "https://github.com/VoidEngineers/Academic_Scheduler",
            color: "from-blue-400 to-indigo-500",
            icon: FaCalendarAlt,
            featured: false
        },
    ];

    const devJokes = [
        "My code doesn't have bugs, it has random features! 🐛",
        "It works on localhost, ship it! 🚢",
        "99 little bugs in the code... take one down, patch it around... 127 bugs in the code 😅",
    ];

    return (
        <section id="projects" className="py-24 relative">
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-5xl md:text-6xl text-gray-800 cartoon-text mb-4">
                            MY PROJECTS
                        </h2>
                        <p className="font-funky text-xl text-gray-700 mb-4">
                            Things I built instead of sleeping 🌙
                        </p>
                        <div className="joke-card inline-block">
                            <p className="font-body text-gray-800">
                                "{devJokes[Math.floor(Math.random() * devJokes.length)]}"
                            </p>
                        </div>
                    </div>

                    {/* Featured Projects */}
                    <div className="space-y-8 mb-12">
                        {projects.filter(p => p.featured).map((project, index) => (
                            <div key={index} className="cartoon-card overflow-hidden group">
                                <div className={`h-3 bg-gradient-to-r ${project.color}`}></div>
                                <div className="p-6 md:p-8">
                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex flex-wrap justify-between items-start mb-2">
                                            <div>
                                                <h3 className="font-heading text-2xl text-gray-800">{project.title}</h3>
                                                {project.period && (
                                                    <span className="font-body text-sm text-gray-500">{project.period}</span>
                                                )}
                                            </div>
                                            <div className="flex gap-2">
                                                <a href={project.github} target="_blank" rel="noopener noreferrer"
                                                    className="cartoon-card w-10 h-10 flex items-center justify-center hover:bg-gray-100">
                                                    <FaGithub className="text-xl" />
                                                </a>
                                            </div>
                                        </div>

                                        <p className="font-body text-purple-600 font-bold mb-3">{project.tagline}</p>
                                        <p className="font-body text-gray-700 mb-4">{project.description}</p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className="skill-badge px-3 py-1 flex items-center gap-1 text-sm">
                                                    <tag.icon className={tag.color} />
                                                    <span className="font-funky">{tag.name}</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Other Projects Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {projects.filter(p => !p.featured).map((project, index) => (
                            <div key={index} className="cartoon-card overflow-hidden group">
                                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="flex-1">
                                            <h3 className="font-heading text-xl text-gray-800">{project.title}</h3>
                                            <p className="font-body text-purple-600 text-sm font-bold">{project.tagline}</p>
                                        </div>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-gray-800 transition-colors">
                                            <FaGithub className="text-xl" />
                                        </a>
                                    </div>
                                    <p className="font-body text-gray-700 text-sm mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="skill-badge px-2 py-1 flex items-center gap-1 text-xs">
                                                <tag.icon className={tag.color} />
                                                <span className="font-funky">{tag.name}</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* GitHub CTA */}
                    <div className="text-center">
                        <div className="cartoon-card-colored inline-block p-8">
                            <p className="font-funky text-xl text-white mb-4">
                                Want to see more? Check out my GitHub! 🚀
                            </p>
                            <a
                                href="https://github.com/ravin00"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-funky inline-flex items-center gap-2 px-8 py-4 text-lg"
                            >
                                <FaGithub className="text-2xl" />
                                View All Repos
                            </a>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
