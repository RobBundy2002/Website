export interface ProjectMetric {
  label: string;
  value: string;
  note?: string;
}

export interface ProjectSectionContent {
  title: string;
  body?: string[];
  bullets?: string[];
}

export interface ProjectContent {
  intro: string[];
  role?: string;
  metrics?: ProjectMetric[];
  sections: ProjectSectionContent[];
  features?: string[];
  learned?: string[];
}

export const projectContent: Record<string, ProjectContent> = {
  matrixmadness: {
    intro: [
      'Basketball Grid is a college basketball trivia game built around a 3x3 grid. Players fill each cell with a player who matches both the school row and the statistical or career category column.',
      'The project used a real frontend/backend split: a React app for the game board and search workflow, plus an Express API backed by MongoDB for storing generated matrices.'
    ],
    role: 'Frontend developer on the original team; implemented the grid interaction model and worked across the React game flow.',
    metrics: [
      { label: 'Commits', value: '124', note: 'Verified from the public GitHub repository.' },
      { label: 'Structure', value: 'Frontend + backend', note: 'React client and Express/MongoDB API live in separate folders.' },
      { label: 'Grid', value: '3 x 3', note: 'Daily matrices combine three schools with three stat/category prompts.' }
    ],
    sections: [
      {
        title: 'Gameplay',
        bullets: [
          '3x3 college basketball answer grid.',
          'Search-driven player entry for each cell.',
          'Answer validation against generated player sets.',
          'Cookies preserve guesses until midnight.',
          'Completion state displays a win message after all nine cells are filled.'
        ]
      },
      {
        title: 'Engineering',
        bullets: [
          'React frontend built with Create React App, React Router, styled-components, and js-cookie.',
          'Express backend exposes `/api/matrix` routes and connects to MongoDB through Mongoose.',
          'Matrix generation selects schools and categories, filters player data for valid answers, and stores the resulting grid document.',
          'The deployed frontend and backend were split across Vercel/Render-era URLs in the source history.'
        ]
      },
      {
        title: 'Current Status',
        body: [
          'The repository remains public and the GitHub page lists a Vercel deployment. The source currently hardcodes a January 16, 2025 matrix fetch while the dynamic date-based fetch is commented out, so the portfolio describes the implementation without implying active daily production support.'
        ]
      }
    ],
    features: ['3x3 grid board', 'Player autocomplete', 'Validated answers', 'MongoDB matrix records', 'Cookie-backed guesses']
  },
  aivestor: {
    intro: [
      'AI-Vestor was an investment analysis platform combining Python-based analysis work with a React interface for market and portfolio views.',
      'The legacy project page identifies the work as an intelligent investment analysis platform using AI for market insights and portfolio optimization, with Rob focused heavily on the frontend and visualization components.'
    ],
    role: 'Lead developer; designed the core ML pipeline, integrated data sources, and implemented visualization components with Grant Costello.',
    sections: [
      {
        title: 'Product Surface',
        bullets: [
          'Investment analysis dashboard for reviewing market signals.',
          'Portfolio-oriented visualizations for comparing analysis output.',
          'Frontend views built to make finance data easier to inspect outside a notebook.'
        ]
      },
      {
        title: 'Engineering',
        bullets: [
          'Python analysis workflow with TensorFlow listed in the legacy project technology stack.',
          'React frontend for the visible product surface.',
          'API/data-source integration was part of the original project role description.'
        ]
      },
      {
        title: 'Boundaries',
        body: [
          'The portfolio does not claim model performance, trading returns, or current production deployment because those details are not available in the Website repository.'
        ]
      }
    ],
    features: ['Market insight views', 'Portfolio visualizations', 'Python analysis workflow', 'React UI']
  },
  'credit-approval': {
    intro: [
      'Applied machine learning project using the UCI Credit Approval dataset to classify credit application outcomes.',
      'The dataset has 690 entries and 15 attributes with a binary approval label. The work focused on preprocessing, feature handling, class balancing, model comparison, and a final writeup.'
    ],
    role: 'Built the data pipeline and modeling experiments for a University of Virginia machine learning assignment.',
    metrics: [
      { label: 'Best accuracy', value: '93.56%', note: 'Random Forest in legacy results.' },
      { label: 'Rows', value: '690', note: 'UCI Credit Approval dataset.' },
      { label: 'Models', value: '4', note: 'KNN, Decision Tree, Linear SVM, Random Forest.' }
    ],
    sections: [
      {
        title: 'Research Question',
        body: [
          'Can classical supervised learning models predict approval status from mixed categorical and numeric applicant attributes after cleaning and balancing the dataset?'
        ]
      },
      {
        title: 'Approach',
        bullets: [
          'Handled missing values.',
          'Encoded categorical fields.',
          'Normalized numeric features.',
          'Balanced classes with SMOTE.',
          'Evaluated models with cross-validation and classification metrics.'
        ]
      },
      {
        title: 'Models and Results',
        bullets: [
          'KNN: 92.31% accuracy.',
          'Decision Tree: 93.49% accuracy.',
          'Linear SVM: 55.12% accuracy.',
          'Random Forest: 93.56% accuracy.',
          'Using the top four features still reached 89.39% accuracy with Decision Tree and 93.22% with Random Forest.'
        ]
      },
      {
        title: 'Interpretation',
        body: [
          'The non-linear models performed much better than the linear SVM on this feature set. The strongest features recorded in the older page were years employed, credit score, income, and prior default status.'
        ]
      }
    ],
    features: ['Missing-value handling', 'Categorical encoding', 'SMOTE balancing', 'Model comparison', 'Final PDF report']
  },
  'emoji-text': {
    intro: [
      'Georgia Tech HCI study on how people interpret emotional sentiment in short digital messages when text and emoji cues agree, conflict, or appear as text only.',
      'Fifty participants classified message valence, rated confidence, and produced reaction-time data across congruent, contradictory, and control conditions.'
    ],
    role: 'Author and researcher.',
    metrics: [
      { label: 'Participants', value: '50' },
      { label: 'Congruent accuracy', value: '94.6%' },
      { label: 'Contradictory accuracy', value: '68.6%' }
    ],
    sections: [
      {
        title: 'Research Question',
        body: [
          'When text and emoji sentiment conflict, how do recipients resolve the mismatch, and does the visual cue change accuracy, confidence, or reaction time?'
        ]
      },
      {
        title: 'Experimental Design',
        bullets: [
          '30 stimuli split across congruent, contradictory, and text-only control conditions.',
          'Participants judged message valence.',
          'Confidence was recorded on a five-point scale.',
          'Reaction time was recorded for each classification.',
          'Stimuli were validated by independent raters before the experiment.'
        ]
      },
      {
        title: 'Findings',
        bullets: [
          'Congruent messages had 94.6% mean accuracy.',
          'Contradictory messages had 68.6% mean accuracy.',
          'Contradictory trials produced longer reaction times and lower confidence.',
          '31.4% of contradictory responses were misclassified, with errors mostly following emoji valence.'
        ]
      },
      {
        title: 'Interpretation',
        body: [
          'The result supports the study framing around dual coding theory and visual salience: when emotional channels conflict, emoji valence can bias interpretation rather than acting as a neutral add-on to text.'
        ]
      }
    ],
    features: ['Congruent condition', 'Contradictory condition', 'Control condition', 'Accuracy', 'Reaction time', 'Confidence']
  },
  proverbialplates: {
    intro: [
      'A mobile pantry app built with React Native and Expo that recommends recipes based on ingredients users already have.',
      'Rob worked on the app flow, storage behavior, and ingredient-match recipe ranking.'
    ],
    features: ['Pantry inventory', 'Ingredient-match recommendation logic', 'Recipe browsing', 'Mobile UI flow'],
    learned: ['Working through a mobile-first product flow in React Native and Expo.'],
    sections: []
  },
  celestialarcade: {
    intro: [
      'Built as a single React arcade for several browser games, giving them a shared interface and visual identity.',
      'Rob implemented the UI, game wrappers, and deployment pipeline for the hosted site.'
    ],
    features: ['Shared arcade shell', 'Browser game cards', 'Responsive layout', 'GitHub Pages deployment'],
    learned: ['Packaging smaller games into one hosted React site made the older work easier to browse.'],
    sections: []
  },
  'course-review': {
    intro: [
      'Desktop application for managing and reviewing course feedback, built in Java and JavaFX for UVA CS3140.',
      'Rob worked on the UI, database interactions, course search, and review flows with Matthew Crowe and Patrick Williamson.'
    ],
    features: ['Create/read/update/delete flows', 'Course search', 'Review entry', 'SQLite persistence', 'JavaFX desktop UI'],
    sections: []
  },
  cs1112site: {
    intro: [
      'Static course website for CS1112 materials and student resources.',
      'The project is included as teaching-support and course-publishing work, tied to Rob’s Head TA/course administration experience.'
    ],
    features: ['Course materials', 'Documentation pages', 'Student resources', 'Static publishing workflow'],
    sections: []
  },
  wordle: {
    intro: [
      'Earlier JavaFX desktop recreation of Wordle with a dictionary and the familiar guess-feedback loop.',
      'Rob built the JavaFX UI and the game-state logic for guesses, tile feedback, and end states.'
    ],
    features: ['Guess input flow', 'Tile feedback', 'Dictionary-backed validation', 'Win/loss handling', 'Desktop UI state'],
    sections: []
  },
  'beneath-world-tree': {
    intro: [
      'Team Unity prototype where the player is trapped in a colosseum without a sword and has to survive using a magical shield.',
      'Rob was the lead Unity developer, implementing the core gameplay loop, level design, sound integration, and UI systems with Michelle Jones, Sameen Shaik, Hao Sun, and Omer Mirza.'
    ],
    features: ['Shield-centered combat', 'Colosseum escape setup', 'Unity scenes', 'C# gameplay scripts', 'Team production'],
    sections: []
  },
  'skyward-bound': {
    intro: [
      'Unity vertical platformer with dynamic difficulty, power-ups, and precision-based scoring.',
      'Rob implemented C# gameplay systems and level-design mechanics with Kathleen Mead and Hayden Johnson at UVA.'
    ],
    features: ['Vertical platforming', 'Power-ups', 'Score progression', 'C# movement systems', 'Level mechanics'],
    sections: []
  },
  'dracula-reborn': {
    intro: [
      'PICO-8 action game with pixel art, arcade controls, item collection, and single-room challenges.',
      'Rob implemented the player controls, enemy behavior, and core gameplay mechanics.'
    ],
    features: ['PICO-8 cartridge constraints', 'Lua game loop', 'Enemy behavior', 'Item collection', 'Pixel-art presentation'],
    sections: []
  },
  'vampire-frostbite': {
    intro: [
      'PICO-8 retro action game mixing arcade and strategy elements through exposure avoidance and resource management.',
      'Rob implemented the game mechanics, item interactions, sprites, sound, and UI in Lua.'
    ],
    features: ['Exposure avoidance', 'Resource management', 'Item interactions', 'Custom sprites', 'Sound design'],
    sections: []
  }
};
