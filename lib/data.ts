/**
 * Every piece of portfolio content lives here so a fact (a title, a date, a
 * link) is written once and reused by the sections, the metadata and the
 * structured-data block.
 */

export const profile = {
  name: 'Ashwani Prajapati',
  firstName: 'Ashwani',
  lastName: 'Prajapati',
  role: 'Software Engineer',
  headline: 'Full Stack Engineer',
  company: 'CA-One Tech',
  location: 'Bengaluru, India',
  email: 'prajapatiashwani62@gmail.com',
  phone: '+91 8815169427',
  phoneHref: 'tel:+918815169427',
  github: 'https://github.com/ashwaniprajapati049',
  linkedin: 'https://www.linkedin.com/in/ashwani-prajapati-43744222a/',
  leetcode: 'https://leetcode.com/u/prajapatiashwani/',
  /*
   * Direct-download endpoint rather than the /view preview page, so the
   * "Download CV" buttons actually download. The preview page for the same
   * file is:
   * https://drive.google.com/file/d/1UVXHhWmjkrNTdVBP0efDJbfTjF8xHWJs/view
   */
  resume:
    'https://drive.google.com/uc?export=download&id=1UVXHhWmjkrNTdVBP0efDJbfTjF8xHWJs',
  avatar:
    'https://res.cloudinary.com/dwciao4x3/image/upload/v1775745356/WhatsApp_Image_2026-04-09_at_8.03.56_PM_vwu0ja.jpg',
  siteUrl: 'https://ashwaniprajapati.vercel.app',
  summary:
    'I build scalable backend services with Java and Spring Boot, and the Angular interfaces that sit on top of them — currently on an AI-powered recruitment platform at CA-One Tech, Bengaluru.',
  bioShort:
    'Full Stack Engineer at CA-One Tech, building scalable applications, responsive Angular interfaces and modern backend systems with a strong focus on performance and user experience.',
  bioLong:
    'Full Stack Engineer at CA-One Tech, Bengaluru, focused on building scalable web applications, modern Angular dashboards and high-performance backend systems using Spring Boot. Before this I worked on enterprise RPA and BPA products with C# and .NET at Intellibuddies, and trained in web development at GeeksforGeeks — MANIT Bhopal. I care about clean architecture, readable code and interfaces that stay fast as they grow.',
  roles: [
    'Java & Spring Boot Developer',
    'Angular Frontend Engineer',
    '.NET Backend Engineer',
    'Full Stack Engineer',
  ],
};

export const stats = [
  { num: '1+', label: 'Years experience' },
  { num: '2', label: 'Companies' },
  { num: '4', label: 'Roles held' },
  { num: '10+', label: 'Technologies' },
];

export const education = {
  degree: 'B.Tech — Computer Science & Engineering',
  school: 'Radharaman Institute of Technology & Science, Bhopal',
  period: '2021 – 2025',
};

export const interests = [
  { icon: 'Trophy', label: 'Strategic Chess' },
  { icon: 'Brain', label: 'Problem Solving' },
  { icon: 'BookOpen', label: 'Technical Reading' },
  { icon: 'Lightbulb', label: 'Exploring New Ideas' },
];

