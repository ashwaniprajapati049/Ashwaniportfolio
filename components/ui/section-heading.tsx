'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  title: React.ReactNode;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
};

/** Shared title + description block, so every section opens the same way. */
export function SectionHeading({
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      <h2 className="h-section text-balance font-display font-bold">{title}</h2>

      {description && (
        <p className="text-balance mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
}
