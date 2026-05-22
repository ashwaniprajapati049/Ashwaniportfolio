"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

import {
  Download,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Briefcase,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Trophy,
  Brain,
  BookOpen,
  Lightbulb,
  Code2,
  Sparkles,
} from "lucide-react";

import Image from "next/image";

const SKILLS = [
  { name: "Java", bg: "#FAECE7", text: "#712B13" },
  { name: "Spring Boot", bg: "#E1F5EE", text: "#085041" },
  { name: "Angular", bg: "#FCEBEB", text: "#791F1F" },
  { name: "TypeScript", bg: "#E6F1FB", text: "#0C447C" },
  { name: "C#", bg: "#EEEDFE", text: "#3C3489" },
  { name: ".NET", bg: "#EEEDFE", text: "#3C3489" },
  { name: "MySQL", bg: "#E1F5EE", text: "#085041" },
  { name: "Git", bg: "#FAEEDA", text: "#633806" },
  { name: "REST APIs", bg: "#E6F1FB", text: "#0C447C" },
  { name: "Tailwind CSS", bg: "#FBEAF0", text: "#72243E" },
];

const INTERESTS = [
  { icon: Trophy, label: "Strategic Chess" },
  { icon: Brain, label: "Problem Solving" },
  { icon: BookOpen, label: "Technical Reading" },
  { icon: Lightbulb, label: "Exploring New Ideas" },
];

const STATS = [
  { num: "1+", label: "Years Experience" },
  { num: "2", label: "Companies" },
  { num: "3+", label: "Projects" },
  { num: "6+", label: "Technologies" },
];

