export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  assetUrl?: string;
  assetLabel?: string;
  dates?: string;
  image?: string;
  imageAlt?: string;
  featured: boolean;
  route?: string;
  status?: string;
}

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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
    route: '/projects/resumegpt',
    status: 'Static privacy-first browser application'
  },
  {
    slug: 'aivestor',
    title: 'AI-Vestor',
    subtitle: 'Investment Analysis Experiment',
    category: 'AI / Data Product',
    summary: 'Market-analysis project exploring portfolio scoring, visualization, and ML-backed finance workflows.',
    technologies: ['Python', 'Machine Learning', 'React', 'JavaScript'],
    image: '/Website/Images/AIVestor.png',
    imageAlt: 'AI-Vestor project screenshot',
    featured: false,
    route: '/projects/aivestor'
  },
  {
    slug: 'matrixmadness',
    title: 'Basketball Grid Project',
    subtitle: 'Sports Grid Game',
    category: 'Full-Stack / Game Product',
    summary: 'College basketball grid game with interactive scoring, sports logic, and social-friendly play.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/Website/Images/Hoop Grids.png',
    imageAlt: 'Basketball grid project screenshot',
    featured: false,
    route: '/projects/matrixmadness'
  },
  {
    slug: 'proverbialplates',
    title: 'Proverbial Plates',
    subtitle: 'Mobile Pantry App',
    category: 'Mobile Product',
    summary: 'Recipe recommendation app centered on ingredients a user already has available.',
    technologies: ['React Native', 'Expo', 'JavaScript'],
    image: '/Website/Images/Proverbial Plates.PNG',
    imageAlt: 'Proverbial Plates mobile app screenshot',
    featured: false,
    route: '/projects/proverbialplates'
  },
  {
    slug: 'celestialarcade',
    title: 'Celestial Arcade',
    subtitle: 'Hosted Browser Game Collection',
    category: 'Hosted Web Experience',
    summary: 'A hosted arcade-style collection of lightweight browser games and demos.',
    technologies: ['React', 'JavaScript', 'CSS'],
    image: '/Website/Images/Celestial Arcade.png',
    imageAlt: 'Celestial Arcade project screenshot',
    featured: false,
    route: '/projects/celestialarcade'
  },
  {
    slug: 'course-review',
    title: 'Course Review Application',
    subtitle: 'CRUD Application',
    category: 'Application Development',
    summary: 'Course review app focused on CRUD flows, data modeling, persistence, and usability.',
    technologies: ['Java', 'JavaFX', 'SQL'],
    image: '/Website/Images/Course Review App.png',
    imageAlt: 'Course Review Application screenshot',
    featured: false,
    route: '/projects/course-review'
  },
  {
    slug: 'credit-approval',
    title: 'Credit Approval ML',
    subtitle: 'Applied Machine Learning Pipeline',
    category: 'Machine Learning',
    summary: 'Structured-data ML pipeline for feature engineering, model evaluation, and approval prediction.',
    technologies: ['Python', 'Scikit-learn', 'Pandas'],
    image: '/Website/Images/ml.jpg',
    imageAlt: 'Machine learning project visual',
    featured: false,
    route: '/projects/credit-approval',
    assetUrl: '/Website/assets/reports/Machine_Learning_Final_Writeup.pdf',
    assetLabel: 'View ML Writeup'
  },
  {
    slug: 'cs1112site',
    title: 'CS1112 Website',
    subtitle: 'Course Publishing Site',
    category: 'Static Web Publishing',
    summary: 'Documentation-centered static site for course materials and student resources.',
    technologies: ['Jekyll', 'Markdown', 'HTML', 'CSS'],
    image: '/Website/Images/CS1112 Website.png',
    imageAlt: 'CS1112 course website screenshot',
    featured: false,
    route: '/projects/cs1112site'
  },
  {
    slug: 'wordle',
    title: 'Wordle App',
    subtitle: 'Desktop Game Recreation',
    category: 'Desktop Application',
    summary: 'Wordle-style desktop game with JavaFX UI, game-state logic, and a custom interaction loop.',
    technologies: ['Java', 'JavaFX', 'FXML'],
    image: '/Website/Images/Wordle Recreation.jpg',
    imageAlt: 'Wordle recreation screenshot',
    featured: false,
    route: '/projects/wordle'
  },
  {
    slug: 'beneath-world-tree',
    title: 'Beneath the World Tree',
    subtitle: 'Unity Exploration Prototype',
    category: 'Game Development',
    summary: 'Team Unity prototype focused on traversal, environmental puzzles, and level flow.',
    technologies: ['Unity', 'C#', 'Game Design'],
    image: '/Website/Images/Project.png',
    imageAlt: 'Beneath the World Tree game screenshot',
    featured: false,
    route: '/projects/beneath-world-tree'
  },
  {
    slug: 'skyward-bound',
    title: 'Skyward Bound',
    subtitle: 'Vertical Platformer Prototype',
    category: 'Game Development',
    summary: 'Arcade platformer prototype with vertical movement, score loops, and platform generation.',
    technologies: ['Unity', 'C#'],
    image: '/Website/Images/Skyward Bound.jpg',
    imageAlt: 'Skyward Bound game screenshot',
    featured: false,
    route: '/projects/skyward-bound'
  },
  {
    slug: 'dracula-reborn',
    title: 'Dracula Reborn',
    subtitle: 'PICO-8 Action Demo',
    category: 'Game Development',
    summary: 'Compact fantasy-console action demo with pixel art, arcade controls, and game-loop design.',
    technologies: ['PICO-8', 'Lua'],
    image: '/Website/Images/DraculaReborn.png',
    imageAlt: 'Dracula Reborn game screenshot',
    featured: false,
    route: '/projects/dracula-reborn'
  },
  {
    slug: 'vampire-frostbite',
    title: 'Vampire Frost Bite',
    subtitle: 'PICO-8 Game',
    category: 'Game Development',
    summary: 'Small-scope PICO-8 title using custom sprites, sound, and encounter rules.',
    technologies: ['PICO-8', 'Lua', 'Sprite Design'],
    image: '/Website/Images/VampireFrostBite.png',
    imageAlt: 'Vampire Frost Bite game screenshot',
    featured: false,
    route: '/projects/vampire-frostbite'
  },
  {
    slug: 'attempt11',
    title: 'Attempt 11',
    subtitle: 'Data Analysis Project Writeup',
    category: 'Data Analysis / Course Project',
    summary:
      'A data-analysis project documented through a final report covering the project approach, methodology, results, and reflections.',
    technologies: ['Data Analysis', 'Research', 'Technical Writing'],
    image: '/Website/Images/ml.jpg',
    imageAlt: 'Machine learning project visual used for the Attempt 11 writeup',
    featured: false,
    route: '/projects/attempt11',
    assetUrl: '/Website/assets/reports/ProjectWriteupGT.pdf',
    assetLabel: 'View Final Report'
  },
  {
    slug: 'emoji-text',
    title: 'Emojis vs Text',
    subtitle: 'Communication Study',
    category: 'Human-Computer Interaction',
    summary: 'Course project exploring communication, interpretation, and interface-mediated expression.',
    technologies: ['Research', 'HCI', 'Analysis'],
    image: '/Website/Images/Emoji.png',
    imageAlt: 'Emoji project visual',
    featured: false,
    route: '/projects/emoji-text'
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);

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
