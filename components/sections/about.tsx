'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Briefcase,
  GraduationCap,
  ChevronDown,
  Trophy,
  Brain,
  BookOpen,
  Lightbulb,
  Sparkles,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { LeetCodeIcon } from '@/components/icons/leetcode';
import { SectionHeading } from '@/components/ui/section-heading';
import { profile, education, interests } from '@/lib/data';

const ICONS = { Trophy, Brain, BookOpen, Lightbulb } as const;

/** Reusable card header: icon tile + title + one line of context. */
function CardHeader({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10">
        <Icon className="h-5 w-5 text-brand" />
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold leading-tight">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}

export function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="relative overflow-hidden py-16 md:py-20">
      <div className="glow left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2" />

      <div className="container relative z-10 max-w-6xl">
        <SectionHeading
          title={
            <>
              Engineering that holds up
              <span className="block text-gradient">as the product grows</span>
            </>
          }
          description="My background, the tools I reach for, and what keeps me interested in the work."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[340px_1fr]">
          {/* ── Profile column ───────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="surface overflow-hidden rounded-3xl">
              <div className="h-1.5 w-full bg-gradient-to-r from-brand via-emerald-400 to-brand" />

              <div className="flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:items-start sm:text-left">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-2 ring-brand/25">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold leading-tight tracking-tight">
                    {profile.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {profile.role} · {profile.headline}
                  </p>

                  <div className="mt-3 flex flex-wrap justify-center gap-x-3 gap-y-2 sm:justify-start">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-brand" />
                      {profile.location}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Briefcase className="h-3.5 w-3.5 shrink-0 text-brand" />
                      {profile.company}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rule mx-6 w-auto" />

              <div className="flex flex-col gap-3 p-6">
                <Button asChild className="w-full rounded-2xl">
                  <a href={profile.resume} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4 shrink-0" />
                    Download CV
                  </a>
                </Button>

                {/* Three across, so labels need the tighter text size to fit. */}
                <div className="grid grid-cols-3 gap-2">
                  <Button asChild variant="outline" className="rounded-2xl px-2 text-xs">
                    <a href={profile.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1.5 h-4 w-4 shrink-0" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-2xl px-2 text-xs">
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-1.5 h-4 w-4 shrink-0" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-2xl px-2 text-xs">
                    <a href={profile.leetcode} target="_blank" rel="noopener noreferrer">
                      <LeetCodeIcon className="mr-1.5 h-4 w-4 shrink-0" />
                      LeetCode
                    </a>
                  </Button>
                </div>

                <Button
                  asChild
                  variant="ghost"
                  className="h-auto w-full whitespace-normal rounded-2xl border border-border py-3 text-xs hover:border-brand/40 hover:bg-brand/5 hover:text-brand"
                >
                  <a href={`mailto:${profile.email}`}>
                    <Mail className="mr-2 h-4 w-4 shrink-0" />
                    <span className="break-all">{profile.email}</span>
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* ── Detail column ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Bio */}
            <div className="surface rounded-3xl p-6 md:p-7">
              <CardHeader
                icon={Sparkles}
                title="Professional bio"
                subtitle="Journey & experience"
              />

              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={expanded ? 'long' : 'short'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm leading-relaxed text-muted-foreground md:text-[15px]"
                >
                  {expanded ? profile.bioLong : profile.bioShort}
                </motion.p>
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
              >
                {expanded ? 'Read less' : 'Read more'}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
                />
              </button>
            </div>

            {/* Education + interests */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="surface rounded-3xl p-6 md:p-7">
                <CardHeader
                  icon={GraduationCap}
                  title="Education"
                  subtitle="Academic background"
                />
                <p className="font-medium leading-snug">{education.degree}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {education.school}
                </p>
                <span className="mt-4 inline-block rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                  {education.period}
                </span>
              </div>

              <div className="surface rounded-3xl p-6 md:p-7">
                <CardHeader
                  icon={Lightbulb}
                  title="Interests"
                  subtitle="Outside the editor"
                />
                <ul className="space-y-2.5">
                  {interests.map(({ icon, label }) => {
                    const Icon = ICONS[icon as keyof typeof ICONS];
                    return (
                      <li
                        key={label}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                          <Icon className="h-4 w-4 text-brand" />
                        </span>
                        {label}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
