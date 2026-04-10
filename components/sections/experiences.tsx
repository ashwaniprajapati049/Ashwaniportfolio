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
import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const GITHUB_URL = "https://github.com/ashwaniprajapati049";
const LINKEDIN_URL = "https://www.linkedin.com/in/ashwani-prajapati-43744222a/";

type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
  companyLogo: string;
  accent: string;
  badgeBg: string;
  badgeText: string;
};

const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "CA-One Tech",
    duration: "Feb 2025 – Present",
    description:
      "Working as a Frontend Engineer, developing scalable and user-friendly web applications. Responsible for building dynamic UI components, optimizing performance, and integrating APIs. Collaborating with backend teams to deliver seamless user experiences in a production environment.",
    technologies: ["Angular", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "REST APIs"],
    companyLogo: "https://res.cloudinary.com/dwciao4x3/image/upload/v1775746071/caone_logo_lvl3gk.png",
    accent: "#D85A30",
    badgeBg: "#FAECE7",
    badgeText: "#712B13",
  },
  {
    role: "Software Trainee",
    company: "Intellibuddies – VIT Infotech",
    duration: "Mar 2025 – Jan 2026",
    description:
      "Worked on enterprise-level control room dashboards, developing responsive UI components using Angular and TypeScript. Integrated frontend with backend APIs and contributed to backend logic using C# and .NET. Actively participated in Agile ceremonies including sprint planning, stand-ups, and code reviews.",
    technologies: ["Angular", "TypeScript", "HTML", "CSS", "C#", ".NET", "REST APIs"],
    companyLogo: "https://res.cloudinary.com/dwciao4x3/image/upload/v1770383257/vit_infotech_logo_ukawu0.jpg",
    accent: "#378ADD",
    badgeBg: "#E6F1FB",
    badgeText: "#0C447C",
  },
  {
    role: "Web Development Internship",
    company: "GeeksforGeeks – MANIT Bhopal",
    duration: "2024",
    description:
      "Completed hands-on Web Development training covering frontend and backend fundamentals. Worked on building responsive web interfaces, understanding core web technologies, and implementing practical projects as part of structured training.",
    technologies: ["HTML", "CSS", "JavaScript", "Web Development", "Problem Solving"],
    companyLogo: "https://res.cloudinary.com/dwciao4x3/image/upload/v1770383608/GG_Logo_tcir8i.png",
    accent: "#1D9E75",
    badgeBg: "#E1F5EE",
    badgeText: "#085041",
  },
  {
    role: "Student Coordinator",
    company: "Radharaman Institute of Technology & Science",
    duration: "2023 – 2024",
    description:
      "Served as a student coordinator, assisting in organizing academic and technical activities, coordinating between faculty and students, and supporting smooth execution of college-level events and initiatives.",
    technologies: ["Leadership", "Communication", "Event Coordination", "Team Collaboration"],
    companyLogo: "https://res.cloudinary.com/dwciao4x3/image/upload/v1775745822/log_rgi_omhvjg.jpg",
    accent: "#7F77DD",
    badgeBg: "#EEEDFE",
    badgeText: "#3C3489",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  const scrollToContact = () => {
    setSelectedExperience(null);
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <section id="experiences" className="py-24 bg-background">
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
            My journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-4xl font-bold text-foreground mb-4"
          >
            Work Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed"
          >
            A selection of my recent professional roles where I have grown my
            skills and worked on exciting projects.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group rounded-xl border border-border bg-card overflow-hidden cursor-pointer flex flex-col"
              onClick={() => setSelectedExperience(exp)}
            >
              {/* Accent stripe */}
              <div className="h-1 w-full" style={{ background: exp.accent }} />

              <div className="p-5 flex flex-col flex-1">
                {/* Logo + meta */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 relative rounded-lg overflow-hidden border border-border bg-white flex-shrink-0">
                    <Image
                      src={exp.companyLogo}
                      alt={exp.company}
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-sm leading-snug truncate">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-muted-foreground truncate">
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Duration badge */}
                <span
                  className="inline-flex items-center self-start text-[11px] font-medium px-2 py-0.5 rounded-full mb-3"
                  style={{ background: exp.badgeBg, color: exp.badgeText }}
                >
                  {exp.duration}
                </span>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-4 flex-1">
                  {exp.description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {exp.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2 py-0.5 rounded-full font-medium"
                      style={{ background: exp.badgeBg, color: exp.badgeText }}
                    >
                      {tech}
                    </span>
                  ))}
                  {exp.technologies.length > 3 && (
                    <span
                      className="text-[11px] px-2 py-0.5 rounded-full font-medium"
                      style={{ background: exp.badgeBg, color: exp.badgeText }}
                    >
                      +{exp.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Footer actions */}
                <div className="flex gap-2 mt-auto pt-3 border-t border-border">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 text-xs h-8"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedExperience(exp);
                    }}
                  >
                    View details
                  </Button>
                  <Button
                    asChild
                    size="icon"
                    variant="outline"
                    className="h-8 w-8 flex-shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                      <GitHub className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="icon"
                    variant="outline"
                    className="h-8 w-8 flex-shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <Dialog
            open={!!selectedExperience}
            onOpenChange={() => setSelectedExperience(null)}
          >
            <DialogContent className="sm:max-w-[580px] p-0 overflow-hidden rounded-xl">
              {/* Accent stripe */}
              <div className="h-1 w-full" style={{ background: selectedExperience.accent }} />

              <div className="px-6 py-6">
                <DialogHeader className="mb-5">
                  {/* Logo + title */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 relative rounded-xl overflow-hidden border border-border bg-white flex-shrink-0">
                      <Image
                        src={selectedExperience.companyLogo}
                        alt={selectedExperience.company}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <DialogTitle className="text-lg font-semibold text-foreground leading-snug">
                        {selectedExperience.role}
                      </DialogTitle>
                      <p className="text-sm text-muted-foreground">
                        {selectedExperience.company}
                      </p>
                    </div>
                  </div>

                  {/* Duration */}
                  <span
                    className="inline-flex self-start text-[11px] font-medium px-2.5 py-0.5 rounded-full"
                    style={{
                      background: selectedExperience.badgeBg,
                      color: selectedExperience.badgeText,
                    }}
                  >
                    {selectedExperience.duration}
                  </span>

                  <DialogDescription className="text-sm text-muted-foreground leading-relaxed mt-3">
                    {selectedExperience.description}
                  </DialogDescription>
                </DialogHeader>

                {/* Technologies */}
                <div className="mb-6">
                  <p
                    className="text-[10px] font-semibold uppercase tracking-widest mb-2"
                    style={{ color: selectedExperience.accent }}
                  >
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{
                          background: selectedExperience.badgeBg,
                          color: selectedExperience.badgeText,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                      <GitHub className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-3.5 w-3.5" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2 ml-auto"
                    onClick={scrollToContact}
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Contact
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}