import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const projects = [
        {
            title: "EduMind — Learning Analytics Platform",
            period: "2025 - Present",
            category: "Cloud",
            problem: "Academic teams lacked clear early-warning visibility for student risk.",
            solution: "Built an explainable analytics workflow with live behavior tracking and transparent outputs.",
            impact: "Intervention readiness improved with clearer learner trend visibility.",
            metrics: ["Intervention lead time ↓", "Insight transparency ↑", "Decision confidence ↑"],
            stack: ["React", "FastAPI", "Scikit-learn", "PostgreSQL", "TimescaleDB", "GKE", "Terraform"],
            github: "https://github.com/VoidEngineers/EduMind",
            demo: "",
            featured: true,
        },
        {
            title: "SkillHive — Social Learning Platform",
            period: "2025 - Present",
            category: "Web",
            problem: "Learners needed a cleaner way to plan and collaborate in one place.",
            solution: "Designed a community-first platform with modular service flows and structured engagement.",
            impact: "Peer collaboration quality and consistency improved.",
            metrics: ["Engagement flow clarity ↑", "Coordination friction ↓", "Reuse of service modules ↑"],
            stack: ["Spring Boot", "React", "Tailwind", "Redux", "PostgreSQL"],
            github: "https://github.com/VoidEngineers/SkillHive-POC",
            demo: "",
            featured: true,
        },
        {
            title: "Self-Service Portal — Cognite F25e",
            period: "08/2024 - 04/2025",
            category: "Cloud",
            summary:
                "Enterprise self-service portal for resource requests and monitoring with automated delivery workflows.",
            impact: "Reduced manual operations by standardizing request and release paths.",
            stack: ["React", "TypeScript", "FastAPI", "Docker", "Kubernetes", "Argo CD"],
            github: "#",
            demo: "",
            featured: false,
        },
        {
            title: "ExpenseTracker — Microservices",
            period: "05/2025 - 06/2025",
            category: "Backend",
            summary: "Financial management platform with modular .NET services for budgeting and analytics.",
            impact: "Improved maintainability through service-oriented architecture.",
            stack: [".NET", "PostgreSQL", "React", "Docker", "Kubernetes", "Prometheus"],
            github: "https://github.com/ravin00/ExpenseTracker",
            featured: false,
        },
        {
            title: "Cafe Management System",
            period: "04/2024 - 10/2025",
            category: "Web",
            summary: "End-to-end cafe operations and order management platform with CI/GitOps support.",
            impact: "Enabled faster and more predictable releases.",
            stack: ["React", "TypeScript", "Redux", "Docker", "Argo CD"],
            github: "https://github.com/ravin00/Cafe-Management-System",
            featured: false,
        },
        {
            title: "Time Sync — Academic Scheduler",
            period: "02/2025 - 05/2025",
            category: "Backend",
            summary: "Scheduling platform with real-time collaboration and conflict detection.",
            impact: "Improved timetable reliability and planning visibility.",
            stack: ["Spring Boot", "React", "MongoDB", "Kubernetes"],
            github: "https://github.com/VoidEngineers/Academic_Scheduler",
            featured: false,
        },
    ];

    const filterChips = ["All", "Web", "Backend", "Cloud"];

    const featuredProjects = projects.filter((project) => project.featured);
    const projectGrid = useMemo(() => {
        const base = projects.filter((project) => !project.featured);
        if (activeFilter === "All") return base;
        return base.filter((project) => project.category === activeFilter);
    }, [activeFilter]);

    return (
        <section id="projects" className="py-24 relative">
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <p className="soft-kicker mb-3">Projects</p>
                        <h2 className="font-heading text-5xl md:text-6xl text-gray-800 mb-4">Selected Case Studies</h2>
                        <p className="font-body text-lg text-gray-600 max-w-3xl mx-auto">
                            Product-focused builds presented with problem, solution, and measurable impact.
                        </p>
                    </div>

                    <div className="space-y-8 mb-14">
                        {featuredProjects.map((project, index) => (
                            <motion.article
                                key={project.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                                className="cartoon-card bg-white p-6 md:p-8"
                            >
                                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-center">
                                    <div>
                                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                            <h3 className="font-heading text-3xl text-gray-800 leading-tight">{project.title}</h3>
                                            <span className="text-sm text-gray-500">{project.period}</span>
                                        </div>

                                        <div className="space-y-2 mb-4">
                                            <p className="text-sm text-gray-700">
                                                <span className="font-semibold text-purple-600">Problem:</span> {project.problem}
                                            </p>
                                            <p className="text-sm text-gray-700">
                                                <span className="font-semibold text-blue-600">Solution:</span> {project.solution}
                                            </p>
                                            <p className="text-sm text-gray-700">
                                                <span className="font-semibold text-pink-600">Impact:</span> {project.impact}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.stack.map((tech) => (
                                                <span key={tech} className="skill-badge px-3 py-1 text-sm text-gray-700">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="skill-badge px-3 py-2 text-sm text-gray-700 flex items-center gap-2"
                                            >
                                                <FaGithub /> GitHub
                                            </a>
                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="skill-badge px-3 py-2 text-sm text-gray-700 flex items-center gap-2"
                                                >
                                                    <FaArrowUpRightFromSquare /> Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className="rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 p-6">
                                        <p className="text-xs uppercase tracking-[0.16em] text-gray-500 mb-3">Outcome Signals</p>
                                        <div className="space-y-2">
                                            {project.metrics.map((metric) => (
                                                <p key={metric} className="text-sm text-gray-700">• {metric}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {filterChips.map((chip) => (
                            <button
                                key={chip}
                                type="button"
                                onClick={() => setActiveFilter(chip)}
                                className={`px-4 py-2 rounded-full text-sm border transition ${
                                    activeFilter === chip
                                        ? "bg-purple-100 border-purple-200 text-purple-700"
                                        : "bg-white border-gray-200 text-gray-600 hover:border-purple-200"
                                }`}
                            >
                                {chip}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {projectGrid.map((project, index) => (
                            <motion.article
                                key={project.title}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="cartoon-card p-6 bg-white"
                            >
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div>
                                        <h3 className="font-heading text-2xl text-gray-800">{project.title}</h3>
                                        <p className="text-sm text-gray-500">{project.period}</p>
                                    </div>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-purple-600"
                                    >
                                        <FaGithub className="text-lg" />
                                    </a>
                                </div>

                                <p className="text-sm text-gray-700 leading-relaxed mb-3">{project.summary}</p>
                                <p className="text-sm text-gray-700 mb-4">
                                    <span className="font-semibold text-purple-600">Impact:</span> {project.impact}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span key={tech} className="skill-badge px-2.5 py-1 text-xs text-gray-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <a
                            href="https://github.com/ravin00"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-funky inline-flex items-center gap-2 px-8 py-4 text-lg"
                        >
                            <FaGithub className="text-2xl" />
                            View All Repositories
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
