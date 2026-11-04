import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import ravinPhoto from "../../assets/WhatsApp Image 2026-02-02 at 03.44.56.jpeg";
import { RevealOnScroll } from "../RevealOnScroll";

const experiences = [
  {
    role: "Systems & DevOps Engineer Intern",
    company: "Vizuamatix",
    period: "Oct 2026 - Present",
    type: "Full-time",
    groups: [
      {
        title: "CI/CD & Automation",
        items: [
          "Designed and implemented CI/CD pipelines using GitLab CI/CD to streamline application build and deployment workflows.",
        ],
      },
      {
        title: "Linux & System Administration",
        items: [
          "Created and configured systemd service files to manage application services in Linux environments.",
          "Supported Linux system administration and application operations on Red Hat servers.",
        ],
      },
      {
        title: "Kubernetes & Deployments",
        items: [
          "Managed Kubernetes resources, including pods, services, and deployments, to support application operations and troubleshooting.",
          "Assisted with production deployments and application release activities.",
        ],
      },
      {
        title: "Observability & Monitoring",
        items: [
          "Worked with the ELK stack (Elasticsearch, Logstash, Kibana) for centralised logging and log analysis.",
          "Used Grafana dashboards for infrastructure and application monitoring.",
        ],
      },
      {
        title: "Technical Support & Infrastructure",
        items: [
          "Responded to technical support tickets, investigated issues, and assisted with troubleshooting and resolution.",
          "Assisted with server room operations and infrastructure-related tasks.",
          "Contributed to infrastructure and deployment activities across telecommunications and fintech projects.",
        ],
      },
    ],
    stack: [
      "GitLab CI/CD", "Kubernetes", "Docker", "Linux", "Red Hat", "Nginx",
      "ELK Stack", "Grafana", "systemd", "Minikube", "kubectl", "SonarQube",
      "Bash", "Python",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Creative Software",
    period: "Aug 2024 - Apr 2025",
    type: "Full-time - Hybrid",
    groups: [
      {
        title: "Frontend Development",
        items: [
          "Designed and implemented the frontend for a self-service portal in React, building reusable, scalable components aligned with an internal design system.",
        ],
      },
      {
        title: "UX & Design Collaboration",
        items: [
          "Worked closely with designers and stakeholders in Figma to create wireframes, prototypes and user flows.",
        ],
      },
      {
        title: "Backend Development",
        items: [
          "Contributed to backend services with FastAPI - developing APIs and optimising workflows for seamless integration with the frontend.",
        ],
      },
      {
        title: "DevOps Exposure",
        items: [
          "Assisted the DevOps team and participated in KT sessions to build a strong understanding of modern cloud-native workflows.",
          "Assisted with GitOps workflows using ArgoCD and Terraform for automated, version-controlled deployments.",
          "Contributed to CI/CD pipelines with GitHub Actions to improve release reliability.",
          "Supported cloud infrastructure tasks on AWS and GCP, including Kubernetes deployments via GitOps pipelines.",
          "Worked with Docker, Kubernetes and Helm charts to support scalable, containerised deployments.",
        ],
      },
    ],
    stack: [
      "React", "FastAPI", "Figma", "GitHub Actions", "ArgoCD", "Terraform",
      "Docker", "Kubernetes", "AWS", "GCP", "Helm", "Buildpacks", "Python",
    ],
  },
  {
    role: "External Junior Software Engineer",
    company: "Cognite - Oslo, Norway",
    period: "Aug 2024 - Apr 2025",
    type: "Remote - via Creative Software",
    highlights: [
      "Engaged externally through Creative Software as part of a placement with Cognite in Oslo, Norway.",
      "Contributed to the development and enhancement of Cognite's products in industrial data management and analytics.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions.",
    ],
  },
  {
    role: "Developer",
    company: "MS Club of SLIIT",
    period: "Jun 2024 - Present",
    type: "Community",
    highlights: [
      "Full-stack development on community projects using Next.js.",
      "Knowledge sharing, mentoring and active contribution to events.",
    ],
  },
];

const education = {
  degree: "BSc (Hons) in Information Technology",
  school: "SLIIT - Sri Lanka Institute of Information Technology",
  period: "2022 - 2026",
  specialization: "Specialising in Information Technology",
};

const blogs = [
  { title: "A Cure for the React useState Hell", url: "https://medium.com/@ravinbandara76/a-cure-for-the-react-usestate-hell-c5ad8ae62d83" },
  { title: "The Micro-Services Journey: .NET, Docker, Kubernetes, API Gateways & Observability", url: "https://medium.com/@ravinbandara76/the-micro-services-journey-net-docker-kubernetes-api-gateways-observability-made-simple-db8ba5a82d2d" },
  { title: "Building Microservices with .NET, Docker and Kubernetes", url: "https://medium.com/@ravinbandara76/building-microservices-with-net-docker-and-kubernetes-946d44398af7" },
  { title: "From Zero to Kubernetes in Production", url: "https://medium.com/@ravinbandara76/from-zero-to-kubernetes-in-production-step-by-step-guide-for-setting-up-a-secure-observable-b0bc9f99929b" },
  { title: "GitOps: The DevOps Evolution You Shouldn't Ignore", url: "https://medium.com/@ravinbandara76/gitops-the-devops-evolution-you-shouldnt-ignore-ee2843e6b80b" },
  { title: "Mastering Debounce in React", url: "https://medium.com/@ravinbandara76/mastering-debounce-in-react-optimize-performance-like-a-pro-e1e28d06001d" },
  { title: "React Hydration: A Deep Dive with Practical Examples", url: "https://medium.com/@ravinbandara76/react-hydration-a-deep-dive-with-practical-examples-d9bbc512ff03" },
];

const techStack = {
  "Languages": ["JavaScript", "TypeScript", "Python", "C#", "Bash"],
  "Backend": ["FastAPI", "ASP.NET Core", "Spring Boot", "REST APIs"],
  "Frontend": ["React", "Next.js", "Tailwind CSS", "Redux"],
  "Infrastructure & DevOps": [
    "AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Helm",
    "GitHub Actions", "GitLab CI/CD", "ArgoCD", "Buildpacks",
    "Linux", "Nginx", "systemd",
  ],
  "Monitoring & Observability": [
    "Prometheus", "Grafana", "ELK Stack", "OpenTelemetry",
  ],
  "Databases & Tools": [
    "PostgreSQL", "MongoDB", "SQL Server", "Git", "SonarQube", "Maven",
  ],
};

const exploring = [
  "Kubernetes Internals",
  "Platform Engineering",
  "Site Reliability Engineering",
  "Infrastructure as Code",
  "Observability at Scale",
  "Distributed Systems",
];

export const About = () => {
  return (
    <>
      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 bg-[var(--white-bg)]">
        <div className="container-wide">
          <RevealOnScroll>
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
              <div>
                <p className="section-label mb-4">About</p>
                <h2 className="font-display text-4xl md:text-5xl tracking-tight text-[var(--text)] uppercase leading-[1.05] mb-6">
                  DevOps engineer{" "}
                  <span className="text-[var(--red)]">who can also build the app.</span>
                </h2>
                <div className="space-y-4 text-[var(--text-dim)] leading-relaxed">
                  <p>
                    I'm a DevOps Engineer with a full-stack development background.
                    I work with Kubernetes, Docker, Terraform and AWS to build and
                    operate cloud-native infrastructure.
                  </p>
                  <p>
                    My day-to-day is CI/CD pipelines with GitHub Actions and GitLab
                    CI/CD, GitOps workflows through ArgoCD, and containerised
                    deployments on Kubernetes. I also build the applications that
                    run on this infrastructure - React frontends, FastAPI and
                    ASP.NET Core backends, backed by PostgreSQL or MongoDB.
                  </p>
                  <p>
                    I care about reliability, automation and keeping things simple.
                    If it can be a pipeline, it shouldn't be a manual step.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden border-2 border-[var(--red)] aspect-[4/5] max-w-md mx-auto">
                  <img
                    src={ravinPhoto}
                    alt="Ravin Bandara"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[var(--red)] px-4 py-3 flex items-center justify-between">
                    <span className="font-pixel text-[10px] text-[var(--white)] uppercase tracking-wider">
                      Colombo, Sri Lanka
                    </span>
                    <span className="font-pixel text-[10px] text-[var(--green)] uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)]" />
                      Open to work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 md:py-32 bg-[var(--white)]">
        <div className="container-wide">
          <RevealOnScroll>
            <p className="section-label mb-4">Experience</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-[var(--text)] uppercase leading-[1.05] mb-16">
              Where I've <span className="text-[var(--red)]">worked</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll stagger>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.role + exp.company}
                  data-stagger-item
                  className="bg-[var(--white)] border border-[var(--gray-border)] p-6 md:p-8 grid md:grid-cols-[200px_1fr] gap-6 hover:border-[var(--red)] transition-colors"
                >
                  <div>
                    <p className="font-pixel text-[11px] text-[var(--text-muted)] uppercase tracking-wider mb-1">
                      {exp.period}
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">{exp.type}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text)]">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-[var(--red)] font-semibold mb-4">
                      {exp.company}
                    </p>

                    {exp.groups ? (
                      <div className="space-y-5">
                        {exp.groups.map((group) => (
                          <div key={group.title}>
                            <p className="font-pixel text-[10px] uppercase tracking-wider text-[var(--red)] font-semibold mb-2">
                              {group.title}
                            </p>
                            <ul className="space-y-1.5">
                              {group.items.map((item, i) => (
                                <li
                                  key={i}
                                  className="text-sm text-[var(--text-dim)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-px before:bg-[var(--red)]"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-1.5">
                        {exp.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="text-sm text-[var(--text-dim)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-px before:bg-[var(--red)]"
                          >
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.stack && (
                      <div className="mt-5 pt-5 border-t border-[var(--gray-border)]">
                        <div className="flex flex-wrap gap-1.5">
                          {exp.stack.map((tech) => (
                            <span
                              key={tech}
                              className="font-pixel text-[10px] text-[var(--text-muted)] border border-[var(--gray-border)] px-2 py-1 uppercase tracking-wider"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Education */}
          <RevealOnScroll>
            <div className="mt-16">
              <p className="section-label mb-4">Education</p>
              <div className="bg-[var(--white)] border border-[var(--gray-border)] p-6 md:p-8 grid md:grid-cols-[200px_1fr] gap-6">
                <div>
                  <p className="font-pixel text-[11px] text-[var(--text-muted)] uppercase tracking-wider">
                    {education.period}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text)]">
                    {education.degree}
                  </h3>
                  <p className="text-sm text-[var(--red)] font-semibold mb-1">
                    {education.school}
                  </p>
                  <p className="text-sm text-[var(--text-muted)]">
                    {education.specialization}
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-24 md:py-32 bg-[var(--white-bg)]">
        <div className="container-wide">
          <RevealOnScroll>
            <p className="section-label mb-4">Stack</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-[var(--text)] uppercase leading-[1.05] mb-16">
              Tools I <span className="text-[var(--red)]">build with</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll stagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(techStack).map(([category, items]) => (
                <div
                  key={category}
                  data-stagger-item
                  className="border border-[var(--gray-border)] p-6 hover:border-[var(--red)] transition-colors"
                >
                  <p className="font-pixel text-[10px] text-[var(--red)] uppercase tracking-wider mb-4 font-semibold">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs text-[var(--text-dim)] border border-[var(--gray-border)] px-2.5 py-1.5 hover:text-[var(--red)] hover:border-[var(--red)]/40 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Currently Exploring */}
          <RevealOnScroll>
            <div className="mt-16 border-t border-[var(--gray-border)] pt-12">
              <p className="section-label mb-6">Currently Exploring</p>
              <div className="flex flex-wrap gap-3">
                {exploring.map((item) => (
                  <span
                    key={item}
                    className="text-sm font-semibold text-[var(--white)] bg-[var(--green)] px-4 py-2 uppercase tracking-wider"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-24 md:py-32 bg-[var(--red)]">
        <div className="container-wide">
          <RevealOnScroll>
            <p className="section-label mb-4" style={{ color: "var(--green)" }}>Writing</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-[var(--white)] uppercase leading-[1.05] mb-12">
              Blog <span className="text-[var(--green)]">posts</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll stagger>
            <div className="space-y-0 border-t border-[var(--white)]/20">
              {blogs.map((blog) => (
                <a
                  key={blog.url}
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-stagger-item
                  className="flex items-center justify-between gap-4 py-5 border-b border-[var(--white)]/20 group"
                >
                  <span className="text-sm md:text-base font-medium text-[var(--white)] group-hover:text-[var(--green)] transition-colors">
                    {blog.title}
                  </span>
                  <FaArrowUpRightFromSquare className="text-xs text-[var(--white)]/40 group-hover:text-[var(--green)] transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
};
