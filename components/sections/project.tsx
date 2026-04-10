"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { FaChevronRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
      "A full-stack web application for managing student dues with role-based access for admins and students.",
    image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800&q=80",
    accent: "#378ADD",
    badgeBg: "#E6F1FB",
    badgeText: "#0C447C",
    details:
      "Designed and developed a complete dues management system using Java Spring Boot. The system supports department-wise dues tracking, receipt upload and verification, and semester-wise filtering. Implemented secure authentication, REST APIs, validations, and exception handling with MySQL as the database.",
    technologies: ["Java", "Spring Boot", "REST APIs", "MySQL", "JDBC", "HTML", "CSS"],
    github: "https://github.com/ashwaniprajapati049",
    live: "",
  },
  {
    id: 2,
    title: "Snake Game",
    description: "A classic interactive Snake Game built using Java and Swing.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    accent: "#D85A30",
    badgeBg: "#FAECE7",
    badgeText: "#712B13",
    details:
      "Built an interactive Snake Game using Java Swing with real-time movement, collision detection, scoring system, and game-over logic. Used JFrame, JPanel, and a Timer loop to ensure smooth rendering and gameplay.",
    technologies: ["Java", "Swing", "JFrame", "JPanel", "Game Logic"],
    github: "https://github.com/ashwaniprajapati049",
    live: "",
  },
  {
    id: 3,
    title: "Real-Time Weather Monitoring",
    description:
      "A Java-based application for collecting and visualizing real-time weather data.",
    image: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?w=800&q=80",
    accent: "#1D9E75",
    badgeBg: "#E1F5EE",
    badgeText: "#085041",
    details:
      "Developed a real-time weather monitoring system that displays live data such as temperature, humidity, and rainfall. Integrated live data sources and ensured accurate data processing with a clean, user-friendly interface for instant visualization.",
    technologies: ["Java", "OOP", "APIs", "Data Processing"],
    github: "https://github.com/ashwaniprajapati049",
    live: "",
  },
];

export function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-24 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3"
          >
            What I have built
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-4xl font-bold text-foreground mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed"
          >
            A collection of projects that showcase my expertise in backend
            systems, frontend interfaces, and creative problem-solving.
          </motion.p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-xl border border-border bg-card overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Accent stripe */}
              <div
                className="h-1 w-full"
                style={{ background: project.accent }}
              />

              {/* Image */}
              <div className="relative overflow-hidden h-44">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* subtle overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="font-semibold text-foreground text-base mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: project.badgeBg,
                        color: project.badgeText,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span
                      className="text-[11px] px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: project.badgeBg,
                        color: project.badgeText,
                      }}
                    >
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  className="group/btn gap-1.5 text-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                >
                  View details
                  <FaChevronRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
                </Button>
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
            onOpenChange={() => setSelectedProject(null)}
          >
            <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden rounded-xl">
              {/* Accent stripe */}
              <div
                className="h-1 w-full"
                style={{ background: selectedProject.accent }}
              />

              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="px-6 py-5">
                <DialogHeader className="mb-4">
                  <DialogTitle className="text-xl font-semibold text-foreground">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-sm text-muted-foreground leading-relaxed mt-1">
                    {selectedProject.details}
                  </DialogDescription>
                </DialogHeader>

                {/* Technologies */}
                <div className="mb-5">
                  <p
                    className="text-[10px] font-semibold uppercase tracking-widest mb-2"
                    style={{ color: selectedProject.accent }}
                  >
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{
                          background: selectedProject.badgeBg,
                          color: selectedProject.badgeText,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="gap-2">
                      <FaGithub className="w-3.5 h-3.5" />
                      GitHub
                    </Button>
                  </a>
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" className="gap-2">
                        <FaExternalLinkAlt className="w-3 h-3" />
                        Live Demo
                      </Button>
                    </a>
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