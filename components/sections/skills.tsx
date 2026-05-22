"use client";

import { motion } from "framer-motion";

import {
  Sparkles,
  Code2,
  Layers3,
} from "lucide-react";

interface Skill {
  name: string;
  category: string;
  description: string;
  projects: string[];
  icon: string;
  bg: string;
  text: string;
}

const skills: Skill[] = [
  {
    name: "Java",

    category: "Backend",

    description:
      "Experienced in building scalable backend systems, object-oriented applications, and high-performance business logic using Java. Strong understanding of clean architecture, problem-solving, and efficient application development principles.",

    projects: [
      "Smart Dues Management System",
      "Real-Time Weather Monitoring",
      "Snake Game",
    ],

    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",

    bg: "#FAECE7",

    text: "#712B13",
  },

  {
    name: "Spring Boot",

    category: "Backend",

    description:
      "Skilled in developing secure and scalable REST APIs, backend services, and enterprise applications using Spring Boot with modern backend architecture and API-driven development practices.",

    projects: [
      "Authentication APIs",
      "Ezyhire Backend Services",
      "Smart Dues APIs",
    ],

    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",

    bg: "#E1F5EE",

    text: "#085041",
  },

  {
    name: "Angular",

    category: "Frontend",

    description:
      "Building responsive Angular applications, enterprise dashboards, and reusable UI systems with a strong focus on performance, scalability, and seamless user experience.",

    projects: [
      "Ezyhire AI Platform",
      "Control Room Dashboard",
      "Smart Dues UI",
    ],

    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",

    bg: "#FCEBEB",

    text: "#791F1F",
  },

  {
    name: "TypeScript",

    category: "Frontend",

    description:
      "Developing scalable frontend applications using TypeScript with clean code practices, reusable architecture, and maintainable component-driven development.",

    projects: [
      "Angular Applications",
      "Enterprise Dashboards",
      "API Integrations",
    ],

    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",

    bg: "#E6F1FB",

    text: "#0C447C",
  },

  {
    name: "C# & .NET",

    category: "Backend",

    description:
      "Worked on enterprise backend development using C# and .NET technologies, building APIs, automation workflows, and scalable business solutions within RPA and BPA environments.",

    projects: [
      "RPA Solutions",
      "BPA Workflows",
      "Enterprise Backend Systems",
    ],

    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",

    bg: "#EEEDFE",

    text: "#3C3489",
  },

  {
    name: "JavaScript",

    category: "Frontend",

    description:
      "Creating dynamic and interactive user interfaces with modern JavaScript concepts, frontend logic implementation, animations, and client-side functionality optimization.",

    projects: [
      "Interactive UI",
      "Frontend Logic",
      "Modern Web Interfaces",
    ],

    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",

    bg: "#FAEEDA",

    text: "#633806",
  },

  {
    name: "MySQL",

    category: "Database",

    description:
      "Experienced in relational database design, query optimization, and structured data management for scalable backend systems and enterprise-level applications.",

    projects: [
      "Student Records Management",
      "Receipt Management System",
      "Dues Database",
    ],

    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",

    bg: "#E1F5EE",

    text: "#085041",
  },

  {
    name: "HTML & CSS",

    category: "Frontend",

    description:
      "Building responsive layouts, modern UI components, and scalable design systems with a strong focus on clean aesthetics, accessibility, and responsive web design.",

    projects: [
      "Portfolio Website",
      "Responsive Components",
      "Modern UI Layouts",
    ],

    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",

    bg: "#FBEAF0",

    text: "#72243E",
  },
];

export function SkillSection() {
  return (
    <section
      id="skills"
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
          className="text-center mb-10"
        >
          <div>
 
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Skills & Technologies
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-muted-foreground">
            Technologies and tools I use to build
            scalable, modern, and high-performance
            applications with elegant user experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
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
                delay: index * 0.05,
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

              <div className="relative p-6">

                {/* Top */}
                <div className="flex items-start gap-4">

                  {/* Icon */}
                  <div
                    className="
                      w-14 h-14 rounded-2xl
                      border border-border
                      bg-white dark:bg-zinc-900
                      flex items-center justify-center
                      p-2.5 shrink-0
                      shadow-sm
                    "
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-2">
                      {skill.name}
                    </h3>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {skill.description}
                    </p>

                    {/* Category */}
                    <div className="flex items-center gap-2 mt-4">
                      <span
                        className="text-[11px] font-semibold px-3 py-1 rounded-full border"
                        style={{
                          background: skill.bg,
                          color: skill.text,
                          borderColor: `${skill.text}20`,
                        }}
                      >
                        {skill.category}
                      </span>

                      <span className="text-xs text-muted-foreground">
                        Used in real-world projects
                      </span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                {/* Projects */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Layers3 className="h-4 w-4 text-green-500" />

                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground">
                      Projects & Usage
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skill.projects.map((project) => (
                      <span
                        key={project}
                        className="
                          px-3 py-1
                          rounded-full
                          text-[11px]
                          font-medium
                          border border-border
                          bg-background/50
                          backdrop-blur-sm
                          hover:border-green-500/20
                          transition
                        "
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
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
            delay: 0.2,
          }}
          className="
            mt-14 text-center
            rounded-3xl border border-border
            bg-background/50
            backdrop-blur-sm
            p-8
          "
        >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 mb-5 shadow-lg shadow-green-500/10">
  <Code2 className="h-7 w-7 text-green-500" />
</div>

<h3 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
  Driven by Innovation & Continuous Growth
</h3>

<p className="mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-muted-foreground">
  Passionate about building impactful digital experiences through
  modern technologies, scalable architecture, and clean engineering practices.
  Constantly exploring new tools, AI-driven solutions, and advanced development
  approaches to create high-performance applications that solve real-world problems.
</p>
        </motion.div>
      </div>
    </section>
  );
}