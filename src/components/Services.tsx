"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Full Stack Development",
    description:
      "Building complete web applications from frontend to backend with modern technologies and best practices.",
    features: [
      "React & Next.js",
      "RESTful APIs",
      "Database Design",
      "Cloud Deployment",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    gradient: "from-purple-500/20 to-purple-500/5",
    borderColor: "border-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    title: "AI & ML Integration",
    description:
      "Integrating artificial intelligence capabilities into applications, from chatbots to intelligent automation.",
    features: [
      "LLM Integration",
      "RAG Systems",
      "Custom AI Solutions",
      "Intelligent Automation",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    title: "Automation Solutions",
    description:
      "Creating intelligent workflows that save time and reduce errors by connecting systems seamlessly.",
    features: [
      "Workflow Automation",
      "System Integrations",
      "CI/CD Pipelines",
      "Custom Tools",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "from-cyan-500/20 to-cyan-500/5",
    borderColor: "border-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    title: "Healthcare & SaaS",
    description:
      "Specialized in HIPAA-compliant healthcare solutions and multi-tenant B2B SaaS platforms.",
    features: [
      "HIPAA Compliance",
      "Multi-tenant Apps",
      "Enterprise Security",
      "EHR Integrations",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    gradient: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "border-emerald-500/20",
    iconColor: "text-emerald-400",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="container relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ paddingTop: "20px", marginBottom: "56px" }}
        >
          <span className="section-label">Services</span>
          <h2 className="mt-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-zinc-400 max-w-xl" style={{ marginTop: "16px", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            Comprehensive solutions tailored to bring your ideas to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`group relative rounded-2xl bg-gradient-to-br ${service.gradient} border ${service.borderColor} hover:border-opacity-50 transition-all duration-300`}
              style={{ padding: "28px 32px" }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 ${service.iconColor} mb-5`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs text-zinc-500 bg-white/5 rounded-full"
                    style={{ padding: "6px 12px" }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
