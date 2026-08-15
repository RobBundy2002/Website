export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  summary: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  reportUrl?: string;
  reportLabel?: string;
  dates?: string;
  image?: string;
  imageAlt?: string;
  tier: ProjectTier;
  route?: string;
  status?: string;
}

export type ProjectTier = 'featured' | 'substantial' | 'archive';

export const projects: Project[] = [
  {
    slug: 'northstar',
    title: 'Northstar',
    subtitle: 'Kubernetes Operations Platform',
    category: 'Platform Engineering / Developer Tooling',
    summary:
      'A Kubernetes operations cockpit for cluster debugging, observability, and guarded operational actions.',
    technologies: ['Kubernetes', 'Node.js', 'Prometheus', 'Docker', 'Helm', 'RBAC'],
    githubUrl: 'https://github.com/RobBundy2002/northstar',
    liveUrl: 'https://robbundy2002.github.io/northstar/',
    image: '/Website/assets/projects/northstar/overview.png',
    imageAlt: 'Northstar dashboard showing Kubernetes cluster health and workload status',
    tier: 'featured',
    route: '/projects/northstar',
    status: 'Interactive demo and local Kubernetes mode'
  },
  {
    slug: 'careerboard',
    title: 'CareerBoard',
    subtitle: 'Collaborative Job Search Platform',
    category: 'Full-Stack Product Engineering',
    summary:
      'A collaborative workspace for managing job applications, interviews, referrals, team activity, and analytics.',
    technologies: ['Node.js', 'Express', 'SQLite', 'Docker', 'JWT', 'GitHub Actions'],
    githubUrl: 'https://github.com/RobBundy2002/CareerBoard',
    liveUrl: 'https://robbundy2002.github.io/career/',
    image: '/Website/assets/projects/careerboard/dashboard.png',
    imageAlt: 'CareerBoard dashboard with application pipeline, interviews, analytics, and team activity',
    tier: 'featured',
    route: '/projects/careerboard',
    status: 'Static demo plus local read-write app'
  },
  {
    slug: 'ujlp',
    title: 'UJLP',
    subtitle: 'Digital Publication Platform',
    category: 'Production Web Platform',
    summary:
      "The production website and digital publication platform for UVA's Undergraduate Journal of Law & Politics.",
    technologies: ['React', 'React Router', 'Content Validation', 'GitHub Actions', 'GitHub Pages'],
    githubUrl: 'https://github.com/RobBundy2002/UJLP',
    liveUrl: 'https://ujlawandpolitics.org/',
    image: '/Website/assets/projects/ujlp/home-desktop.png',
    imageAlt: 'UJLP homepage for the Undergraduate Journal of Law and Politics',
    tier: 'featured',
    route: '/projects/ujlp',
    status: 'Production organizational website'
  },
  {
    slug: 'resumegpt',
    title: 'ResumeGPT',
    subtitle: 'Privacy-First Resume Match Analyzer',
    category: 'Frontend Architecture / Privacy',
    summary:
      'A browser-only resume and job-description analyzer with local parsing, deterministic matching, explainable scoring, and AI-ready prompt generation.',
    technologies: ['React', 'TypeScript', 'Vite', 'pdfjs-dist', 'Vitest', 'Playwright'],
    githubUrl: 'https://github.com/RobBundy2002/ResumeGPT',
    liveUrl: 'https://robbundy2002.github.io/ResumeGPT/',
    image: '/Website/assets/projects/resumegpt/screenshot.png',
    imageAlt: 'ResumeGPT interface for uploading a resume and comparing it to a job description',
    tier: 'featured',
    route: '/projects/resumegpt',
    status: 'Static privacy-first browser application'
  },
  {
    slug: 'aivestor',
    title: 'AI-Vestor',
    subtitle: 'Investment Analysis Platform',
    category: 'AI / Finance',
    summary: 'Investment analysis platform with market data, portfolio views, and model-driven finance workflows.',
    technologies: ['Python', 'TensorFlow', 'React', 'JavaScript'],
    githubUrl: 'https://github.com/RobBundy2002',
    dates: '2024 - 2025',
    image: '/Website/Images/AIVestor.png',
    imageAlt: 'AI-Vestor project screenshot',
    tier: 'substantial',
    route: '/projects/aivestor'
  },
  {
    slug: 'matrixmadness',
    title: 'Basketball Grid',
    subtitle: 'College Basketball Trivia Grid',
    category: 'Full-Stack Game',
    summary: 'College basketball trivia game with a React frontend, Express API, MongoDB persistence, and daily grid data.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
    githubUrl: 'https://github.com/RobBundy2002/BasketballGridProject',
    liveUrl: 'https://basketball-grid-project.vercel.app/',
    dates: 'Oct 2023 - Jan 2024',
    image: '/Website/Images/Hoop Grids.png',
    imageAlt: 'Basketball grid project screenshot',
    tier: 'substantial',
    route: '/projects/matrixmadness'
  },
  {
    slug: 'proverbialplates',
    title: 'Proverbial Plates',
    subtitle: 'Mobile Pantry App',
    category: 'Mobile Product',
    summary: 'Recipe recommendation app centered on ingredients a user already has available.',
    technologies: ['React Native', 'Expo', 'JavaScript'],
    dates: 'Oct 2023 - Jan 2024',
    image: '/Website/Images/Proverbial Plates.PNG',
    imageAlt: 'Proverbial Plates mobile app screenshot',
    tier: 'archive',
    route: '/projects/proverbialplates'
  },
  {
    slug: 'celestialarcade',
    title: 'Celestial Arcade',
    subtitle: 'Browser Game Collection',
    category: 'Hosted Web Experience',
    summary: 'Shared React arcade site for multiple browser games.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    liveUrl: 'https://robbundy2002.github.io/Gaming-Website-Project/',
    dates: '2023 - 2024',
    image: '/Website/Images/Celestial Arcade.png',
    imageAlt: 'Celestial Arcade project screenshot',
    tier: 'archive',
    route: '/projects/celestialarcade'
  },
  {
    slug: 'course-review',
    title: 'Course Review Application',
    subtitle: 'CRUD Application',
    category: 'Application Development',
    summary: 'Course review app focused on CRUD flows, data modeling, persistence, and usability.',
    technologies: ['Java', 'JavaFX', 'SQLite'],
    dates: '2023',
    image: '/Website/Images/Course Review App.png',
    imageAlt: 'Course Review Application screenshot',
    tier: 'archive',
    route: '/projects/course-review'
  },
  {
    slug: 'credit-approval',
    title: 'Credit Approval ML',
    subtitle: 'Applied Machine Learning Pipeline',
    category: 'Machine Learning',
    summary: 'UCI Credit Approval study comparing classical ML models after preprocessing and class balancing.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'SMOTE'],
    dates: '2024',
    image: '/Website/Images/ml.jpg',
    imageAlt: 'Machine learning project visual',
    tier: 'substantial',
    route: '/projects/credit-approval',
    reportUrl: '/Website/assets/reports/Machine_Learning_Final_Writeup.pdf',
    reportLabel: 'View ML Writeup'
  },
  {
    slug: 'cs1112site',
    title: 'CS1112 Website',
    subtitle: 'Course Publishing Site',
    category: 'Static Web Publishing',
    summary: 'Documentation-centered static site for course materials and student resources.',
    technologies: ['Jekyll', 'Markdown', 'HTML', 'CSS'],
    dates: '2025',
    image: '/Website/Images/CS1112 Website.png',
    imageAlt: 'CS1112 course website screenshot',
    tier: 'archive',
    route: '/projects/cs1112site'
  },
  {
    slug: 'wordle',
    title: 'Wordle App',
    subtitle: 'Desktop Game Recreation',
    category: 'Desktop Application',
    summary: 'JavaFX desktop recreation of Wordle with dictionary-backed guesses and tile feedback.',
    technologies: ['Java', 'JavaFX', 'FXML'],
    dates: '2023',
    image: '/Website/Images/Wordle Recreation.jpg',
    imageAlt: 'Wordle recreation screenshot',
    tier: 'archive',
    route: '/projects/wordle'
  },
  {
    slug: 'beneath-world-tree',
    title: 'Beneath the World Tree',
    subtitle: 'Unity Game Prototype',
    category: 'Game Development',
    summary: 'Team Unity prototype about escaping a colosseum with a magical shield instead of a sword.',
    technologies: ['Unity', 'C#', 'Game Design'],
    dates: '2026',
    image: '/Website/Images/Project.png',
    imageAlt: 'Beneath the World Tree game screenshot',
    tier: 'archive',
    route: '/projects/beneath-world-tree'
  },
  {
    slug: 'skyward-bound',
    title: 'Skyward Bound',
    subtitle: 'Vertical Platformer Prototype',
    category: 'Game Development',
    summary: 'Unity vertical platformer with power-ups, score progression, and precision movement.',
    technologies: ['Unity', 'C#'],
    dates: '2024',
    image: '/Website/Images/Skyward Bound.jpg',
    imageAlt: 'Skyward Bound game screenshot',
    tier: 'archive',
    route: '/projects/skyward-bound'
  },
  {
    slug: 'dracula-reborn',
    title: 'Dracula Reborn',
    subtitle: 'PICO-8 Action Demo',
    category: 'Game Development',
    summary: 'PICO-8 action game with pixel art, item collection, enemy behavior, and arcade controls.',
    technologies: ['PICO-8', 'Lua'],
    dates: '2024',
    image: '/Website/Images/DraculaReborn.png',
    imageAlt: 'Dracula Reborn game screenshot',
    tier: 'archive',
    route: '/projects/dracula-reborn'
  },
  {
    slug: 'vampire-frostbite',
    title: 'Vampire Frost Bite',
    subtitle: 'PICO-8 Game',
    category: 'Game Development',
    summary: 'PICO-8 retro action game built around exposure avoidance, resources, sprites, and sound.',
    technologies: ['PICO-8', 'Lua', 'Sprite Design'],
    dates: '2024',
    image: '/Website/Images/VampireFrostBite.png',
    imageAlt: 'Vampire Frost Bite game screenshot',
    tier: 'archive',
    route: '/projects/vampire-frostbite'
  },
  {
    slug: 'emoji-text',
    title: 'Emoji vs Text',
    subtitle: 'Human-Computer Interaction Study',
    category: 'HCI Research',
    summary:
      'Georgia Tech HCI study on sentiment classification when text and emoji cues agree, conflict, or appear without visual context.',
    technologies: ['Research Design', 'Data Analysis', 'HCI'],
    dates: '2026',
    image: '/Website/Images/Emoji.png',
    imageAlt: 'Emoji project visual',
    tier: 'substantial',
    route: '/projects/emoji-text',
    reportUrl: '/Website/assets/reports/ProjectWriteupGT.pdf',
    reportLabel: 'View Final Report'
  }
];

export const featuredProjects = projects.filter((project) => project.tier === 'featured');
export const substantialProjects = projects.filter((project) => project.tier === 'substantial');
export const archiveProjects = projects.filter((project) => project.tier === 'archive');
export const otherProjects = projects.filter((project) => project.tier !== 'featured');

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectNeighbors(slug: string) {
  const index = featuredProjects.findIndex((project) => project.slug === slug);
  return {
    previous: featuredProjects[(index - 1 + featuredProjects.length) % featuredProjects.length],
    next: featuredProjects[(index + 1) % featuredProjects.length]
  };
}
