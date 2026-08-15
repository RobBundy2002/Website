import { ExternalLink, FileText } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ProjectScreenshot } from '../../components/project/ProjectScreenshot';
import { TechnologyList } from '../../components/project/TechnologyList';
import { Seo } from '../../components/ui/Seo';
import { featuredProjects, getProject } from '../../data/projects';

const featuredSlugs = new Set(featuredProjects.map((project) => project.slug));

const projectDetails: Record<
  string,
  {
    overview: string;
    problem: string;
    built: string[];
    engineering: string[];
    outcome: string;
  }
> = {
  aivestor: {
    overview:
      'AI-Vestor explores how market data, portfolio scoring, and visual analysis can be combined into a more structured investment-research workflow.',
    problem:
      'Investment research often spreads across watchlists, news, charts, spreadsheets, and rough intuition. The project focuses on turning that workflow into a product surface with analysis and comparison built in.',
    built: [
      'Market-insight interface for reviewing investment signals and portfolio information.',
      'Visualization-oriented workflow for comparing assets and analysis outputs.',
      'ML-backed experimentation around financial analysis and portfolio scoring.'
    ],
    engineering: [
      'Python and machine-learning workflow for analysis experiments.',
      'React interface for making the analysis easier to inspect.',
      'Product framing around decision support rather than raw notebook output.'
    ],
    outcome:
      'The project demonstrates applied AI/product thinking around finance workflows, especially turning model outputs into a usable interface.'
  },
  matrixmadness: {
    overview:
      'Basketball Grid Project is a sports-grid game built around college basketball knowledge, interactive scoring, and repeatable gameplay.',
    problem:
      'Sports trivia games work best when the rules are immediately understandable and the feedback loop is fast. This project turns team and player knowledge into a grid-based challenge.',
    built: [
      'Interactive grid UI for selecting answers and progressing through a board.',
      'Sports-domain logic for validating answers and scoring play.',
      'Responsive game surface designed for quick rounds and social sharing.'
    ],
    engineering: [
      'React frontend for the grid interaction model.',
      'Node.js backend work for game/data behavior.',
      'MongoDB-oriented persistence model from the original project architecture.'
    ],
    outcome:
      'The project shows full-stack product work in a domain where interface speed, validation, and game-state clarity matter.'
  },
  proverbialplates: {
    overview:
      'Proverbial Plates is a mobile pantry app that recommends recipes from ingredients a user already has.',
    problem:
      'Recipe discovery often starts from what someone wants to cook, but a pantry-first workflow starts from what is already available and reduces waste.',
    built: [
      'Mobile-first ingredient and recipe workflow.',
      'Recipe recommendation concept based on available pantry items.',
      'Interface patterns for browsing, selecting, and acting on recipe ideas.'
    ],
    engineering: [
      'React Native and Expo application structure.',
      'Stateful mobile UI flows for ingredient-driven recommendations.',
      'Product design focused on everyday household utility.'
    ],
    outcome:
      'The project demonstrates mobile product development and workflow modeling around a practical consumer problem.'
  },
  celestialarcade: {
    overview:
      'Celestial Arcade packages lightweight browser games and interactive demos into a hosted arcade experience.',
    problem:
      'Small browser games can feel disconnected when shipped as isolated demos. The project creates a single wrapper experience for discovery and play.',
    built: [
      'Hosted arcade-style project shell.',
      'Responsive project browsing and demo presentation.',
      'Visual treatment designed around lightweight playable web experiences.'
    ],
    engineering: [
      'React application structure for a multi-demo web experience.',
      'Static hosting-friendly architecture.',
      'Reusable card and media patterns for game presentation.'
    ],
    outcome:
      'The project shows how smaller interactive demos can be organized into a cohesive hosted product.'
  },
  'course-review': {
    overview:
      'Course Review Application is a CRUD-focused application for storing and reviewing course information.',
    problem:
      'Course feedback is only useful when it is structured enough to search, compare, and update. This project focuses on the application flows behind that workflow.',
    built: [
      'Create, read, update, and delete flows for course review data.',
      'Student-facing interface for entering and reviewing course information.',
      'Persistence-oriented data model for storing review records.'
    ],
    engineering: [
      'Java and JavaFX desktop application structure.',
      'SQL-backed persistence model.',
      'Validation and interaction handling for a complete CRUD workflow.'
    ],
    outcome:
      'The project demonstrates core application engineering: UI state, persistence, validation, and user-facing data workflows.'
  },
  'credit-approval': {
    overview:
      'Credit Approval ML is a structured-data machine-learning project for predicting approval outcomes from applicant data.',
    problem:
      'Credit approval data requires careful preprocessing, feature handling, and evaluation before a model output can be interpreted responsibly.',
    built: [
      'Data preparation workflow for structured applicant records.',
      'Machine-learning pipeline for training and evaluating approval prediction models.',
      'Final writeup documenting the modeling approach and results.'
    ],
    engineering: [
      'Python data-analysis workflow with Pandas and Scikit-learn.',
      'Feature engineering and model-evaluation steps.',
      'Technical writing around methodology, tradeoffs, and findings.'
    ],
    outcome:
      'The project demonstrates applied ML fundamentals and the ability to communicate modeling work clearly.'
  },
  cs1112site: {
    overview:
      'CS1112 Website is a static publishing project for course materials and student resources.',
    problem:
      'Course websites need to make information easy to find, easy to maintain, and consistent across pages.',
    built: [
      'Static course website for documentation and resources.',
      'Content structure for course materials.',
      'Web presentation focused on student navigation and readability.'
    ],
    engineering: [
      'Jekyll and Markdown publishing workflow.',
      'HTML/CSS page structure.',
      'Documentation-oriented information architecture.'
    ],
    outcome:
      'The project shows static-site publishing and documentation design in an academic context.'
  },
  wordle: {
    overview:
      'Wordle App is a desktop recreation of the Wordle interaction loop.',
    problem:
      'A word game depends on predictable state transitions, clear feedback, and careful handling of guesses and keyboard interaction.',
    built: [
      'Desktop UI for entering guesses and viewing tile feedback.',
      'Game-state logic for attempts, correctness, and end states.',
      'Interaction loop modeled after the core Wordle experience.'
    ],
    engineering: [
      'Java and JavaFX interface implementation.',
      'FXML-based UI structure.',
      'State management for a compact desktop game.'
    ],
    outcome:
      'The project demonstrates desktop UI development and game-state modeling.'
  },
  'beneath-world-tree': {
    overview:
      'Beneath the World Tree is a Unity exploration prototype focused on traversal, environmental puzzles, and level flow.',
    problem:
      'Exploration games need movement, space, and objectives to work together so players understand where they can go and why.',
    built: [
      'Unity prototype with a layered exploration concept.',
      'Traversal and environmental-puzzle mechanics.',
      'Team-oriented game-production workflow.'
    ],
    engineering: [
      'Unity and C# implementation.',
      'Scene, interaction, and gameplay scripting.',
      'Game design work around level structure and player guidance.'
    ],
    outcome:
      'The project demonstrates collaborative game development and interactive systems design.'
  },
  'skyward-bound': {
    overview:
      'Skyward Bound is a vertical platformer prototype built around upward movement, scoring, and generated platform play.',
    problem:
      'Vertical platformers need responsive controls and reliable platform behavior to make repeated attempts feel fair.',
    built: [
      'Arcade-style vertical movement loop.',
      'Platforming and score progression systems.',
      'Unity prototype with replayable game structure.'
    ],
    engineering: [
      'Unity and C# gameplay scripting.',
      'Player movement and platform behavior.',
      'Prototype-oriented tuning of game feel and scoring.'
    ],
    outcome:
      'The project shows real-time interaction design and gameplay implementation.'
  },
  'dracula-reborn': {
    overview:
      'Dracula Reborn is a PICO-8 action demo with compact arcade controls and fantasy-console constraints.',
    problem:
      'Small fantasy-console games require tight scope: every sprite, input, rule, and screen state has to earn its place.',
    built: [
      'PICO-8 action-game loop.',
      'Pixel-art presentation and compact controls.',
      'Enemy/player interaction rules within a constrained runtime.'
    ],
    engineering: [
      'Lua scripting in PICO-8.',
      'Game-loop and state handling.',
      'Constraint-driven design for a fantasy-console environment.'
    ],
    outcome:
      'The project demonstrates small-scope game implementation and disciplined feature scoping.'
  },
  'vampire-frostbite': {
    overview:
      'Vampire Frost Bite is a PICO-8 game built around custom sprites, compact encounter rules, and sound design.',
    problem:
      'A small game still needs a complete loop: visual identity, controls, challenge, feedback, and an end condition.',
    built: [
      'Single-room PICO-8 game experience.',
      'Custom sprites and sound design.',
      'Encounter rules scoped to a complete playable prototype.'
    ],
    engineering: [
      'Lua scripting in PICO-8.',
      'Sprite, sound, and rule implementation.',
      'Compact state management for a complete game loop.'
    ],
    outcome:
      'The project shows end-to-end game creation inside a constrained engine.'
  },
  attempt11: {
    overview:
      'Attempt 11 is a data-analysis project documented through a final technical report.',
    problem:
      'The project required turning an analysis task into a documented methodology with clear results, interpretation, and reflection.',
    built: [
      'Data-analysis workflow documented in a final PDF report.',
      'Project methodology, experiment notes, results, and reflections.',
      'Written artifact structured for review and explanation.'
    ],
    engineering: [
      'Data analysis and technical writing.',
      'Report organization around method, evidence, and conclusion.',
      'Clear communication of project decisions and results.'
    ],
    outcome:
      'The project demonstrates analytical work and the ability to explain a technical process through a polished writeup.'
  },
  'emoji-text': {
    overview:
      'Emojis vs Text explores how interface-mediated communication affects interpretation and expression.',
    problem:
      'Digital communication changes tone and meaning through small interface choices, including emoji use, text phrasing, and context.',
    built: [
      'HCI-oriented study of communication and interpretation.',
      'Project framing around user perception and expression.',
      'Analysis of how nonverbal digital cues affect communication.'
    ],
    engineering: [
      'Human-computer interaction research framing.',
      'Communication analysis and written synthesis.',
      'Attention to product usability and user interpretation.'
    ],
    outcome:
      'The project connects Robert’s HCI interests with practical questions about product communication and interface design.'
  }
};

