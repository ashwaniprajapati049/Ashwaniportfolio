# Ashwani Prajapati — Portfolio

Personal portfolio of **Ashwani Prajapati**, a Software Engineer working with Java, Spring Boot, Angular and .NET in Bengaluru.

Built as a statically exported Next.js app: dark-first design, a single brand token driving the whole palette, and all content held in one data file.

## Tech stack

| Layer      | Choice                                      |
| ---------- | ------------------------------------------- |
| Framework  | Next.js 13 (App Router, static export)      |
| Language   | TypeScript                                  |
| Styling    | Tailwind CSS + CSS custom properties        |
| Components | shadcn/ui (Radix primitives)                |
| Motion     | Framer Motion                               |
| Fonts      | Inter (body) · Sora (display)               |
| Contact    | EmailJS                                     |

## Structure

```
app/
  layout.tsx        Metadata, OpenGraph, JSON-LD, theme provider, chrome
  page.tsx          Section composition
  globals.css       Design tokens + shared component classes
components/
  navbar.tsx        Sticky header, IntersectionObserver scroll spy
  footer.tsx
  sections/         hero · about · experiences · project · skills · contact
  ui/               shadcn primitives + section-heading, tech-pill, spotlight-card
lib/
  data.ts           Single source of truth for all portfolio content
  tech.ts           Hue lookup powering the technology pills
```

### Editing content

Nothing is hardcoded in the sections. Change a job, project, skill or link in
[`lib/data.ts`](lib/data.ts) and it updates everywhere it appears, including the
page metadata and structured data.

### Theming

The accent colour is one token. Change `--brand` in `app/globals.css` (light and
dark blocks) and the buttons, pills, glows, links and gradients all follow.

## Running locally

```bash
git clone https://github.com/ashwaniprajapati049/Ashwaniportfolio.git
cd Ashwaniportfolio
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # static export to ./out
npm run lint
```

### Contact form

The form posts through EmailJS. The IDs in `components/sections/contact.tsx`
fall back to working defaults, and can be overridden per deploy with:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

## Notes

- Fully responsive, light and dark themes, and honours `prefers-reduced-motion`.
- Keyboard accessible: skip link, focus-visible rings, labelled controls, `aria-invalid` form errors.
- SEO: OpenGraph/Twitter cards, canonical URL, robots directives and Person structured data.

## Contact

- Email — prajapatiashwani62@gmail.com
- GitHub — https://github.com/ashwaniprajapati049
- LinkedIn — https://www.linkedin.com/in/ashwani-prajapati-43744222a/

Licensed under the MIT License.
