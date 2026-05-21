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
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  ChevronRight,
  Briefcase,
  Sparkles,
} from "lucide-react";

import Image from "next/image";

const GITHUB_URL =
  "https://github.com/ashwaniprajapati049";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/ashwani-prajapati-43744222a/";

type Experience = {
  role: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string;
  technologies: string[];
  companyLogo: string;
  bg: string;
  text: string;
  current?: boolean;
};

const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "CA-One Tech",
    location: "Bengaluru, India",
    duration: "Feb 2025 – Present",
    type: "Full-time",
    current: true,
    description:
      "Working as a Frontend Engineer, developing scalable and user-friendly web applications. Responsible for building dynamic UI components, optimizing performance, and integrating APIs while collaborating with backend teams to deliver seamless enterprise experiences.",
    technologies: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
    ],
    companyLogo:
      "https://res.cloudinary.com/dwciao4x3/image/upload/v1775746071/caone_logo_lvl3gk.png",
    bg: "#E1F5EE",
    text: "#085041",
  },

  {
    role: "Software Trainee",
    company: "Intellibuddies – VIT Infotech",
    location: "Bhopal, India",
    duration: "Mar 2024 – Jan 2025",
    type: "Trainee",
    description:
      "Worked on enterprise dashboards using Angular and TypeScript. Integrated frontend with APIs and contributed to backend logic using C# and .NET technologies in Agile development environments.",
    technologies: [
      "Angular",
      "TypeScript",
      "C#",
      ".NET",
      "REST APIs",
    ],
    companyLogo:
      "https://res.cloudinary.com/dwciao4x3/image/upload/v1770383257/vit_infotech_logo_ukawu0.jpg",
    bg: "#E6F1FB",
    text: "#0C447C",
  },

  {
    role: "Web Development Intern",
    company:
      "GeeksforGeeks – MANIT Bhopal",
    location: "Bhopal, India",
    duration: "2024",
    type: "Internship",
    description:
      "Completed hands-on Web Development training and built responsive frontend interfaces with practical projects focused on modern UI design and frontend architecture.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Web Development",
    ],
    companyLogo:
      "https://res.cloudinary.com/dwciao4x3/image/upload/v1770383608/GG_Logo_tcir8i.png",
    bg: "#FAECE7",
    text: "#712B13",
  },

  {
    role: "Student Coordinator",
    company:
      "Radharaman Institute of Technology & Science",
    location: "Bhopal, India",
    duration: "2023 – 2024",
    type: "Volunteer",
    description:
      "Organized technical and academic events while coordinating between faculty and students to ensure smooth execution of college initiatives and collaborative activities.",
    technologies: [
      "Leadership",
      "Communication",
      "Coordination",
      "Teamwork",
    ],
    companyLogo:
      "https://res.cloudinary.com/dwciao4x3/image/upload/v1775745822/log_rgi_omhvjg.jpg",
    bg: "#EEEDFE",
    text: "#3C3489",
  },
];

