"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronDown, X } from "lucide-react"
import { GlobalStyles } from "@mui/material"

const scrollbarStyles = (
  <GlobalStyles
    styles={{
      "*::-webkit-scrollbar": { width: "8px" },
      "*::-webkit-scrollbar-track": { background: "transparent" },
      "*::-webkit-scrollbar-thumb": {
        background: "rgba(255,255,255,0.5)",
        borderRadius: "20px",
      },
      "*::-webkit-scrollbar-thumb:hover": {
        background: "rgba(255,255,255,0.7)",
      },
    }}
  />
)

interface Skill {
  name: string
  level: number
  description: string
  projects: string[]
}

export function SkillSection() {
  const [showLevel, setShowLevel] = useState(false)
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null)
  const [visibleSkills, setVisibleSkills] = useState(3)

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
    },
    {
      name: "Spring Boot",
      level: 80,
      description: "Building scalable RESTful backend services",
      projects: ["Smart Dues Management System APIs", "Role-Based Authentication"],
    },
    {
      name: "C# & .NET",
      level: 70,
      description: "Backend API logic and enterprise application support",
      projects: ["Enterprise Control Room Backend Support"],
    },
    {
      name: "Angular",
      level: 85,
      description: "Building responsive enterprise dashboards using Angular",
      projects: [
        "Enterprise Control Room Dashboard",
        "Smart Dues Management System UI",
      ],
    },
    {
      name: "TypeScript",
      level: 85,
      description: "Type-safe frontend development",
      projects: ["Angular Dashboards", "Form Validation & API Mapping"],
    },
    {
      name: "JavaScript",
      level: 80,
      description: "Dynamic client-side scripting",
      projects: ["Frontend Interactions", "Dashboard Enhancements"],
    },
    {
      name: "HTML & CSS",
      level: 85,
      description: "Responsive and modern UI styling",
      projects: ["Responsive UI Components", "Enterprise Dashboard Styling"],
    },
    {
      name: "MySQL & JDBC",
      level: 75,
      description: "Relational database design and persistence",
      projects: ["Dues Tracking Database", "Receipt Management System"],
    },
  ]

  const getSkillIcon = (skillName: string) => {
    const iconMap: Record<string, string> = {
    "Java":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",

    "Spring Boot":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",

    "C# & .NET":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",

    "Angular":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",

    "TypeScript":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",

    "JavaScript":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",

    "HTML & CSS":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",

    "MySQL & JDBC":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  }


    return iconMap[skillName]
  }

  const toggleSkillExpansion = (name: string) =>
    setExpandedSkill(expandedSkill === name ? null : name)

  const showMoreSkills = () =>
    setVisibleSkills((prev) => Math.min(prev + 3, skills.length))

  return (
    <>
      {scrollbarStyles}
      <section
        id="skills"
        className="py-24 bg-gradient-to-br from-background to-secondary"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">My Skills</h2>
            <p className="text-muted-foreground mb-6">
              Technologies I’ve worked with professionally and academically
            </p>
            <Button onClick={() => setShowLevel(!showLevel)}>
              {showLevel ? "Hide Levels" : "Show Levels"}
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {skills.slice(0, visibleSkills).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  layout
                  whileHover={{ scale: 1.05 }}
                  className="relative rounded-xl shadow-xl overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, hsl(${
                      (index * 60) % 360
                    },70%,50%), hsl(${((index * 60 + 180) % 360)},70%,50%))`,
                  }}
                >
                  {expandedSkill === skill.name ? (
                    <div className="p-6 text-white">
                      <Button
                        size="sm"
                        className="absolute top-2 right-2 bg-white/20"
                        onClick={() => toggleSkillExpansion(skill.name)}
                      >
                        <X />
                      </Button>

                      <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                        <img
                          src={getSkillIcon(skill.name)}
                          alt={skill.name}
                          className="w-6 h-6 invert"
                        />
                        {skill.name}
                      </h3>

                      <p className="mb-4">{skill.description}</p>

                      {showLevel && (
                        <p className="mb-4 font-semibold">
                          Proficiency: {skill.level}% 🚀
                        </p>
                      )}

                      <ul>
                        {skill.projects.map((p) => (
                          <li key={p}>🔹 {p}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="p-6 text-center text-white">
                      <img
                        src={getSkillIcon(skill.name)}
                        alt={skill.name}
                        className="w-12 h-12 mx-auto mb-4 invert"
                      />

                      <h3 className="text-xl font-semibold">{skill.name}</h3>

                      {showLevel && (
                        <div className="mt-4 bg-white/30 rounded-full h-2">
                          <div
                            className="bg-white h-2 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      )}

                      <Button
                        size="sm"
                        className="mt-4"
                        onClick={() => toggleSkillExpansion(skill.name)}
                      >
                        More Details <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {visibleSkills < skills.length && (
            <div className="text-center mt-10">
              <Button size="lg" onClick={showMoreSkills}>
                Show More <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
