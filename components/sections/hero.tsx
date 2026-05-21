"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, ChevronDown } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Green glow top-left */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      
      {/* Green glow bottom-right */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-500/8 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 z-10 max-w-4xl">
        <div className="flex flex-col items-center text-center">
 
          {/* <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Open to opportunities
          </motion.div> */}

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
          >
            Ashwani{" "}
            <span className="text-green-600 dark:text-green-400">Prajapati</span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6 h-[36px] flex items-center"
          >
            <TypeAnimation
              sequence={[
                "Java Spring Boot Developer",
                1500,
                "Angular Frontend Engineer",
                1500,
                ".NET Backend Engineer",
                1500,
                "Full Stack Engineer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed mb-10"
          >
            Building enterprise-grade web applications with clean architecture.
            Currently at{" "}
            <span className="text-foreground font-medium">CA-One Tech</span>,
            Bengaluru.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-14"
          >
            <Link href="/#projects">
              <Button size="lg" className="group bg-green-600 hover:bg-green-700 text-white rounded-full px-6">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1HVuTCTX8wUFEttt3ZmEBlVoA4w-h3SCD/view?usp=drive_link"
              target="_blank"
            >
              <Button size="lg" variant="outline" className="rounded-full px-6 group">
                Download CV
                <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-8 mb-14"
          >
            {[
              { num: "1+", label: "Years experience" },
              { num: "2", label: "Companies" },
              { num: "3+", label: "Projects built" },
              { num: "6+", label: "Technologies" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-2xl font-bold text-foreground">{stat.num}</span>
                <span className="text-xs text-muted-foreground mt-0.5">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-4"
          >
            <Link
              href="https://github.com/ashwaniprajapati049"
              target="_blank"
              className="p-2 rounded-full border border-border hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 transition-colors text-muted-foreground"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ashwani-prajapati-43744222a/"
              target="_blank"
              className="p-2 rounded-full border border-border hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 transition-colors text-muted-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <span className="text-xs text-muted-foreground">
              prajapatiashwani62@gmail.com
            </span>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-muted-foreground">Scroll</span>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </motion.div>

    </section>
  );
}