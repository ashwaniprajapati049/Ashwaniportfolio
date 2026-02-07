"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const skills = [
  "Java",
  "SpringBoot",
  "Angular",
  "TypeScript",
  "C#",
  "DOTNET",
  "CI/CD",
  "UI/UX Design",
];

const interests = [
  { icon: "♟️", label: "Strategic Chess" },
  { icon: "🧩", label: "Problem Solving" },
  { icon: "📚", label: "Technical Reading" },
  { icon: "🔍", label: "Exploring New Ideas" },
];

const floatingAnimation = {
  y: ["-10%", "10%"],
  transition: {
    y: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

export function AboutSection() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [showBio, setShowBio] = useState(false);

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-background to-secondary/30 overflow-hidden"
    >
      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 md:grid-cols-2 items-center"
        >
          {/* Image Column */}
          <div className="relative flex justify-center items-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-[280px] sm:w-[320px] md:w-[360px] aspect-[3/4] rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-transparent p-3"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Image
                  src="https://res.cloudinary.com/dwciao4x3/image/upload/v1769605888/pic_pic-removebg-preview_brsxe6.png"
                  alt="Ashwani Prajapati"
                  fill
                  priority
                  className="object-contain scale-105"
                />
              </div>

              {/* subtle glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                About Me
              </h2>
              <AnimatePresence mode="wait">
                {showBio ? (
                  <motion.p
                    key="full-bio"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-muted-foreground"
                  >
                    I’m Java developer with expertise in Angular and .NET
                    frontend, focused on building visually appealing and
                    high-performing web applications. I enjoy transforming
                    complex requirements into clean, responsive interfaces using
                    modern web technologies and best practices. What started as
                    a curiosity for problem-solving has evolved into a strong
                    commitment to crafting intuitive and reliable digital
                    experiences
                  </motion.p>
                ) : (
                  <motion.p
                    key="short-bio"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-muted-foreground"
                  >
                    Java developer with hands-on experience in Angular and .NET
                    frontend, focused on building clean, scalable web
                    interfaces.
                  </motion.p>
                )}
              </AnimatePresence>
              <Button
                variant="link"
                onClick={() => setShowBio(!showBio)}
                className="mt-2 p-0 h-auto font-semibold text-primary hover:text-primary/80"
              >
                {showBio ? "Read Less" : "Read More"}
              </Button>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.button
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeSkill === skill
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                    onClick={() =>
                      setActiveSkill(activeSkill === skill ? null : skill)
                    }
                  >
                    {skill}
                  </motion.button>
                ))}
              </div>
              <AnimatePresence>
                {activeSkill && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 p-2 bg-secondary/50 rounded-md text-sm"
                  >
                    {`${activeSkill}: Click to see projects using this skill!`}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold">Interests</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-2 p-2 bg-secondary/30 rounded-md"
                  >
                    <span className="text-2xl">{interest.icon}</span>
                    <span className="text-sm text-secondary-foreground">
                      {interest.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground"
              >
                <a
                  href="https://drive.google.com/file/d/1HVuTCTX8wUFEttt3ZmEBlVoA4w-h3SCD/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDownload className="mr-2 h-4 w-4" />
                  View CV
                </a>
              </Button>

              {/* Contact Me */}
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=prajapatiashwani62@gmail.com">
                  <FaEnvelope className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>

              {/* GitHub */}
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-primary hover:bg-primary/20"
              >
                <a
                  href="https://github.com/ashwaniprajapati049"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
              </Button>

              {/* LinkedIn */}
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-primary hover:bg-primary/20"
              >
                <a
                  href="https://www.linkedin.com/in/ashwani-prajapati-43744222a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Glowing orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl opacity-30 pointer-events-none">
          {/* <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" /> */}
        </div>
      </div>
    </section>
  );
}
