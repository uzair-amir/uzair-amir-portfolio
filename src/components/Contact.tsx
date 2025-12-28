"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const contactMethods = [
  {
    icon: (
      <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "uzaircheema2002@gmail.com",
    href: "mailto:uzaircheema2002@gmail.com",
  },
  {
    icon: (
      <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    value: "Available Worldwide",
    href: null,
  },
  {
    icon: (
      <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 18px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    color: "white",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden" style={{ marginBottom: "20px" }}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-[#030014]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", paddingTop: "20px", marginBottom: "48px" }}
        >
          <span className="section-label">Contact</span>
          <h2 className="mt-4">
            Let&apos;s Work <span className="gradient-text">Together</span>
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
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s
            create something amazing together.
          </p>
        </motion.div>

        {/* Main Content - Side by Side Layout */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "48px",
            maxWidth: "1100px",
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          {/* Contact Info - Left Side (1/3) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              flex: "1 1 300px",
              minWidth: "280px",
            }}
          >
            {/* Intro Text */}
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "white", marginBottom: "12px" }}>
                Get in Touch
              </h3>
              <p style={{ fontSize: "15px", color: "#71717a", lineHeight: 1.7 }}>
                Whether you need a full-stack application, AI integration, or
                automation workflows, I&apos;m here to help bring your ideas to
                life.
              </p>
            </div>

            {/* Contact Methods */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px 20px",
                    borderRadius: "14px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(147, 51, 234, 0.3)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "rgba(147, 51, 234, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#a855f7",
                    }}
                  >
                    {method.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: "12px", color: "#71717a", marginBottom: "4px" }}>
                      {method.label}
                    </p>
                    {method.href ? (
                      <a
                        href={method.href}
                        style={{
                          fontSize: "15px",
                          fontWeight: 500,
                          color: "white",
                          textDecoration: "none",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#a855f7")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: "15px", fontWeight: 500, color: "white" }}>
                        {method.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Contact Form - Right Side (2/3) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              flex: "2 1 400px",
              minWidth: "320px",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                padding: "32px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {/* Name & Email Row */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "24px",
                  }}
                >
                  <div style={{ flex: "1 1 200px", minWidth: "200px" }}>
                    <label
                      htmlFor="name"
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#a1a1aa",
                        marginBottom: "10px",
                      }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                      placeholder="John Doe"
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(147, 51, 234, 0.5)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  <div style={{ flex: "1 1 200px", minWidth: "200px" }}>
                    <label
                      htmlFor="email"
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#a1a1aa",
                        marginBottom: "10px",
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                      placeholder="john@example.com"
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(147, 51, 234, 0.5)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#a1a1aa",
                      marginBottom: "10px",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    style={{
                      ...inputStyle,
                      resize: "none",
                      minHeight: "140px",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(147, 51, 234, 0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    padding: "16px 24px",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "white",
                    background: "linear-gradient(135deg, #9333ea 0%, #3b82f6 100%)",
                    borderRadius: "14px",
                    border: "none",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    opacity: isSubmitting ? 0.6 : 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    transition: "all 0.3s ease",
                    boxShadow: "0 10px 30px -10px rgba(147, 51, 234, 0.4)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.boxShadow = "0 15px 40px -10px rgba(147, 51, 234, 0.5)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 10px 30px -10px rgba(147, 51, 234, 0.4)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        style={{ width: "20px", height: "20px", animation: "spin 1s linear infinite" }}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          style={{ opacity: 0.25 }}
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          style={{ opacity: 0.75 }}
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <svg
                        style={{ width: "20px", height: "20px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        style={{ width: "20px", height: "20px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
