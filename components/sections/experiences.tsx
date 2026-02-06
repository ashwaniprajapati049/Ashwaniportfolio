"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  GitlabIcon as GitHub,
  Linkedin,
  Mail,
  Calendar,
  X,
} from "lucide-react";
import Image from "next/image";

// Define the type for an experience
type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
  companyLogo: string;
  color: string;
};

const experiences = [
  {
    role: "SDE Trainee",
    company: "Intellibuddies – VIT Infotech",
    duration: "Mar 2025 - Jan 2026",
    description:
      "Worked on enterprise-level control room dashboards, developing responsive UI components using Angular and TypeScript. Integrated frontend with backend APIs and contributed to backend logic using C# and .NET. Actively participated in Agile ceremonies including sprint planning, stand-ups, and code reviews.",
    technologies: [
      "Angular",
      "TypeScript",
      "HTML",
      "CSS",
      "C#",
      ".NET",
      "REST APIs",
    ],
    companyLogo:
      "https://res.cloudinary.com/dwciao4x3/image/upload/v1770383257/vit_infotech_logo_ukawu0.jpg",
    color: "from-blue-500 to-indigo-600",
  },
  {
    role: "Web Development Trainee",
    company: "GeeksforGeeks (GFG) – MANIT Bhopal",
    duration: "2024",
    description:
      "Completed hands-on Web Development training covering frontend and backend fundamentals. Worked on building responsive web interfaces, understanding core web technologies, and implementing practical projects as part of structured training.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Web Development",
      "Problem Solving",
    ],
    companyLogo:
      "https://res.cloudinary.com/dwciao4x3/image/upload/v1770383608/GG_Logo_tcir8i.png",
    color: "from-green-600 to-emerald-700",
  },
  {
    role: "Java Developer Trainee",
    company: "CodSoft",
    duration: "2024",
    description:
      "Completed hands-on Java development training with a strong focus on core Java concepts such as OOP, collections, exception handling, and problem-solving. Built mini-projects and practiced real-world coding scenarios.",
    technologies: [
      "Java",
      "OOP",
      "Collections",
      "Exception Handling",
      "Problem Solving",
    ],
    companyLogo:
      "https://res.cloudinary.com/dwciao4x3/image/upload/v1770383175/codsoft_o2rcjl.jpg",
    color: "from-emerald-500 to-teal-600",
  },

  {
    role: "Student Coordinator",
    company: "Radharaman Institute of Technology & Science",
    duration: "2023 – 2024",
    description:
      "Served as a student coordinator, assisting in organizing academic and technical activities, coordinating between faculty and students, and supporting smooth execution of college-level events and initiatives.",
    technologies: [
      "Leadership",
      "Communication",
      "Event Coordination",
      "Team Collaboration",
    ],
    companyLogo:
      "https://res.cloudinary.com/dwciao4x3/image/upload/v1770383649/images_q7zyls.jpg",
    color: "from-purple-600 to-indigo-700",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);

  return (
   <section
  id="experiences"
  className="py-24 min-h-screen bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800"
>

      <div className="container px-4 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <motion.div variants={cardVariants} className="text-center mb-12">
            <h2  className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Work Experience
            </h2>
           <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A selection of my recent professional roles where I have grown my
              skills and worked on exciting projects.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                variants={cardVariants}
                whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
                className="w-full max-w-sm"
              >
                <Card
                  className={`p-6 bg-gradient-to-br ${experience.color} shadow-xl rounded-lg h-full flex flex-col justify-between transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
                  onClick={() => setSelectedExperience(experience)}
                >
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 relative rounded-full overflow-hidden bg-white p-1">
                        <Image
                          src={experience.companyLogo}
                          alt={experience.company}
                          layout="fill"
                          // objectFit="cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {experience.role}
                        </h3>
                        <p className="text-sm text-gray-200">
                          {experience.company}
                        </p>
                        <p className="text-sm text-gray-200">
                          {experience.duration}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-100 mb-4">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-auto">
                    <Button
                      variant="secondary"
                      className="flex-1 bg-white text-gray-800 hover:bg-gray-200"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white text-gray-800 border-white/70 hover:bg-gray-900 hover:text-white"
                    >
                      <GitHub className="h-5 w-5" />
                    </Button>

                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white text-gray-800 border-white/70 hover:bg-gray-900 hover:text-white"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>

                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white text-gray-800 border-white/70 hover:bg-gray-900 hover:text-white"
                    >
                      <Mail className="h-5 w-5" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedExperience(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={`bg-gradient-to-br ${selectedExperience.color} p-8 rounded-lg shadow-2xl max-w-2xl w-full`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {selectedExperience.role}
                  </h2>
                  <p className="text-xl text-gray-200">
                    {selectedExperience.company}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="
    bg-white
    text-gray-800
    border-white/70
    hover:bg-gray-900
    hover:text-white
    transition-colors
  "
                  onClick={() => setSelectedExperience(null)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <p className="text-gray-100 mb-4">
                {selectedExperience.description}
              </p>
              <p className="text-gray-200 mb-4">
                {selectedExperience.duration}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedExperience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-end space-x-4">
                <Button
                  variant="secondary"
                  className="bg-white text-gray-800 hover:bg-gray-200"
                >
                  <GitHub className="mr-2 h-5 w-5" />
                  View Project
                </Button>
                <Button
                  variant="secondary"
                  className="bg-white text-gray-800 hover:bg-gray-200"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
