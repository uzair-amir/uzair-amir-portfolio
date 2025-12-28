"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Current Company",
    period: "2023 - Present",
    type: "Full-time",
    description:
      "Leading development of B2B SaaS products and AI integrations. Architecting multi-tenant applications for the healthcare industry.",
    achievements: [
      "Built scalable multi-tenant medical SaaS platform serving 50+ clinics",
      "Implemented AI-powered document processing reducing manual work by 70%",
      "Designed automation workflows saving 20+ hours/week for enterprise clients",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "OpenAI", "AWS"],
  },
  {
    title: "Full Stack Developer",
    company: "Previous Company",
    period: "2022 - 2023",
    type: "Full-time",
    description:
      "Developed and maintained web applications with focus on performance optimization and user experience.",
    achievements: [
      "Created GitHub-TimeTracker integration automating time logging",
      "Reduced API response times by 60% through query optimization",
      "Mentored 3 junior developers in React and Node.js best practices",
    ],
    tech: ["React", "Node.js", "MongoDB", "Redis", "Docker"],
  },
  {
    title: "Junior Developer",
    company: "Startup",
    period: "2021 - 2022",
    type: "Full-time",
    description:
      "Started professional journey building web applications and learning best practices in a fast-paced startup environment.",
    achievements: [
      "Contributed to core product development from MVP to launch",
      "Built internal tools improving team productivity by 40%",
      "Learned agile methodologies and CI/CD practices",
    ],
    tech: ["React", "Express", "MySQL", "Git"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] bg-gradient-to-l from-purple-500/5 to-transparent rounded-full blur-3xl" />

      <div className="container relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", paddingTop: "20px", marginBottom: "48px" }}
        >
          <span className="section-label">Experience</span>
          <h2 className="mt-4">
            My <span className="gradient-text">Journey</span>
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
            A timeline of my professional growth and key achievements
          </p>
        </motion.div>

        {/* Experience Cards - Vertical Stack */}
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{ marginBottom: index < experiences.length - 1 ? "24px" : "0" }}
            >
              <div
                className="group"
                style={{
                  position: "relative",
                  padding: "28px 32px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(147, 51, 234, 0.3)";
                  e.currentTarget.style.boxShadow = "0 20px 40px -20px rgba(147, 51, 234, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Timeline indicator */}
                <div
                  style={{
                    position: "absolute",
                    left: "-12px",
                    top: "32px",
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #9333ea 0%, #3b82f6 100%)",
                    border: "4px solid #030014",
                    zIndex: 10,
                  }}
                />

                {/* Header Row */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "16px",
                    marginBottom: "16px",
                  }}
                >
                  <div>
                    {/* Period Badge */}
                    <span
                      style={{
                        display: "inline-block",
                        padding: "6px 14px",
                        fontSize: "12px",
                        fontWeight: 500,
                        background: "rgba(147, 51, 234, 0.1)",
                        color: "#a855f7",
                        borderRadius: "9999px",
                        border: "1px solid rgba(147, 51, 234, 0.2)",
                        marginBottom: "12px",
                      }}
                    >
                      {exp.period}
                    </span>

                    {/* Title */}
                    <h3
                      className="group-hover:text-purple-400 transition-colors"
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "white",
                        marginBottom: "4px",
                      }}
                    >
                      {exp.title}
                    </h3>

                    {/* Company */}
                    <p style={{ fontSize: "15px", fontWeight: 500, color: "#60a5fa" }}>
                      {exp.company}
                    </p>
                  </div>

                  {/* Type Badge */}
                  <span
                    style={{
                      padding: "6px 12px",
                      fontSize: "12px",
                      background: "rgba(255,255,255,0.05)",
                      color: "#a1a1aa",
                      borderRadius: "9999px",
                    }}
                  >
                    {exp.type}
                  </span>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "#71717a",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                  }}
                >
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        fontSize: "14px",
                      }}
                    >
                      <svg
                        style={{
                          width: "18px",
                          height: "18px",
                          marginTop: "2px",
                          color: "#a855f7",
                          flexShrink: 0,
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span style={{ color: "#a1a1aa" }}>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    paddingTop: "16px",
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: "5px 12px",
                        fontSize: "12px",
                        fontWeight: 500,
                        background: "rgba(255,255,255,0.05)",
                        color: "#a1a1aa",
                        borderRadius: "6px",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
