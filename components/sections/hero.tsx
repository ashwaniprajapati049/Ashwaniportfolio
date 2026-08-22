'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ChevronDown,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { LeetCodeIcon } from '@/components/icons/leetcode';
import { TechPill } from '@/components/ui/tech-pill';
import { profile, stats, coreSkills } from '@/lib/data';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 md:pt-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="glow -left-32 top-0 h-[420px] w-[420px]" />
      <div className="glow -right-24 bottom-0 h-[360px] w-[360px] bg-emerald-400/10" />

      <div className="container relative z-10 max-w-6xl">
        <div className="mx-auto max-w-3xl">
          {/* ── Copy ─────────────────────────────────────────── */}
          <div className="text-center">
            <motion.h1
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="h-display text-balance font-display font-bold"
            >
              {profile.firstName} <span className="text-gradient">{profile.lastName}</span>
            </motion.h1>

            {/* min-h rather than a fixed height, so the longest role never clips mid-animation. */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-5 flex items-center justify-center gap-3"
            >
              <span className="flex min-h-[2.25rem] items-center text-lg font-medium text-foreground/75 sm:text-xl lg:text-2xl">
                <TypeAnimation
                  sequence={profile.roles.flatMap((role) => [role, 1600])}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor
                />
              </span>
            </motion.div>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-brand" />
                {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-brand"
              >
                <Mail className="h-4 w-4 text-brand" />
                {profile.email}
              </a>
            </motion.div>

            {/* CTAs */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-9 flex flex-wrap items-center justify-center gap-3"
            >
              <Button asChild size="lg" className="group rounded-full px-6">
                <Link href="/#projects">
                  View my work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="group rounded-full px-6"
              >
                <a href={profile.resume} target="_blank" rel="noopener noreferrer">
                  Download CV
                  <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </a>
              </Button>

              <div className="flex items-center gap-2">
                <Button
                  asChild
                  size="icon"
                  variant="ghost"
                  className="rounded-full border border-border hover:border-brand/40 hover:text-brand"
                >
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="icon"
                  variant="ghost"
                  className="rounded-full border border-border hover:border-brand/40 hover:text-brand"
                >
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="icon"
                  variant="ghost"
                  className="rounded-full border border-border hover:border-brand/40 hover:text-brand"
                >
                  <a
                    href={profile.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LeetCode"
                  >
                    <LeetCodeIcon className="h-[18px] w-[18px]" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Stats — a grid so they wrap cleanly on narrow phones */}
            <motion.dl
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-12 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col-reverse text-center"
                >
                  {/* Reversed visually so the number reads first, while the
                      markup keeps the label-then-value order assistive tech expects. */}
                  <dt className="mt-1 text-xs text-muted-foreground">{stat.label}</dt>
                  <dd className="font-display text-2xl font-bold md:text-3xl">
                    {stat.num}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

        </div>

        {/* Tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="marquee-mask mt-16 overflow-hidden"
        >
          {/* Duplicated once so the -50% translate loops seamlessly. */}
          <div className="flex w-max animate-marquee gap-3">
            {[...coreSkills, ...coreSkills].map((skill, i) => (
              <TechPill
                key={`${skill}-${i}`}
                label={skill}
                size="md"
                className="whitespace-nowrap px-4 py-2"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="/#about"
        aria-label="Scroll to about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-brand md:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </motion.a>
    </section>
  );
}
