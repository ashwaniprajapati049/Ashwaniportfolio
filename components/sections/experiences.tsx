'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronDown, Check } from 'lucide-react';

import { SectionHeading } from '@/components/ui/section-heading';
import { TechPill } from '@/components/ui/tech-pill';
import { experiences } from '@/lib/data';

export function ExperienceSection() {
  // The current role starts open; the rest expand on demand.
  const [open, setOpen] = useState<string | null>(
    experiences.find((e) => e.current)?.company ?? null
  );

  return (
    <section id="experiences" className="relative overflow-hidden py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.4]" />
      <div className="glow right-0 top-1/4 h-[420px] w-[420px]" />

      <div className="container relative z-10 max-w-5xl">
        <SectionHeading
          title="Where I've worked"
          description="Enterprise products, automation platforms and campus teams — the roles that shaped how I build."
        />

        <div className="relative mt-12">
          {/* Timeline spine */}
          <div className="absolute bottom-0 left-[19px] top-2 hidden w-px bg-gradient-to-b from-brand/50 via-border to-transparent sm:block" />

          <div className="space-y-5">
            {experiences.map((exp, i) => {
              const isOpen = open === exp.company;

              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative sm:pl-16"
                >
                  {/* Timeline node */}
                  <span
                    className={`absolute left-[13px] top-8 hidden h-3.5 w-3.5 rounded-full border-2 sm:block ${
                      exp.current
                        ? 'animate-pulse-ring border-brand bg-brand'
                        : 'border-border bg-background'
                    }`}
                  />

                  <div className="surface surface-lift overflow-hidden rounded-3xl">
                    {/* Header — the whole row toggles the detail panel */}
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : exp.company)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start gap-4 p-5 text-left md:p-6"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-white dark:bg-zinc-900">
                        <Image
                          src={exp.logo}
                          alt=""
                          width={44}
                          height={44}
                          className="object-contain p-1"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-semibold tracking-tight md:text-lg">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="rounded-full border border-brand/25 bg-brand/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand">
                              Current
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-sm font-medium text-muted-foreground">
                          {exp.company}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            {exp.duration}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5" />
                            {exp.location}
                          </span>
                          <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 font-medium">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <ChevronDown
                        className={`mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-brand' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-6 md:px-6">
                            <div className="rule mb-5" />

                            <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                              {exp.summary}
                            </p>

                            <ul className="mt-5 space-y-2.5">
                              {exp.highlights.map((point) => (
                                <li key={point} className="flex gap-3 text-sm leading-relaxed">
                                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                                  <span className="text-muted-foreground">{point}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="mt-6 flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <TechPill key={tech} label={tech} />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
