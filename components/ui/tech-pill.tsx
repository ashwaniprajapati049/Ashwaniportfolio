import { cn } from '@/lib/utils';
import { techHue } from '@/lib/tech';

type TechPillProps = {
  label: string;
  size?: 'sm' | 'md';
  className?: string;
};

/**
 * A technology chip that derives its colour from the label itself. The hue is
 * passed down as a CSS variable so `.tech-pill` can pick light- or dark-mode
 * lightness values, rather than baking in one theme's palette.
 */
export function TechPill({ label, size = 'sm', className }: TechPillProps) {
  return (
    <span
      className={cn('tech-pill', size === 'md' && 'tech-pill-lg', className)}
      style={{ ['--h' as string]: techHue(label) }}
    >
      {label}
    </span>
  );
}
