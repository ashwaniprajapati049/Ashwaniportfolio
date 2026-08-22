'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers3, Sparkles } from 'lucide-react';

import { SectionHeading } from '@/components/ui/section-heading';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { techHue } from '@/lib/tech';
import { skills, type SkillCategory } from '@/lib/data';

const FILTERS: Array<SkillCategory | 'All'> = [
  'All',
  'Backend',
  'Frontend',
  'Database',
  'Tools',
];

export function SkillSection() {
  const [filter, setFilter] = useState<SkillCategory | 'All'>('All');

  const visible = useMemo(
    () => (filter === 'All' ? skills : skills.filter((s) => s.category === filter)),
    [filter]
  );

  return (
    <section id="skills" className="relative overflow-hidden py-16 md:py-20">
      <div className="glow left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2" />

      <div className="container relative z-10 max-w-6xl">
        <SectionHeading
          title={
            <>
              The stack I <span className="text-gradient">reach for</span>
            </>
          }
          description="Tools I use day to day, and where each one has actually earned its place."
        />

        {/*
         * Segmented control: one recessed track with a raised highlight that
         * slides between options, rather than a solid pill per item.
         */}
        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Filter skills by category"
            className="inline-flex max-w-full gap-1 overflow-x-auto rounded-full border border-border bg-secondary/60 p-1 backdrop-blur-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {FILTERS.map((f) => {
              const active = filter === f;
              const count =
                f === 'All' ? skills.length : skills.filter((s) => s.category === f).length;

              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f)}
                  className={`relative shrink-0 whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-medium transition-colors sm:px-4 sm:text-sm ${
                    active ? 'text-brand' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {active && (
                    /*
                     * Brand tint rather than a solid background: it reads as
                     * "highlighted" against the track in both light and dark
                     * mode, where a plain background colour would sink in one.
                     */
                    <motion.span
                      layoutId="skill-filter-highlight"
                      className="absolute inset-0 rounded-full border border-brand/40 bg-brand/20 shadow-sm"
                      transition={{ type: 'spring', bounce: 0.18, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 inline-flex items-center gap-1.5">
                    {f}
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold tabular-nums transition-colors ${
                        active
                          ? 'bg-brand/25 text-brand'
                          : 'bg-foreground/[0.07] text-muted-foreground'
                      }`}
                    >
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill cards */}
        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <SpotlightCard
                  className="h-full"
                  style={{ ['--h' as string]: techHue(skill.name) }}
                >
                  <div className="flex h-full flex-col p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-white p-2.5 dark:bg-zinc-900">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={skill.icon}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-semibold leading-tight tracking-tight">
                          {skill.name}
                        </h3>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {skill.category} · {skill.level}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {skill.description}
                    </p>

                    <div className="mt-5">
                      <div className="mb-2.5 flex items-center gap-1.5">
                        <Layers3 className="h-3.5 w-3.5 text-brand" />
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          Used in
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {skill.usedIn.map((use) => (
                          <span
                            key={use}
                            className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[11px] text-muted-foreground"
                          >
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Closing note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="surface mt-14 rounded-3xl p-8 text-center md:p-10"
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10">
            <Sparkles className="h-7 w-7 text-brand" />
          </div>

          <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            Still adding to the list
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            I pick up whatever the problem needs — most recently AI-assisted workflows
            and performance profiling on data-heavy dashboards. The constant is caring
            about architecture that stays readable long after the first release.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
