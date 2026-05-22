"use client";

import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import {
  Github,
  ExternalLink,
  ChevronRight,
  Layers3,
  FolderKanban,
} from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  details: string;
  technologies: string[];
  github: string;
  live: string;
  accent: string;
  stats: string;
};

const projects: Project[] = [
  {
    id: 1,

title: "Smart Dues Management System",

description:
  "A modern full-stack web application designed to streamline student dues management, receipt tracking, and admin operations through secure and efficient digital workflows.",

details:
  "Developed a complete student dues management platform using Java, Spring Boot, and MySQL with secure authentication, receipt verification, semester-wise dues tracking, and scalable REST API architecture. Built responsive admin and student dashboards, optimized backend operations, and implemented clean UI workflows to improve efficiency, transparency, and overall user experience within the institution.",

technologies: [
  "Java",
  "Spring Boot",
  "REST APIs",
  "MySQL",
  "JDBC",
  "HTML",
  "CSS",
  "Authentication",
  "Dashboard Development",
  "Backend Architecture",
  "Responsive UI",
],

    github:
      "https://github.com/ashwaniprajapati049",

    live: "",

    accent: "#16A34A",

    stats: "Full Stack System",
  },

  {
    id: 2,

title: "Snake Game",

description:
  "A classic desktop-based Snake Game featuring smooth gameplay mechanics, responsive controls, and real-time score tracking built using Java.",

details:
  "Developed an interactive Snake Game application using Java Swing and object-oriented programming principles. Implemented real-time movement logic, collision detection, keyboard controls, score management, and timer-based rendering to create a smooth and engaging gaming experience. Focused on performance optimization, game state management, and responsive gameplay mechanics.",

technologies: [
  "Java",
  "Swing",
  "JFrame",
  "Game Logic",
  "OOP",
  "Event Handling",
  "Timer-Based Rendering",
  "Keyboard Controls",
],
    github:
      "https://github.com/ashwaniprajapati049",

    live: "",

    accent: "#D97706",

    stats: "Desktop Application",
  },

  {
   id: 3,

title: "Real-Time Weather Monitoring",

description:
  "A real-time weather monitoring application designed to display live environmental conditions, temperature insights, and weather analytics through dynamic data visualization.",

details:
  "Developed a weather monitoring system using Java and API integration to fetch and process real-time environmental data including temperature, humidity, rainfall, and weather conditions. Implemented data handling, live updates, and clean information visualization while applying object-oriented programming concepts and backend processing techniques for accurate and efficient monitoring.",

technologies: [
  "Java",
  "REST APIs",
  "Data Processing",
  "OOP",
  "Real-Time Monitoring",
  "API Integration",
  "Backend Logic",
  "Weather Analytics",
],

    github:
      "https://github.com/ashwaniprajapati049",

    live: "",

    accent: "#0891B2",

    stats: "Real-Time Monitoring",
  },
];

export function ProjectSection() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="
        relative overflow-hidden
        py-16 md:py-24
        bg-gradient-to-b
        from-background
        via-background
        to-green-500/5
      "
    >
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 md:px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 14,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Featured Projects
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-muted-foreground">
            Selected projects focused on backend systems,
            frontend engineering, and scalable applications.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-5">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -3,
              }}
              className="
                group relative overflow-hidden
                rounded-3xl
                border border-border
                bg-background/60
                backdrop-blur-xl
                hover:border-green-500/20
                transition-all duration-300
              "
            >
              {/* Accent Glow */}
              <div
                className="absolute inset-y-0 left-0 w-1"
                style={{
                  background:
                    project.accent,
                }}
              />

              <div className="p-5 md:p-7">

                {/* Top */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">

                  {/* Left */}
                  <div className="flex-1 min-w-0">

                    {/* Badge */}
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold mb-4"
                      style={{
                        background: `${project.accent}15`,
                        color: project.accent,
                      }}
                    >
                      <FolderKanban className="h-3.5 w-3.5" />

                      {project.stats}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground max-w-3xl">
                      {project.description}
                    </p>

                    {/* Tech */}
                    <div className="mt-5">

                      <div className="flex items-center gap-2 mb-3">
                        <Layers3 className="h-4 w-4 text-green-500" />

                        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground">
                          Technologies
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(
                          (tech) => (
                            <span
                              key={tech}
                              className="
                                px-3 py-1
                                rounded-full
                                text-[11px]
                                font-medium
                                border border-border
                                bg-background/50
                              "
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex lg:flex-col items-center lg:items-end gap-3">

                    <Button
                      variant="outline"
                      className="
                        rounded-full gap-2
                        hover:border-green-500/30
                        hover:bg-green-500/5
                        hover:text-green-600
                      "
                      onClick={() =>
                        setSelectedProject(project)
                      }
                    >
                      View Details

                      <ChevronRight className="h-4 w-4" />
                    </Button>

                    <div className="flex items-center gap-2">

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="icon"
                          variant="outline"
                          className="rounded-2xl"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </a>

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="icon"
                            variant="outline"
                            className="rounded-2xl"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog
            open={!!selectedProject}
            onOpenChange={() =>
              setSelectedProject(null)
            }
          >
            <DialogContent
              className="
                w-[95vw]
                sm:max-w-[700px]
                rounded-3xl
                border border-border
                p-0 overflow-hidden
              "
            >
              {/* Header */}
              <div
                className="p-6 md:p-8"
                style={{
                  background: `${selectedProject.accent}10`,
                }}
              >
                <DialogTitle className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                  {selectedProject.title}
                </DialogTitle>

                <p
                  className="mt-3 text-sm font-medium"
                  style={{
                    color:
                      selectedProject.accent,
                  }}
                >
                  {selectedProject.stats}
                </p>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">

                <DialogHeader>
                  <DialogDescription className="text-sm md:text-base leading-relaxed text-muted-foreground">
                    {selectedProject.details}
                  </DialogDescription>
                </DialogHeader>

                {/* Technologies */}
                <div className="mt-8">

                  <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-muted-foreground mb-4">
                    Technologies Used
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map(
                      (tech) => (
                        <span
                          key={tech}
                          className="
                            px-3 py-1 rounded-full
                            text-xs font-medium
                            border border-border
                            bg-background/50
                          "
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-8 mt-8 border-t border-border">

                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full gap-2"
                  >
                    <a
                      href={
                        selectedProject.github
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>

                  {selectedProject.live && (
                    <Button
                      asChild
                      className="
                        rounded-full
                        bg-green-600
                        hover:bg-green-700
                        text-white
                        gap-2
                      "
                    >
                      <a
                        href={
                          selectedProject.live
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}