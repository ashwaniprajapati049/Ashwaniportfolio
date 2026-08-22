import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="glow left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2" />

      <div className="relative z-10 text-center">
        <p className="font-display text-[6rem] font-bold leading-none text-gradient sm:text-[9rem]">
          404
        </p>
        <h1 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
          The link may be outdated, or the page moved somewhere else.
        </p>

        <Button asChild className="group mt-8 rounded-full px-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to the portfolio
          </Link>
        </Button>
      </div>
    </section>
  );
}
