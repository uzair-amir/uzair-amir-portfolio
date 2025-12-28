"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useMemo } from "react";

// Calculate experience from July 2024
function getExperience() {
  const startDate = new Date(2024, 6, 1); // July 2024 (month is 0-indexed)
  const now = new Date();
  const diffMonths = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());

  if (diffMonths < 12) {
    return `${diffMonths}+ Months`;
  } else {
    const years = Math.floor(diffMonths / 12);
    return `${years}+ Years`;
  }
}

const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast Delivery",
    description: "Agile development with focus on shipping quality features quickly",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Problem Solver",
    description: "Turning complex challenges into elegant, simple solutions",
  },
];

const getStats = () => [
  { value: getExperience(), label: "Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "10+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const stats = useMemo(() => getStats(), []);

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">About Me</span>
          <h2 className="mt-4">
            Crafting Digital <span className="gradient-text">Excellence</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-2xl" />
              <div className="absolute inset-4 rounded-3xl border border-purple-500/20" />
              <div className="absolute inset-8 rounded-2xl bg-gradient-to-br from-[#0a0a1a] to-[#12121f] flex items-center justify-center">
                {/* Code snippet visual */}
                <div className="text-left p-6 font-mono text-sm">
                  <p className="text-zinc-500">{"// About me"}</p>
                  <p className="mt-2">
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">developer</span>{" "}
                    <span className="text-white">=</span> {"{"}
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">name</span>:{" "}
                    <span className="text-green-400">&quot;Uzair Amir&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">role</span>:{" "}
                    <span className="text-green-400">&quot;Full Stack Dev&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">loves</span>:{" "}
                    <span className="text-green-400">&quot;Building Things&quot;</span>,
                  </p>
                  <p>{"}"}</p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: [0.45, 0, 0.55, 1]
                }}
                className="absolute top-12 -right-2 md:-right-6 bg-[#0a0a1a] border border-purple-500/30 rounded-full text-xs md:text-sm font-medium z-10"
                style={{ padding: "8px 16px" }}
              >
                <span className="text-purple-400">Python</span> Expert
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: [0.45, 0, 0.55, 1]
                }}
                className="absolute bottom-12 -left-2 md:-left-6 bg-[#0a0a1a] border border-blue-500/30 rounded-full text-xs md:text-sm font-medium z-10"
                style={{ padding: "8px 16px" }}
              >
                <span className="text-blue-400">AI</span> Powered
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-6">
              I&apos;m a passionate software engineer who transforms ideas into
              powerful digital solutions. With expertise in full-stack
              development, AI integration, and automation, I build applications
              that make a real difference.
            </p>
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-6">
              From{" "}
              <span className="text-white font-medium">
                B2B SaaS platforms
              </span>{" "}
              to{" "}
              <span className="text-white font-medium">
                healthcare applications
              </span>
              , I&apos;ve helped businesses streamline operations and deliver
              exceptional user experiences. My work bridges the gap between
              complex technical requirements and elegant, user-friendly
              solutions.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:border-purple-500/20 transition-all group"
                  style={{ padding: "16px 20px" }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors">{item.icon}</div>
                    <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ marginTop: "8px" }}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