export function AboutSection() {
  const [showBio, setShowBio] = useState(false);

  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        py-16 md:py-24
        bg-gradient-to-b
        from-background
        via-background
        to-green-500/5
      "
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-green-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 md:px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Passionate About
            <span className="block text-green-600 dark:text-green-400">
              Building Modern Web Apps
            </span>
          </h2>

          <p className="mt-4 md:mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-muted-foreground px-2">
            A little about my background, technical expertise,
            and the passion that drives my work as a software engineer.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-6 md:gap-8">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            {/* Profile Card */}
            <div
              className="
                rounded-3xl
                border border-white/10
                bg-gradient-to-br
                from-white/70
                to-white/40
                dark:from-zinc-900/80
                dark:to-zinc-950/60
                backdrop-blur-xl
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                overflow-hidden
              "
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-green-600 via-green-400 to-emerald-300" />

              {/* Avatar + Info */}
              <div className="p-5 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">

                {/* Avatar */}
                <div className="relative w-20 h-20 shrink-0 rounded-2xl overflow-hidden ring-2 ring-green-500/20">
                  <Image
                    src="https://res.cloudinary.com/dwciao4x3/image/upload/v1775745356/WhatsApp_Image_2026-04-09_at_8.03.56_PM_vwu0ja.jpg"
                    alt="Ashwani Prajapati"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                </div>

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold tracking-tight leading-tight break-words">
                    Ashwani Prajapati
                  </h3>

                  <p className="text-sm text-muted-foreground mt-0.5">
                    Software Engineer · Full Stack
                  </p>

                  <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-x-3 gap-y-2">

                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3 text-green-500 shrink-0" />
                      Bengaluru, India
                    </span>

                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Briefcase className="h-3 w-3 text-green-500 shrink-0" />
                      CA-One Tech
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="mx-5 border-t border-border" />

              {/* Buttons */}
              <div className="p-5 flex flex-col gap-3">

                <Button
                  asChild
                  className="
                    w-full rounded-2xl
                    bg-green-600
                    hover:bg-green-700
                    text-white
                    shadow-lg shadow-green-500/20
                  "
                >
                  <a
                    href="https://drive.google.com/file/d/1HVuTCTX8wUFEttt3ZmEBlVoA4w-h3SCD/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-4 w-4 mr-2 shrink-0" />
                    Download CV
                  </a>
                </Button>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                  <Button
                    asChild
                    variant="outline"
                    className="rounded-2xl"
                  >
                    <a
                      href="https://github.com/ashwaniprajapati049"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2 shrink-0" />
                      GitHub
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="rounded-2xl"
                  >
                    <a
                      href="https://www.linkedin.com/in/ashwani-prajapati-43744222a/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4 mr-2 shrink-0" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -3 }}
                  className="
                    rounded-2xl
                    border border-border
                    bg-background/50
                    backdrop-blur-sm
                    p-3 md:p-4
                    text-center
                    hover:border-green-500/30
                    transition-all duration-300
                  "
                >
                  <p className="text-xl md:text-2xl font-bold">
                    {stat.num}
                  </p>

                  <p className="text-[11px] md:text-xs text-muted-foreground mt-1 leading-relaxed">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >

            {/* Bio */}
            <div className="rounded-3xl border border-border bg-background/50 backdrop-blur-sm p-5 md:p-6">

              <div className="flex items-start sm:items-center gap-3 mb-5">

                <div className="w-10 h-10 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                  <Sparkles className="h-5 w-5 text-green-500" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold">
                    Professional Bio
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    About my journey & experience
                  </p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {showBio ? (
                  <motion.p
                    key="full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-sm md:text-base text-muted-foreground leading-relaxed break-words"
                  >
                    Full Stack Engineer at CA-One Tech,
                    Bengaluru, building enterprise-grade Angular
                    dashboards and Spring Boot APIs. I enjoy transforming
                    complex requirements into clean, responsive interfaces
                    using modern web technologies.
                  </motion.p>
                ) : (
                  <motion.p
                    key="short"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-sm md:text-base text-muted-foreground leading-relaxed break-words"
                  >
                    Full Stack Engineer at CA-One Tech,
                    building enterprise-grade Angular dashboards
                    and scalable Spring Boot APIs focused on
                    clean architecture and modern UI systems.
                  </motion.p>
                )}
              </AnimatePresence>

              <button
                onClick={() => setShowBio((v) => !v)}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 dark:text-green-400 hover:underline"
              >
                {showBio ? (
                  <>
                    <ChevronUp className="h-4 w-4" />
                    Read less
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4" />
                    Read more
                  </>
                )}
              </button>
            </div>

            {/* Skills */}
            <div className="rounded-3xl border border-border bg-background/50 backdrop-blur-sm p-5 md:p-6">

              <div className="flex items-start sm:items-center gap-3 mb-5">

                <div className="w-10 h-10 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                  <Code2 className="h-5 w-5 text-green-500" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Core Skills
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Technologies I work with
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{
                      y: -2,
                      scale: 1.03,
                    }}
                    className="
                      px-3 py-2 md:px-4
                      rounded-full
                      text-xs md:text-sm
                      font-medium
                      cursor-default
                      break-words
                    "
                    style={{
                      background: skill.bg,
                      color: skill.text,
                    }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="rounded-3xl border border-border bg-background/50 backdrop-blur-sm p-5 md:p-6">

              <div className="flex items-start sm:items-center gap-3 mb-5">

                <div className="w-10 h-10 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                  <GraduationCap className="h-5 w-5 text-green-500" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Education
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Academic background
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                  <GraduationCap className="h-6 w-6 text-green-500" />
                </div>

                <div className="min-w-0">
                  <p className="font-medium break-words">
                    B.Tech — Computer Science & Engineering
                  </p>

                  <p className="text-sm text-muted-foreground mt-1 break-words">
                    Radharaman Institute of Technology & Science, Bhopal
                  </p>

                  <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 font-medium">
                    2021 – 2025
                  </span>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="rounded-3xl border border-border bg-background/50 backdrop-blur-sm p-5 md:p-6">

              <div className="flex items-start sm:items-center gap-3 mb-5">

                <div className="w-10 h-10 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                  <Lightbulb className="h-5 w-5 text-green-500" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Interests
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Things I enjoy outside coding
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                {INTERESTS.map(
                  ({ icon: Icon, label }) => (
                    <motion.div
                      key={label}
                      whileHover={{ y: -2 }}
                      className="
                        flex items-center gap-3
                        rounded-2xl border border-border
                        bg-background/50
                        p-4
                        hover:border-green-500/30
                        transition-all duration-300
                      "
                    >
                      <div className="w-10 h-10 rounded-2xl bg-green-500/10 flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-green-500" />
                      </div>

                      <span className="text-sm font-medium text-muted-foreground break-words">
                        {label}
                      </span>
                    </motion.div>
                  )
                )}
              </div>
            </div>

            {/* Email CTA */}
            <Button
              asChild
              variant="outline"
              className="
                w-full min-h-[48px]
                rounded-2xl border-border
                hover:border-green-500/30
                hover:bg-green-500/5
                hover:text-green-600
                transition-all duration-300
              "
            >
              <a
                href="mailto:prajapatiashwani62@gmail.com"
                className="break-all text-center"
              >
                <Mail className="h-4 w-4 mr-2 shrink-0" />
                prajapatiashwani62@gmail.com
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}