export function ExperienceSection() {
  const [selected, setSelected] =
    useState<Experience | null>(null);

  const scrollToContact = () => {
    setSelected(null);

    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 200);
  };

  return (
    <section
      id="experiences"
      className="
        relative overflow-hidden
        py-20 md:py-28
        bg-gradient-to-b
        from-background
        via-background
        to-green-500/5
      "
    >
      {/* Background Glow */}
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
            Work Experience
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-muted-foreground">
            Building scalable applications,
            crafting modern interfaces,
            and delivering impactful digital
            experiences across startups
            and enterprise teams.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-[32px] top-0 bottom-0 w-px bg-gradient-to-b from-green-500/40 via-border to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                }}
                className="flex gap-5 md:gap-8"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex pt-8 relative">
                  <div
                    className={`
                      w-4 h-4 rounded-full border-4 z-10
                      ${
                        exp.current
                          ? "bg-green-500 border-green-500 shadow-[0_0_0_6px_rgba(34,197,94,0.15)]"
                          : "bg-background border-border"
                      }
                    `}
                  />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    group relative overflow-hidden
                    flex-1 rounded-3xl
                    border border-white/10
                    bg-gradient-to-br
                    from-white/70
                    to-white/40
                    dark:from-zinc-900/80
                    dark:to-zinc-950/60
                    backdrop-blur-xl
                    shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                    dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                    hover:border-green-500/30
                    transition-all duration-300
                  "
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-green-500/5 via-transparent to-emerald-500/5" />

                  <div className="relative p-6 md:p-7">

                    {/* Top */}
                    <div className="flex items-start justify-between gap-4">

                      {/* Left */}
                      <div className="flex gap-4">

                        {/* Logo */}
                        <div
                          className="
                            w-14 h-14 rounded-2xl
                            bg-white dark:bg-zinc-900
                            border border-border
                            flex items-center justify-center
                            shadow-sm shrink-0
                          "
                        >
                          <Image
                            src={exp.companyLogo}
                            alt={exp.company}
                            width={50}
                            height={50}
                            className="object-contain p-1"
                          />
                        </div>

                        {/* Info */}
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                              {exp.role}
                            </h3>

                            {exp.current && (
                              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
                                CURRENT
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2 mt-1">
                            <Briefcase className="h-3.5 w-3.5 text-muted-foreground" />

                            <p className="text-sm font-medium text-muted-foreground">
                              {exp.company}
                            </p>
                          </div>

                          <div className="flex flex-wrap items-center gap-3 mt-3 text-[12px] text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              {exp.duration}
                            </span>

                            <span className="flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5" />
                              {exp.location}
                            </span>

                            <span
                              className="px-2.5 py-1 rounded-full font-medium border"
                              style={{
                                background: exp.bg,
                                color: exp.text,
                                borderColor: `${exp.text}20`,
                              }}
                            >
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Desktop Button */}
                      <Button
                        size="sm"
                        variant="outline"
                        className="
                          hidden md:flex
                          rounded-full
                          gap-1.5
                          hover:border-green-500/30
                          hover:bg-green-500/5
                          hover:text-green-600
                        "
                        onClick={() =>
                          setSelected(exp)
                        }
                      >
                        Details
                        <ChevronRight className="h-3.5 w-3.5" />
                      </Button>
                    </div>

                    {/* Divider */}
                    <div className="my-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                    {/* Description */}
                    <p className="text-sm md:text-[15px] leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>

                    {/* Bottom */}
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map(
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
                                backdrop-blur-sm
                                hover:border-green-500/30
                                transition
                              "
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>

                      {/* Mobile Button */}
                      <Button
                        size="sm"
                        className="
                          md:hidden
                          rounded-full
                          bg-green-600
                          hover:bg-green-700
                          text-white
                        "
                        onClick={() =>
                          setSelected(exp)
                        }
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <Dialog
            open={!!selected}
            onOpenChange={() =>
              setSelected(null)
            }
          >
            <DialogContent className="sm:max-w-[650px] rounded-3xl overflow-hidden border border-border p-0">
              {/* Accent Line */}
              <div
                className="h-1.5 w-full"
                style={{
                  background:
                    selected.text,
                }}
              />

              <div className="p-7">

                {/* Header */}
                <DialogHeader className="mb-7">
                  <div className="flex items-start gap-4">

                    {/* Logo */}
                    <div className="w-16 h-16 rounded-2xl border border-border bg-white dark:bg-zinc-900 overflow-hidden flex items-center justify-center shrink-0">
                      <Image
                        src={
                          selected.companyLogo
                        }
                        alt={
                          selected.company
                        }
                        width={56}
                        height={56}
                        className="object-contain p-1"
                      />
                    </div>

                    {/* Info */}
                    <div>
                      <DialogTitle className="text-2xl font-semibold tracking-tight">
                        {selected.role}
                      </DialogTitle>

                      <p className="text-sm text-muted-foreground mt-1">
                        {
                          selected.company
                        }
                      </p>

                      <div className="flex flex-wrap items-center gap-3 mt-4 text-[12px] text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {
                            selected.duration
                          }
                        </span>

                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {
                            selected.location
                          }
                        </span>
                      </div>
                    </div>
                  </div>

                  <DialogDescription className="pt-6 text-sm md:text-[15px] leading-relaxed text-muted-foreground">
                    {
                      selected.description
                    }
                  </DialogDescription>
                </DialogHeader>

                {/* Technologies */}
                <div className="mb-8">
                  <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-muted-foreground mb-4">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {selected.technologies.map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-medium border"
                          style={{
                            background:
                              selected.bg,
                            color:
                              selected.text,
                            borderColor: `${selected.text}20`,
                          }}
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 border-t border-border pt-6">

                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full gap-2"
                  >
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full gap-2"
                  >
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>

                  <Button
                    onClick={
                      scrollToContact
                    }
                    className="
                      ml-auto rounded-full
                      bg-green-600
                      hover:bg-green-700
                      text-white
                      gap-2
                    "
                  >
                    <Mail className="h-4 w-4" />
                    Contact Me
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