export const coreSkills = [
  'Java',
  'Spring Boot',
  'Angular',
  'TypeScript',
  'JavaScript',
  'C#',
  '.NET',
  'MySQL',
  'REST APIs',
  'Tailwind CSS',
  'HTML5',
  'CSS3',
  'Git',
  'GitHub',
  'AI Integration',
  'Agile',
  'OOP',
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  logo: string;
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'CA-One Tech',
    location: 'Bengaluru, India',
    duration: 'Feb 2026 – Present',
    type: 'Full-time',
    current: true,
    summary:
      'Full Stack Engineer on Ezyhire, an AI-powered recruitment platform — building Angular dashboards and the Spring Boot services behind them.',
    highlights: [
      'Build responsive Angular dashboards and reusable UI components for the Ezyhire recruitment platform.',
      'Develop backend services and REST APIs in Java and Spring Boot, and integrate them with the frontend.',
      'Work on AI-driven candidate workflows that shorten the screening loop for recruiters.',
      'Profile and optimise application performance across both the UI and the API layer.',
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'Java',
      'Spring Boot',
      'REST APIs',
      'Tailwind CSS',
      'AI Integration',
    ],
    logo: 'https://res.cloudinary.com/dwciao4x3/image/upload/v1775746071/caone_logo_lvl3gk.png',
  },
  {
    role: 'Software Trainee',
    company: 'Intellibuddies — VIT Infotech',
    location: 'Bengaluru, India',
    duration: 'Mar 2025 – Jan 2026',
    type: 'Trainee',
    summary:
      'Worked on enterprise RPA and BPA products — Angular workflow interfaces backed by C# and .NET services.',
    highlights: [
      'Built Angular dashboards and workflow-management interfaces for automation products.',
      'Developed backend services in C# and .NET and wired them to the frontend over REST.',
      'Improved load and render performance across data-heavy control-room screens.',
      'Delivered in an Agile team with regular reviews and iterative releases.',
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'C#',
      '.NET',
      'REST APIs',
      'RPA',
      'BPA',
      'Agile',
    ],
    logo: 'https://res.cloudinary.com/dwciao4x3/image/upload/v1770383257/vit_infotech_logo_ukawu0.jpg',
  },
  {
    role: 'Web Development Intern',
    company: 'GeeksforGeeks — MANIT Bhopal',
    location: 'Bhopal, India',
    duration: 'Aug 2024 – Jan 2025',
    type: 'Internship',
    summary:
      'Intensive web-development training covering modern frontend fundamentals, responsive layout and core web technologies.',
    highlights: [
      'Completed a structured frontend curriculum covering HTML, CSS and JavaScript in depth.',
      'Built responsive websites and interactive UI components as graded project work.',
      'Practised version control and collaborative workflows with Git.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Git'],
    logo: 'https://res.cloudinary.com/dwciao4x3/image/upload/v1770383608/GG_Logo_tcir8i.png',
  },
  {
    role: 'Student Coordinator',
    company: 'Radharaman Institute of Technology & Science',
    location: 'Bhopal, India',
    duration: '2023 – 2024',
    type: 'Leadership',
    summary:
      'Organised technical events, workshops and student engagement programmes across the institute.',
    highlights: [
      'Planned and ran technical events and workshops end to end.',
      'Coordinated between faculty and students to keep initiatives on schedule.',
      'Handled communication, logistics and on-the-day operations for campus events.',
    ],
    technologies: [
      'Leadership',
      'Team Collaboration',
      'Communication',
      'Event Management',
      'Public Speaking',
    ],
    logo: 'https://res.cloudinary.com/dwciao4x3/image/upload/v1775745822/log_rgi_omhvjg.jpg',
  },
];

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  details: string;
  highlights: string[];
  technologies: string[];
  github: string;
  live?: string;
  hue: number;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 'smart-dues',
    title: 'Smart Dues Management System',
    tagline: 'Full stack platform',
    description:
      'A full-stack platform that digitises student dues, receipt verification and semester-wise tracking for an institution.',
    details:
      'A complete student dues management platform built with Java, Spring Boot and MySQL. It covers secure authentication, receipt verification, semester-wise dues tracking and separate admin and student dashboards, all served by a REST API designed to stay readable as the feature set grows.',
    highlights: [
      'Secure authentication with separate admin and student roles.',
      'Semester-wise dues tracking with receipt verification.',
      'REST API over MySQL with a normalised schema.',
      'Responsive dashboards for both roles.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'MySQL',
      'JDBC',
      'Authentication',
      'HTML',
      'CSS',
    ],
    github: 'https://github.com/ashwaniprajapati049',
    hue: 152,
    featured: true,
  },
  {
    id: 'weather-monitor',
    title: 'Real-Time Weather Monitoring',
    tagline: 'API & data processing',
    description:
      'A monitoring app that pulls live weather data and turns it into readable temperature, humidity and rainfall insight.',
    details:
      'Built in Java with third-party weather API integration. It fetches and processes live environmental data — temperature, humidity, rainfall and conditions — handles refresh cycles and failure cases, and presents the result in a clean, continuously updating view.',
    highlights: [
      'Live data pulled from a third-party weather API.',
      'Processing pipeline for temperature, humidity and rainfall.',
      'Scheduled refresh with graceful handling of API failures.',
    ],
    technologies: ['Java', 'REST APIs', 'API Integration', 'Data Processing', 'OOP'],
    github: 'https://github.com/ashwaniprajapati049',
    hue: 199,
  },
  {
    id: 'snake-game',
    title: 'Snake Game',
    tagline: 'Desktop application',
    description:
      'A desktop take on the classic — smooth movement, collision detection and live score tracking, written in Java.',
    details:
      'An interactive Snake game built with Java Swing using object-oriented design. It implements real-time movement, collision detection, keyboard controls, score management and timer-based rendering, with the game loop kept separate from the render layer.',
    highlights: [
      'Timer-driven game loop with smooth movement.',
      'Collision detection and score/state management.',
      'Keyboard controls with responsive input handling.',
    ],
    technologies: ['Java', 'Swing', 'JFrame', 'OOP', 'Event Handling'],
    github: 'https://github.com/ashwaniprajapati049',
    hue: 40,
  },
];

