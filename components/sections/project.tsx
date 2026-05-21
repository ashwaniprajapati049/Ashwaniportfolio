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
  Sparkles,
  Github,
  ExternalLink,
  ChevronRight,
  Layers3,
} from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  accent: string;
  badgeBg: string;
  badgeText: string;
  details: string;
  technologies: string[];
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Smart Dues Management System",
    description:
      "A modern full-stack application for managing student dues with secure admin and student workflows.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
    accent: "#16A34A",
    badgeBg: "#E1F5EE",
    badgeText: "#085041",
    details:
      "Designed and developed a complete dues management platform using Spring Boot and MySQL. Implemented secure authentication, receipt verification, semester-wise tracking, REST APIs, validations, and scalable backend architecture.",
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "MySQL",
      "JDBC",
      "HTML",
      "CSS",
    ],
    github:
      "https://github.com/ashwaniprajapati049",
    live: "",
  },

  {
    id: 2,
    title: "Snake Game",
    description:
      "Interactive desktop snake game built with Java Swing and real-time game logic.",
    image:
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1400&auto=format&fit=crop",
    accent: "#D97706",
    badgeBg: "#FAEEDA",
    badgeText: "#633806",
    details:
      "Built a responsive Snake Game using Java Swing with collision detection, smooth rendering, scoring system, and timer-based game mechanics.",
    technologies: [
      "Java",
      "Swing",
      "JFrame",
      "JPanel",
      "Game Logic",
    ],
    github:
      "https://github.com/ashwaniprajapati049",
    live: "",
  },

  {
    id: 3,
    title: "Real-Time Weather Monitoring",
    description:
      "Java application for collecting and visualizing live weather information in real-time.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1400&auto=format&fit=crop",
    accent: "#0891B2",
    badgeBg: "#E6F7FB",
    badgeText: "#0E4F63",
    details:
      "Developed a real-time monitoring system displaying temperature, humidity, rainfall, and weather conditions with clean UI visualization and live data processing.",
    technologies: [
      "Java",
      "APIs",
      "Data Processing",
      "OOP",
    ],
    github:
      "https://github.com/ashwaniprajapati049",
    live: "",
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
        py-20 md:py-28
        bg-gradient-to-b
        from-background
        via-background
        to-green-500/5
      "
    >
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/10 blur-3xl rounded-full pointer-events-none" />

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
          className="text-center mb-16"
        >
          <div>
            
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-muted-foreground">
            A collection of projects showcasing
            backend systems, frontend engineering,
            and modern application architecture.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 24,
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
                y: -6,
              }}
              className="
                group relative overflow-hidden
                rounded-3xl border border-white/10
                bg-gradient-to-br
                from-white/70
                to-white/40
                dark:from-zinc-900/80
                dark:to-zinc-950/60
                backdrop-blur-xl
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                hover:border-green-500/20
                transition-all duration-300
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-green-500/5 via-transparent to-emerald-500/5" />

              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-[11px] font-semibold backdrop-blur-md border"
                    style={{
                      background:
                        project.badgeBg,
                      color:
                        project.badgeText,
                      borderColor: `${project.badgeText}20`,
                    }}
                  >
                    Featured Project
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6">

                <h3 className="text-xl font-semibold tracking-tight mb-3">
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
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
                    {project.technologies
                      .slice(0, 4)
                      .map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-[11px] font-medium border border-border bg-background/50"
                        >
                          {tech}
                        </span>
                      ))}

                    {project.technologies
                      .length > 4 && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-medium border border-border bg-background/50">
                        +
                        {project
                          .technologies
                          .length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex items-center justify-between">

                  <Button
                    variant="outline"
                    className="
                      rounded-full gap-2
                      hover:border-green-500/30
                      hover:bg-green-500/5
                      hover:text-green-600
                    "
                    onClick={() =>
                      setSelectedProject(
                        project
                      )
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
            <DialogContent className="sm:max-w-[700px] rounded-3xl overflow-hidden border border-border p-0">

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={
                    selectedProject.image
                  }
                  alt={
                    selectedProject.title
                  }
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <DialogTitle className="text-3xl font-bold text-white">
                    {
                      selectedProject.title
                    }
                  </DialogTitle>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">

                <DialogHeader>
                  <DialogDescription className="text-sm md:text-[15px] leading-relaxed text-muted-foreground">
                    {
                      selectedProject.details
                    }
                  </DialogDescription>
                </DialogHeader>

                {/* Tech */}
                <div className="mt-7">
                  <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-muted-foreground mb-4">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-medium border border-border bg-background/50"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-7 mt-7 border-t border-border">

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