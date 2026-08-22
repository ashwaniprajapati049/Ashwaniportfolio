'use client';

import { useCallback } from 'react';
import { cn } from '@/lib/utils';

type SpotlightCardProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Card that tracks the pointer and feeds its position to the `.spotlight`
 * gradient as CSS variables. Writing to style directly (rather than through
 * React state) keeps the effect off the render path.
 */
export function SpotlightCard({ className, children, ...props }: SpotlightCardProps) {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    target.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        'spotlight surface surface-lift group relative overflow-hidden rounded-3xl',
        className
      )}
      {...props}
    >
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