export type SkillCategory = 'Backend' | 'Frontend' | 'Database' | 'Tools';

export type Skill = {
  name: string;
  category: SkillCategory;
  level: string;
  description: string;
  usedIn: string[];
  icon: string;
};

export const skills: Skill[] = [
  {
    name: 'Java',
    category: 'Backend',
    level: 'Daily driver',
    description:
      'Scalable backend systems, object-oriented application design and business logic, with an eye on clean architecture.',
    usedIn: ['Smart Dues System', 'Weather Monitoring', 'Snake Game'],
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'Spring Boot',
    category: 'Backend',
    level: 'Daily driver',
    description:
      'Secure, scalable REST APIs and backend services built around API-first development practices.',
    usedIn: ['Ezyhire services', 'Authentication APIs', 'Smart Dues APIs'],
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  },
  {
    name: 'Angular',
    category: 'Frontend',
    level: 'Daily driver',
    description:
      'Responsive applications, enterprise dashboards and reusable component systems built for performance at scale.',
    usedIn: ['Ezyhire platform', 'Control room dashboard', 'Smart Dues UI'],
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    level: 'Daily driver',
    description:
      'Type-safe frontend architecture with reusable, component-driven patterns that stay maintainable.',
    usedIn: ['Angular applications', 'Enterprise dashboards', 'API layers'],
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'C# & .NET',
    category: 'Backend',
    level: 'Working knowledge',
    description:
      'Enterprise backend work — APIs, automation workflows and business services inside RPA and BPA products.',
    usedIn: ['RPA solutions', 'BPA workflows', 'Enterprise services'],
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    level: 'Daily driver',
    description:
      'Interactive interfaces, client-side logic and animation work with modern language features.',
    usedIn: ['Interactive UI', 'Frontend logic', 'Web interfaces'],
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'MySQL',
    category: 'Database',
    level: 'Working knowledge',
    description:
      'Relational schema design, query optimisation and structured data management for backend systems.',
    usedIn: ['Student records', 'Receipt management', 'Dues database'],
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'HTML & CSS',
    category: 'Frontend',
    level: 'Daily driver',
    description:
      'Responsive layouts and design systems with attention to accessibility and clean visual rhythm.',
    usedIn: ['Portfolio website', 'Responsive components', 'UI layouts'],
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    level: 'Working knowledge',
    description:
      'Utility-first styling with design tokens, dark mode and consistent spacing across a whole app.',
    usedIn: ['This portfolio', 'Ezyhire UI', 'Component libraries'],
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'Git & GitHub',
    category: 'Tools',
    level: 'Daily driver',
    description:
      'Branching workflows, pull-request reviews and collaborative development across teams.',
    usedIn: ['Every project', 'Team collaboration', 'Code reviews'],
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
];

export const navItems = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Experience', href: '/#experiences' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Contact', href: '/#contact' },
];
