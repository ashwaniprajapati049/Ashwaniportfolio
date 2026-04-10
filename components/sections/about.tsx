"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const SKILLS = [
  { name: "Java", accent: "#D85A30", badgeBg: "#FAECE7", badgeText: "#712B13" },
  { name: "Spring Boot", accent: "#1D9E75", badgeBg: "#E1F5EE", badgeText: "#085041" },
  { name: "Angular", accent: "#E24B4A", badgeBg: "#FCEBEB", badgeText: "#791F1F" },
  { name: "TypeScript", accent: "#378ADD", badgeBg: "#E6F1FB", badgeText: "#0C447C" },
  { name: "C#", accent: "#7F77DD", badgeBg: "#EEEDFE", badgeText: "#3C3489" },
  { name: ".NET", accent: "#7F77DD", badgeBg: "#EEEDFE", badgeText: "#3C3489" },
  { name: "CI/CD", accent: "#BA7517", badgeBg: "#FAEEDA", badgeText: "#633806" },
  { name: "UI/UX Design", accent: "#D4537E", badgeBg: "#FBEAF0", badgeText: "#72243E" },
];

const INTERESTS = [
  { icon: "♟️", label: "Strategic Chess" },
  { icon: "🧩", label: "Problem Solving" },
  { icon: "📚", label: "Technical Reading" },
  { icon: "🔍", label: "Exploring New Ideas" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function AboutSection() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [showBio, setShowBio] = useState(false);

  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3"
          >
            Who I am
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-4xl font-bold text-foreground"
          >
            About Me
          </motion.h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid gap-12 md:grid-cols-2 items-start"
        >
          {/* ── Image Column ── */}
         <motion.div
  variants={itemVariants}
  className="flex flex-col items-center gap-4"
>
  <div className="relative w-[280px] sm:w-[320px]">
    
    {/* PROFILE CARD */}
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <div className="h-1 w-full bg-gradient-to-r from-[#378ADD] via-[#7F77DD] to-[#D85A30]" />

      <div className="relative w-full aspect-[3/4]">
        <Image
          src="https://res.cloudinary.com/dwciao4x3/image/upload/v1775745356/WhatsApp_Image_2026-04-09_at_8.03.56_PM_vwu0ja.jpg"
          alt="Ashwani Prajapati"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="px-5 py-4 border-t border-border text-center">
        <p className="font-semibold text-foreground">Ashwani Prajapati</p>
        <p className="text-xs text-muted-foreground">
          Software Engineer · Full Stack
        </p>
      </div>
    </div>
  </div>

  {/* ✅ NEW STATS BELOW */}
  <div className="grid grid-cols-2 gap-4 w-full max-w-[320px]">
    
    <div className="rounded-xl border border-border bg-card p-4 text-center hover:shadow-md transition">
      <p className="text-2xl font-bold text-foreground">1+</p>
      <p className="text-xs text-muted-foreground mt-1">Years Experience</p>
    </div>

    <div className="rounded-xl border border-border bg-card p-4 text-center hover:shadow-md transition">
      <p className="text-2xl font-bold text-foreground">3+</p>
      <p className="text-xs text-muted-foreground mt-1">Projects Built</p>
    </div>

  </div>
</motion.div>

          {/* ── Content Column ── */}
          <div className="space-y-8">

            {/* Bio */}
            <motion.div variants={itemVariants} className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="h-1 w-16 bg-[#378ADD] rounded-br-full" />
              <div className="p-5">
                <h3 className="font-semibold text-foreground text-base mb-3">Bio</h3>
                <AnimatePresence mode="wait">
                  {showBio ? (
                    <motion.p
                      key="full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      I am a Java developer with expertise in Angular and .NET frontend, focused on
                      building visually appealing and high-performing web applications. I enjoy
                      transforming complex requirements into clean, responsive interfaces using modern
                      web technologies and best practices. What started as a curiosity for
                      problem-solving has evolved into a strong commitment to crafting intuitive and
                      reliable digital experiences.
                    </motion.p>
                  ) : (
                    <motion.p
                      key="short"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      Java developer with hands-on experience in Angular and .NET frontend, focused
                      on building clean, scalable web interfaces.
                    </motion.p>
                  )}
                </AnimatePresence>
                <button
                  onClick={() => setShowBio((v) => !v)}
                  className="mt-3 text-xs font-semibold text-[#378ADD] hover:underline"
                >
                  {showBio ? "Read less" : "Read more"}
                </button>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="h-1 w-16 bg-[#7F77DD] rounded-br-full" />
              <div className="p-5">
                <h3 className="font-semibold text-foreground text-base mb-3">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((skill) => {
                    const isActive = activeSkill === skill.name;
                    return (
                      <motion.button
                        key={skill.name}
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setActiveSkill(isActive ? null : skill.name)}
                        className="text-xs px-3 py-1 rounded-full font-medium transition-all duration-150 border"
                        style={
                          isActive
                            ? {
                                background: skill.accent,
                                color: "#fff",
                                borderColor: skill.accent,
                              }
                            : {
                                background: skill.badgeBg,
                                color: skill.badgeText,
                                borderColor: "transparent",
                              }
                        }
                      >
                        {skill.name}
                      </motion.button>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {activeSkill && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-3 text-xs text-muted-foreground border-t border-border pt-3"
                    >
                      Click any skill to highlight it. Head to the{" "}
                      <span className="font-medium text-foreground">Projects</span> section to see{" "}
                      <span className="font-medium text-foreground">{activeSkill}</span> in action.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div variants={itemVariants} className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="h-1 w-16 bg-[#D85A30] rounded-br-full" />
              <div className="p-5">
                <h3 className="font-semibold text-foreground text-base mb-3">Interests</h3>
                <div className="grid grid-cols-2 gap-3">
                  {INTERESTS.map((interest) => (
                    <motion.div
                      key={interest.label}
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg border border-border bg-background"
                    >
                      <span className="text-lg leading-none">{interest.icon}</span>
                      <span className="text-xs text-muted-foreground font-medium">
                        {interest.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <Button asChild size="sm" className="gap-2">
                <a
                  href="https://drive.google.com/file/d/1HVuTCTX8wUFEttt3ZmEBlVoA4w-h3SCD/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDownload className="h-3.5 w-3.5" />
                  View CV
                </a>
              </Button>

              <Button asChild variant="outline" size="sm" className="gap-2">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=prajapatiashwani62@gmail.com">
                  <FaEnvelope className="h-3.5 w-3.5" />
                  Contact Me
                </a>
              </Button>

              <Button asChild variant="outline" size="icon" className="h-8 w-8">
                <a
                  href="https://github.com/ashwaniprajapati049"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-4 w-4" />
                </a>
              </Button>

              <Button asChild variant="outline" size="icon" className="h-8 w-8">
                <a
                  href="https://www.linkedin.com/in/ashwani-prajapati-43744222a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}