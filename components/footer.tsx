"use client";

import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer
      className="
        w-full border-t border-border
        bg-gradient-to-b
        from-background
        to-green-500/5
      "
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold tracking-tight">
              Ashwani Prajapati
            </h3>

            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Software Engineer · Java · Spring Boot · Angular
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2 mt-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-green-500" />

              Bengaluru, Karnataka, India
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col items-center text-sm text-muted-foreground gap-3">

            {/* Phone */}
            <a
              href="tel:+918815169427"
              className="
                flex items-center gap-2
                hover:text-green-600
                dark:hover:text-green-400
                transition-colors
              "
            >
              <Phone className="h-4 w-4 text-green-500" />

              +91 8815169427
            </a>

            {/* Email */}
            <a
              href="mailto:prajapatiashwani62@gmail.com"
              className="
                flex items-center gap-2
                hover:text-green-600
                dark:hover:text-green-400
                transition-colors
              "
            >
              <Mail className="h-4 w-4 text-green-500" />

              prajapatiashwani62@gmail.com
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">

            {/* GitHub */}
            <Button
              variant="outline"
              size="icon"
              asChild
              className="
                rounded-2xl
                border-border
                hover:border-green-500/30
                hover:bg-green-500/5
                hover:text-green-600
                transition-all duration-300
              "
            >
              <a
                href="https://github.com/ashwaniprajapati049"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>

            {/* LinkedIn */}
            <Button
              variant="outline"
              size="icon"
              asChild
              className="
                rounded-2xl
                border-border
                hover:border-green-500/30
                hover:bg-green-500/5
                hover:text-green-600
                transition-all duration-300
              "
            >
              <a
                href="https://www.linkedin.com/in/ashwani-prajapati-43744222a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>

            {/* Email */}
            <Button
              variant="outline"
              size="icon"
              asChild
              className="
                rounded-2xl
                border-border
                hover:border-green-500/30
                hover:bg-green-500/5
                hover:text-green-600
                transition-all duration-300
              "
            >
              <a
                href="mailto:prajapatiashwani62@gmail.com"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 pt-5 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ashwani Prajapati.
            Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}