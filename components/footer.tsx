'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { LeetCodeIcon } from '@/components/icons/leetcode';
import { profile, navItems } from '@/lib/data';

const SOCIALS = [
  { icon: Github, href: profile.github, label: 'GitHub' },
  { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
  { icon: LeetCodeIcon, href: profile.leetcode, label: 'LeetCode' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
];

const CONTACT = [
  { icon: Mail, value: profile.email, href: `mailto:${profile.email}`, breakAll: true },
  { icon: MapPin, value: profile.location, href: undefined, breakAll: false },
];

/** Small uppercase column label. */
function ColumnLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </h3>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="glow -bottom-40 left-1/2 h-[400px] w-[500px] -translate-x-1/2 opacity-60" />

      {/* Extra bottom padding on mobile so the floating back-to-top control
          never sits on top of the copyright line. */}
      <div className="container relative z-10 max-w-6xl pb-24 pt-10 sm:pb-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1.1fr] md:gap-10">
          {/* ── Identity ─────────────────────────────────────── */}
          <div>
            <Link href="/#home" className="inline-flex items-center gap-3">
              <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl ring-2 ring-brand/30">
                <Image
                  src={profile.avatar}
                  alt=""
                  fill
                  sizes="40px"
                  className="object-cover object-top"
                />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                {profile.name}
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {profile.headline} building scalable backend services and the interfaces
              that sit on top of them.
            </p>

            <div className="mt-5 flex gap-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <Button
                  key={label}
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-2xl hover:border-brand/40 hover:bg-brand/5 hover:text-brand"
                >
                  <a
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* ── Navigation ───────────────────────────────────── */}
          <nav aria-label="Footer">
            <ColumnLabel>Navigate</ColumnLabel>

            {/* Two columns on phones so six links cost three rows, not six. */}
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3 md:grid-cols-1 md:gap-y-0.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 py-1.5 text-sm text-muted-foreground transition-colors hover:text-brand"
                  >
                    {item.name}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Contact ──────────────────────────────────────── */}
          <div>
            <ColumnLabel>Get in touch</ColumnLabel>

            <ul className="mt-4 space-y-1">
              {CONTACT.map(({ icon: Icon, value, href, breakAll }) => {
                const body = (
                  <>
                    <Icon className="h-4 w-4 shrink-0 text-brand" />
                    <span className={breakAll ? 'break-all' : ''}>{value}</span>
                  </>
                );

                return (
                  <li key={value}>
                    {href ? (
                      <a
                        href={href}
                        className="flex items-center gap-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-brand"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="flex items-center gap-2.5 py-1.5 text-sm text-muted-foreground">
                        {body}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="rule my-7" />

        <div className="flex flex-col items-center justify-between gap-2 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>Built with Next.js, Tailwind CSS &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
