"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "AI & ML Engineer",
  "Automation Architect",
  "SaaS Builder",
  "Backend Developer",
  "DevOps Enthusiast",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      {/* Content - Properly Centered */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-full max-w-4xl mx-auto px-8 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <span className="section-label">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for Work
            </span>
          </motion.div>

          <motion.h1
            className="mt-10 mb-8 font-bold"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.2 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Building{" "}
            <span className="gradient-text-animated">Digital Experiences</span>
            <br />
            That Matter
          </motion.h1>

          <motion.div
            className="h-14 mb-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-2xl md:text-3xl text-zinc-400 font-mono">
              {displayText}
              <span className="animate-pulse text-purple-500">|</span>
            </span>
          </motion.div>

          <motion.p
            className="text-base md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
            style={{ marginBottom: "24px", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I craft scalable full-stack applications, intelligent AI systems,
            and seamless automation solutions. Specializing in B2B SaaS and
            healthcare technology.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
            style={{ marginBottom: "32px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm md:text-base font-semibold text-white rounded-full relative overflow-hidden group"
              style={{
                padding: "10px 20px",
                background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #06b6d4 100%)",
              }}
            >
              <span className="relative z-10">View My Work</span>
              <svg
                className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm md:text-base font-semibold text-white border-2 border-zinc-700 rounded-full hover:border-purple-500 hover:bg-purple-500/10 transition-all"
              style={{ padding: "10px 20px" }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Tech stack icons */}
          <motion.div
            style={{ paddingTop: "20px", marginTop: "16px" }}
            className="border-t border-zinc-800/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p style={{ marginBottom: "16px" }} className="text-sm text-zinc-500 uppercase tracking-widest">
              Tech Stack
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-zinc-500">
              {[
                { name: "Python", icon: "🐍" },
                { name: "JavaScript", icon: "JS" },
                { name: "React", icon: "⚛️" },
                { name: "Django", icon: "🎸" },
                { name: "FastAPI", icon: "⚡" },
                { name: "TensorFlow", icon: "🧠" },
                { name: "Docker", icon: "🐳" },
                { name: "AWS", icon: "☁️" },
                { name: "PostgreSQL", icon: "🐘" },
                { name: "Redis", icon: "🔴" },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex items-center text-xs md:text-sm bg-white/5 rounded-full hover:bg-white/10 hover:text-zinc-300 transition-colors cursor-default"
                  style={{ padding: "8px 14px", gap: "6px", whiteSpace: "nowrap" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.03 }}
                >
                  <span>{tech.icon}</span>
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