export function SecondaryProjectPage() {
  const { slug = '' } = useParams();
  const project = getProject(slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  if (featuredSlugs.has(project.slug)) {
    return <Navigate to={project.route ?? '/projects'} replace />;
  }

  const details = projectDetails[project.slug] ?? {
    overview: project.summary,
    problem: 'This project explores a practical software, product, or research workflow through implementation.',
    built: ['Project-specific interface, data, or interaction workflow.', 'Technology choices aligned to the project scope.'],
    engineering: project.technologies.map((technology) => `${technology} used as part of the implementation.`),
    outcome: 'The project demonstrates applied engineering judgment and delivery across its problem space.'
  };

  return (
    <>
      <Seo
        title={`${project.title} | Robert Bundy`}
        description={`${project.title}: ${project.summary}`}
        path={`/projects/${project.slug}`}
        image={project.image}
      />
      <article className="secondary-project-page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/projects">Projects</Link>
          <span aria-hidden="true">/</span>
          <span>{project.title}</span>
        </nav>

        <header className="page-hero compact">
          <span className="eyebrow">{project.category}</span>
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
          <p>{project.summary}</p>
          <TechnologyList technologies={project.technologies} />
          <div className="project-cta-row">
            {project.assetUrl ? (
              <a href={project.assetUrl} className="button primary">
                <FileText size={17} aria-hidden="true" />
                {project.assetLabel ?? 'View Asset'}
              </a>
            ) : null}
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button primary">
                <ExternalLink size={17} aria-hidden="true" />
                Live Site
              </a>
            ) : null}
            {project.githubUrl ? (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="button secondary">
                GitHub
              </a>
            ) : null}
          </div>
        </header>

        <section className="page-section">
          <ProjectScreenshot
            src={project.image}
            alt={project.imageAlt ?? `${project.title} screenshot`}
            caption={`${project.title} project visual.`}
          />
        </section>

        <section className="page-section project-story-grid">
          <div>
            <h2>Overview</h2>
            <p>{details.overview}</p>
          </div>
          <div>
            <h2>Problem</h2>
            <p>{details.problem}</p>
          </div>
          <div>
            <h2>What I Built</h2>
            <ul className="detail-list">
              {details.built.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Engineering Notes</h2>
            <ul className="detail-list">
              {details.engineering.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Outcome</h2>
            <p>{details.outcome}</p>
          </div>
        </section>
      </article>
    </>
  );
}
