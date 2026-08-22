'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Menu, Moon, Sun, X, ArrowUpRight, Download } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { navItems, profile } from '@/lib/data';

const SECTION_IDS = navItems.map((item) => item.href.replace('/#', ''));

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState('home');

  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /*
   * Scroll spy via IntersectionObserver rather than measuring offsets on every
   * scroll event — the browser does the work off the main thread, and the
   * top-most intersecting section wins so overlapping sections stay stable.
   */
  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Keep the page behind the mobile sheet from scrolling.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close the sheet on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          isScrolled ? 'py-2.5' : 'py-4'
        )}
      >
        <div className="container max-w-6xl">
          <nav
            className={cn(
              'flex h-16 items-center justify-between rounded-2xl border px-4 transition-all duration-300 md:px-5',
              isScrolled
                ? 'surface border-border/70'
                : 'border-transparent bg-background/30 backdrop-blur-md'
            )}
          >
            {/* Brand */}
            <Link href="/#home" className="flex items-center gap-3">
              <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl shadow-lg shadow-brand/20 ring-2 ring-brand/30">
                <Image
                  src={profile.avatar}
                  alt=""
                  fill
                  sizes="40px"
                  priority
                  className="object-cover object-top"
                />
              </span>
              <span className="hidden sm:block">
                <span className="block text-sm font-semibold leading-tight tracking-tight">
                  {profile.name}
                </span>
                <span className="block text-[11px] text-muted-foreground">
                  {profile.role}
                </span>
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => {
                const id = item.href.replace('/#', '');
                const isActive = active === id;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                      isActive ? 'text-brand' : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full border border-brand/20 bg-brand/10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1.5">
              <Button
                asChild
                size="sm"
                className="hidden rounded-full md:inline-flex"
              >
                <a href={profile.resume} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-1.5 h-3.5 w-3.5" />
                  Resume
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="rounded-xl hover:bg-brand/10 hover:text-brand"
              >
                {/*
                 * Reserve the slot before hydration so the header never shifts;
                 * `resolvedTheme` (not `theme`) is what makes the first click
                 * behave correctly when the theme is still "system".
                 */}
                {!mounted ? (
                  <span className="h-5 w-5" />
                ) : resolvedTheme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
                className="rounded-xl hover:bg-brand/10 hover:text-brand lg:hidden"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-x-4 top-[84px] z-50 lg:hidden"
            >
              <div className="surface overflow-hidden rounded-3xl p-3">
                {navItems.map((item, i) => {
                  const isActive = active === item.href.replace('/#', '');

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={cn(
                          'flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition-colors',
                          isActive
                            ? 'bg-brand/10 text-brand'
                            : 'text-muted-foreground hover:bg-brand/5 hover:text-foreground'
                        )}
                      >
                        {item.name}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  );
                })}

                <Button asChild className="mt-2 w-full rounded-2xl">
                  <a href={profile.resume} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download resume
                  </a>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
