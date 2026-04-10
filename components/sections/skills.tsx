"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, BarChart2, X } from "lucide-react"

interface Skill {
  name: string
  level: number
  description: string
  projects: string[]
  icon: string
}

const ACCENT_COLORS = [
  { bar: "#7F77DD", dot: "#534AB7", badge: "#EEEDFE", badgeText: "#3C3489" },
  { bar: "#1D9E75", dot: "#0F6E56", badge: "#E1F5EE", badgeText: "#085041" },
  { bar: "#D85A30", dot: "#993C1D", badge: "#FAECE7", badgeText: "#712B13" },
  { bar: "#378ADD", dot: "#185FA5", badge: "#E6F1FB", badgeText: "#0C447C" },
  { bar: "#D4537E", dot: "#993556", badge: "#FBEAF0", badgeText: "#72243E" },
  { bar: "#BA7517", dot: "#854F0B", badge: "#FAEEDA", badgeText: "#633806" },
  { bar: "#E24B4A", dot: "#A32D2D", badge: "#FCEBEB", badgeText: "#791F1F" },
  { bar: "#639922", dot: "#3B6D11", badge: "#EAF3DE", badgeText: "#27500A" },
]

const skills: Skill[] = [
  {
    name: "Java",
    level: 85,
    description: "Core backend development and object-oriented programming",
    projects: [
      "Smart Dues Management System",
      "Real-Time Weather Monitoring System",
      "Snake Game",
    ],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Spring Boot",
    level: 80,
    description: "Building scalable RESTful backend services",
    projects: ["Smart Dues Management System APIs", "Role-Based Authentication"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "C# & .NET",
    level: 70,
    description: "Backend API logic and enterprise application support",
    projects: ["Enterprise Control Room Backend Support"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  },
  {
    name: "Angular",
    level: 85,
    description: "Building responsive enterprise dashboards using Angular",
    projects: [
      "Enterprise Control Room Dashboard",
      "Smart Dues Management System UI",
    ],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "TypeScript",
    level: 85,
    description: "Type-safe frontend development",
    projects: ["Angular Dashboards", "Form Validation & API Mapping"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    level: 80,
    description: "Dynamic client-side scripting",
    projects: ["Frontend Interactions", "Dashboard Enhancements"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML & CSS",
    level: 85,
    description: "Responsive and modern UI styling",
    projects: ["Responsive UI Components", "Enterprise Dashboard Styling"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "MySQL & JDBC",
    level: 75,
    description: "Relational database design and persistence",
    projects: ["Dues Tracking Database", "Receipt Management System"],
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
]

export function SkillSection() {
  const [showLevel, setShowLevel] = useState(false)
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null)
  const [visibleSkills, setVisibleSkills] = useState(6)

  const toggleExpand = (name: string) =>
    setExpandedSkill((prev) => (prev === name ? null : name))

  const showMoreSkills = () =>
    setVisibleSkills((prev) => Math.min(prev + 3, skills.length))

  return (
    <section
      id="skills"
      className="py-24 bg-background"
    >
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
    What I use
  </motion.p>

  <motion.h2
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.05 }}
    className="text-4xl font-bold text-foreground mb-4"
  >
    My Skills
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.1 }}
    className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed"
  >
    Technologies I have worked with professionally and academically,
    focusing on building scalable and modern web applications.
  </motion.p>

  {/* OPTIONAL BUTTON BELOW (centered) */}
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.15 }}
    className="mt-6 flex justify-center"
  >
    <Button
      variant="outline"
      size="sm"
      onClick={() => setShowLevel((v) => !v)}
      className="flex items-center gap-2"
    >
      <BarChart2 className="w-4 h-4" />
      {showLevel ? "Hide levels" : "Show levels"}
    </Button>
  </motion.div>
</div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {skills.slice(0, visibleSkills).map((skill, index) => {
              const accent = ACCENT_COLORS[index % ACCENT_COLORS.length]
              const isOpen = expandedSkill === skill.name

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                  whileHover={{ y: -3 }}
                  className="rounded-xl border border-border bg-card overflow-hidden cursor-pointer group"
                  onClick={() => toggleExpand(skill.name)}
                >
                  {/* Accent stripe */}
                  <div
                    className="h-1 w-full"
                    style={{ background: accent.bar }}
                  />

                  {/* Card body */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-9 h-9"
                      />
                      {/* open/close indicator */}
                      <span className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                        {isOpen ? (
                          <X className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </span>
                    </div>

                    <h3 className="font-semibold text-foreground text-base mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {skill.description}
                    </p>

                    {/* Progress bar */}
                    <AnimatePresence>
                      {showLevel && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-4"
                        >
                          <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                            <span>Proficiency</span>
                            <span style={{ color: accent.bar }}>
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                              className="h-full rounded-full"
                              style={{ background: accent.bar }}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Expanded projects */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22 }}
                        className="border-t border-border px-5 py-4"
                      >
                        <p
                          className="text-[10px] font-semibold uppercase tracking-widest mb-3"
                          style={{ color: accent.bar }}
                        >
                          Projects
                        </p>
                        <ul className="space-y-2">
                          {skill.projects.map((project) => (
                            <li
                              key={project}
                              className="flex items-start gap-2 text-xs text-muted-foreground"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0"
                                style={{ background: accent.dot }}
                              />
                              {project}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Show more */}
        {visibleSkills < skills.length && (
          <div className="text-center mt-10">
            <Button
              variant="outline"
              size="lg"
              onClick={showMoreSkills}
              className="gap-2"
            >
              Show more <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}