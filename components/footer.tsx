"use client"

import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-foreground">
              Ashwani Prajapati
            </h3>
            <p className="text-sm text-muted-foreground">
              Software Engineer | Java • Spring Boot • Angular
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Bengaluru, Karnataka, India
            </p>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a
                href="tel:+918815169427"
                className="hover:text-primary transition-colors"
              >
                +91 8815169427
              </a>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:prajapatiashwani62@gmail.com"
                className="hover:text-primary transition-colors"
              >
                prajapatiashwani62@gmail.com
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/ashwaniprajapati049"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/ashwani-prajapati-43744222a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <a
                href="mailto:prajapatiashwani62@gmail.com"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Line
        <div className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ashwani Prajapati. All rights reserved.
        </div> */}
      </div>
    </footer>
  )
}
