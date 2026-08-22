/**
 * Hue lookup for technology pills.
 *
 * Pills are coloured through a single `--h` CSS variable (see `.tech-pill` in
 * globals.css) so one hue produces a readable chip in both light and dark mode.
 * Anything not listed falls back to a stable hash of the name, which keeps
 * colours consistent between renders without needing an entry per skill.
 */
const HUES: Record<string, number> = {
  java: 18,
  'spring boot': 122,
  spring: 122,
  angular: 352,
  typescript: 212,
  javascript: 45,
  'c#': 258,
  'c# & .net': 258,
  '.net': 258,
  mysql: 199,
  sql: 199,
  'rest apis': 212,
  'api integration': 212,
  html: 18,
  html5: 18,
  css: 212,
  css3: 212,
  'html & css': 18,
  'tailwind css': 190,
  git: 22,
  github: 240,
  swing: 275,
  jframe: 275,
  oop: 258,
  jdbc: 199,
  agile: 45,
  rpa: 285,
  bpa: 285,
  'ai integration': 165,
  authentication: 340,
  leadership: 40,
  teamwork: 40,
};

export function techHue(name: string): number {
  const key = name.trim().toLowerCase();
  if (key in HUES) return HUES[key];

  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 31 + key.charCodeAt(i)) % 360;
  }
  return hash;
}
