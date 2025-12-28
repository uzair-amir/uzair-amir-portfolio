"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Medical B2B SaaS Platform",
    description:
      "A comprehensive multi-tenant healthcare platform enabling medical facilities to manage patient records, appointments, and billing with HIPAA compliance.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Redis"],
    category: "saas",
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "GitHub-TimeTracker Sync",
    description:
      "Automated workflow that syncs GitHub commits and PRs with time tracking tools, automatically logging development hours and generating reports.",
    tech: ["Node.js", "GitHub API", "Webhooks", "Redis"],
    category: "automation",
    link: "#",
    featured: true,
  },
  {
    id: 3,
    title: "AI Document Analyzer",
    description:
      "Intelligent system using LLMs to extract, analyze, and summarize information from documents with RAG-based contextual understanding.",
    tech: ["Python", "LangChain", "OpenAI", "Pinecone", "React"],
    category: "ai",
    link: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Real-time Analytics Dashboard",
    description:
      "Interactive dashboard with real-time data visualization, custom reports, and automated alerts for business metrics tracking.",
    tech: ["React", "D3.js", "WebSocket", "Node.js"],
    category: "saas",
    link: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Smart Notification System",
    description:
      "Multi-channel notification platform supporting email, SMS, and push notifications with intelligent scheduling and user preferences.",
    tech: ["Node.js", "Redis", "AWS SNS", "MongoDB"],
    category: "automation",
    link: "#",
    featured: false,
  },
  {
    id: 6,
    title: "AI Chatbot Framework",
    description:
      "Customizable chatbot framework with RAG capabilities for context-aware conversational AI that integrates with any application.",
    tech: ["Python", "LangChain", "Pinecone", "React"],
    category: "ai",
    link: "#",
    featured: false,
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "saas", label: "SaaS" },
  { id: "automation", label: "Automation" },
  { id: "ai", label: "AI / ML" },
];

const categoryColors: Record<string, string> = {
  saas: "from-purple-500 to-violet-600",
  automation: "from-cyan-500 to-blue-600",
  ai: "from-pink-500 to-rose-600",
};

const categoryIcons: Record<string, React.ReactNode> = {
  saas: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  automation: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  ai: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-24 md:py-32 relative bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", paddingTop: "20px", marginBottom: "32px" }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="mt-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p
            className="text-zinc-400"
            style={{
              marginTop: "16px",
              maxWidth: "36rem",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
            }}
          >
            A selection of projects that showcase my expertise and passion for
            building great software
          </p>
        </motion.div>

        {/* Category Filter - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: "10px 20px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: 500,
                transition: "all 0.3s ease",
                background: activeCategory === cat.id
                  ? "linear-gradient(135deg, #9333ea 0%, #3b82f6 100%)"
                  : "rgba(255,255,255,0.05)",
                color: activeCategory === cat.id ? "white" : "#a1a1aa",
                boxShadow: activeCategory === cat.id
                  ? "0 10px 25px -5px rgba(147, 51, 234, 0.25)"
                  : "none",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat.id) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "white";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat.id) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.color = "#a1a1aa";
                }
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div
                  className="relative h-full rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden hover:border-purple-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/5"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  {/* Project Visual */}
                  <div
                    className={`relative h-44 bg-gradient-to-br ${categoryColors[project.category]}/10`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent z-10" />

                    {/* Icon */}
                    <div
                      className={`relative z-20 w-16 h-16 rounded-xl bg-gradient-to-br ${categoryColors[project.category]}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                        transition: "transform 0.5s ease",
                      }}
                    >
                      {categoryIcons[project.category]}
                    </div>

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-3 right-3 z-20">
                        <span
                          style={{
                            padding: "4px 12px",
                            fontSize: "11px",
                            fontWeight: 600,
                            background: "linear-gradient(135deg, #9333ea 0%, #3b82f6 100%)",
                            borderRadius: "9999px",
                            color: "white",
                          }}
                        >
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Decorative circles */}
                    <div className="absolute top-3 left-3 w-20 h-20 border border-white/5 rounded-full" />
                    <div className="absolute bottom-3 right-3 w-12 h-12 border border-white/5 rounded-full" />
                  </div>

                  {/* Content */}
                  <div style={{ padding: "20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 500,
                        color: "#a855f7",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {categories.find((c) => c.id === project.category)?.label}
                    </span>

                    <h3
                      className="group-hover:text-purple-400 transition-colors"
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "white",
                        marginTop: "8px",
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "14px",
                        color: "#71717a",
                        marginTop: "12px",
                        lineHeight: 1.6,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }}>
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          style={{
                            padding: "4px 10px",
                            fontSize: "12px",
                            fontWeight: 500,
                            background: "rgba(255,255,255,0.05)",
                            borderRadius: "6px",
                            color: "#a1a1aa",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span
                          style={{
                            padding: "4px 10px",
                            fontSize: "12px",
                            fontWeight: 500,
                            background: "rgba(255,255,255,0.05)",
                            borderRadius: "6px",
                            color: "#71717a",
                          }}
                        >
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* View link */}
                    <div
                      style={{
                        marginTop: "auto",
                        paddingTop: "16px",
                        borderTop: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <a
                        href={project.link}
                        className="group/link"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#a1a1aa",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#a855f7";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#a1a1aa";
                        }}
                      >
                        View Project
                        <svg
                          className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ textAlign: "center", marginTop: "48px" }}
        >
          <a
            href="https://github.com/uzair-amir"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              fontSize: "14px",
              fontWeight: 500,
              color: "#a1a1aa",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "9999px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white";
              e.currentTarget.style.borderColor = "rgba(147, 51, 234, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#a1a1aa";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
