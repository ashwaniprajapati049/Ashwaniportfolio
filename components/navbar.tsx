"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Menu,
  Moon,
  Sun,
  X,
  ArrowUpRight,
} from "lucide-react";

import { useTheme } from "next-themes";

const navItems = [
  { name: "Home", path: "/#" },
  { name: "About", path: "/#about" },
  { name: "Experience", path: "/#experiences" },
  { name: "Projects", path: "/#projects" },
  { name: "Skills", path: "/#skills" },
    { name: "Contact", path: "/#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] =
    useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const [mounted, setMounted] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("/#");

  const { theme, setTheme } = useTheme();

  // Navbar scroll effect
  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  // Active section scroll spy
  useEffect(() => {
    const sections = [
      "about",
      "projects",
      "skills",
      "experiences",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + 140;

      let current = "/#";

      sections.forEach((section) => {
        const element =
          document.getElementById(section);

        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition <
              offsetTop + height
          ) {
            current = `/#${section}`;
          }
        }
      });

      if (window.scrollY < 120) {
        current = "/#";
      }

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "py-3"
            : "py-5"
        )}
      >
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div
            className={cn(
              `
                flex items-center justify-between
                rounded-2xl
                border border-white/10
                px-5 md:px-6
                transition-all duration-300
              `,
              isScrolled
                ? `
                  h-16
                  bg-background/70
                  backdrop-blur-xl
                  shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                  dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                `
                : `
                  h-16
                  bg-background/40
                  backdrop-blur-md
                `
            )}
          >
            {/* Logo */}
            <Link
              href="/#"
              className="group flex items-center gap-3"
            >
              <div
                className="
                  flex items-center justify-center
                  w-11 h-11 rounded-2xl
                  bg-green-500
                  text-white
                  font-bold text-sm
                  shadow-lg shadow-green-500/20
                "
              >
                AP
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold tracking-tight">
                  Ashwani Prajapati
                </p>

                <p className="text-[11px] text-muted-foreground">
                  Software Engineer
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                const isActive =
                  activeSection === item.path;

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      `
                        relative px-4 py-2
                        rounded-full
                        text-sm font-medium
                        transition-all duration-300
                      `,
                      isActive
                        ? "text-green-600 dark:text-green-400"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-pill"
                        className="
                          absolute inset-0
                          rounded-full
                          bg-green-500/10
                          border border-green-500/20
                        "
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.5,
                        }}
                      />
                    )}

                    <span className="relative z-10">
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                onClick={() =>
                  setTheme(
                    theme === "dark"
                      ? "light"
                      : "dark"
                  )
                }
                className="
                  rounded-xl
                  hover:bg-green-500/10
                  hover:text-green-600
                "
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              {/* Mobile Menu */}
              <Button
                variant="ghost"
                size="icon"
                className="
                  lg:hidden
                  rounded-xl
                  hover:bg-green-500/10
                  hover:text-green-600
                "
                onClick={() =>
                  setIsMobileMenuOpen(
                    !isMobileMenuOpen
                  )
                }
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed top-[88px] left-4 right-4 z-40
              lg:hidden
            "
          >
            <div
              className="
                rounded-3xl
                border border-white/10
                bg-background/80
                backdrop-blur-2xl
                shadow-[0_10px_40px_rgba(0,0,0,0.15)]
                overflow-hidden
              "
            >
              <div className="p-4">
                {navItems.map(
                  (item, index) => {
                    const isActive =
                      activeSection ===
                      item.path;

                    return (
                      <motion.div
                        key={item.path}
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay:
                            index * 0.05,
                        }}
                      >
                        <Link
                          href={item.path}
                          onClick={() =>
                            setIsMobileMenuOpen(
                              false
                            )
                          }
                          className={cn(
                            `
                              flex items-center justify-between
                              rounded-2xl
                              px-4 py-3
                              text-sm font-medium
                              transition-all duration-300
                            `,
                            isActive
                              ? `
                                bg-green-500/10
                                text-green-600
                                dark:text-green-400
                              `
                              : `
                                text-muted-foreground
                                hover:bg-green-500/5
                                hover:text-foreground
                              `
                          )}
                        >
                          {item.name}

                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </motion.div>
                    );
                  }
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}