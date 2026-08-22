'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Check, FolderGit2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { SectionHeading } from '@/components/ui/section-heading';
import { TechPill } from '@/components/ui/tech-pill';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { projects, profile, type Project } from '@/lib/data';

export function ProjectSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative overflow-hidden py-16 md:py-20">
      <div className="glow left-0 top-1/3 h-[440px] w-[440px]" />

      <div className="container relative z-10 max-w-6xl">
        <SectionHeading
          title={
            <>
              Things I&apos;ve <span className="text-gradient">built</span>
            </>
          }
          description="Backend systems, API integrations and desktop applications — each one solving a problem end to end."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={project.featured ? 'md:col-span-2' : ''}
            >
              <SpotlightCard
                className="flex h-full flex-col"
                style={{ ['--h' as string]: project.hue }}
              >
                {/* Accent rail, tinted per project */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: `hsl(${project.hue} 62% 45%)` }}
                />

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold"
                      style={{
                        background: `hsl(${project.hue} 62% 45% / 0.12)`,
                        color: `hsl(${project.hue} 62% 38%)`,
                      }}
                    >
                      <FolderGit2 className="h-3.5 w-3.5" />
                      {project.tagline}
                    </span>

                    {project.featured && (
                      <span className="rounded-full border border-brand/25 bg-brand/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug tracking-tight md:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <TechPill key={tech} label={tech} />
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="rounded-full border border-border bg-secondary px-3 py-1 text-[11px] font-medium text-muted-foreground">
                        +{project.technologies.length - 6}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
                    <Button
                      variant="outline"
                      className="group/btn rounded-full"
                      onClick={() => setSelected(project)}
                    >
                      Case study
                      <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Button>

                    <Button asChild size="icon" variant="ghost" className="rounded-full border border-border">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} source on GitHub`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>

                    {project.live && (
                      <Button asChild size="icon" variant="ghost" className="rounded-full border border-border">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live demo`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Link out to the rest of the work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center"
        >
          <Button asChild variant="ghost" className="group rounded-full text-muted-foreground hover:text-brand">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              More on GitHub
              <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Case study dialog */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-h-[85vh] w-[95vw] overflow-y-auto rounded-3xl p-0 sm:max-w-[680px]">
          {selected && (
            <>
              <div
                className="p-6 md:p-8"
                style={{ background: `hsl(${selected.hue} 62% 45% / 0.1)` }}
              >
                <DialogHeader className="space-y-3 text-left">
                  <span
                    className="w-fit rounded-full px-3 py-1 text-[11px] font-semibold"
                    style={{
                      background: `hsl(${selected.hue} 62% 45% / 0.18)`,
                      color: `hsl(${selected.hue} 62% 34%)`,
                    }}
                  >
                    {selected.tagline}
                  </span>
                  <DialogTitle className="font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                    {selected.title}
                  </DialogTitle>
                </DialogHeader>
              </div>

              <div className="p-6 md:p-8">
                <DialogDescription className="text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                  {selected.details}
                </DialogDescription>

                <div className="mt-7">
                  <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    What it does
                  </p>
                  <ul className="space-y-2.5">
                    {selected.highlights.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7">
                  <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Built with
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selected.technologies.map((tech) => (
                      <TechPill key={tech} label={tech} size="md" />
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row">
                  <Button asChild variant="outline" className="rounded-full">
                    <a href={selected.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View source
                    </a>
                  </Button>
                  {selected.live && (
                    <Button asChild className="rounded-full">
                      <a href={selected.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
