import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import App from './App';
import { archiveProjects, featuredProjects, projects, substantialProjects } from './data/projects';
import { profile } from './data/profile';

function renderRoute(route = '/') {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );
}

describe('portfolio routes', () => {
  it('renders the homepage and exactly four selected work cards', async () => {
    renderRoute('/');
    expect(screen.getByRole('heading', { name: 'Rob Bundy' })).toBeInTheDocument();
    expect(screen.getByText(/backend systems/i)).toBeInTheDocument();
    for (const project of featuredProjects) {
      expect(await screen.findByRole('link', { name: new RegExp(project.title, 'i') })).toBeInTheDocument();
    }
    expect(featuredProjects).toHaveLength(4);
  });

  it('renders the projects page with all previous projects preserved', () => {
    renderRoute('/projects');
    expect(screen.getByRole('heading', { name: 'Project portfolio' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Featured case studies' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Full-stack builds and research work' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Earlier games, coursework, and smaller builds' })).toBeInTheDocument();
    expect(screen.getByText('AI-Vestor')).toBeInTheDocument();
    expect(screen.getByText('Beneath the World Tree')).toBeInTheDocument();
    expect(substantialProjects.map((project) => project.slug)).toEqual([
      'aivestor',
      'matrixmadness',
      'credit-approval',
      'emoji-text'
    ]);
    expect(archiveProjects.some((project) => project.slug === 'wordle')).toBe(true);
    expect(projects.length).toBeGreaterThan(10);
  });

  it('renders featured project routes', async () => {
    renderRoute('/projects/resumegpt');
    expect(await screen.findByRole('heading', { name: 'ResumeGPT' })).toBeInTheDocument();
    expect(screen.getByText(/does not operate an Express backend/i)).toBeInTheDocument();
  });

  it('renders substantial project routes with research content and the Emoji vs Text report link', () => {
    renderRoute('/projects/emoji-text');
    expect(screen.getByRole('heading', { name: 'Emoji vs Text' })).toBeInTheDocument();
    expect(screen.getByText('Human-Computer Interaction Study')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Research Question' })).toBeInTheDocument();
    expect(screen.getByText('94.6%')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View Final Report/i })).toHaveAttribute(
      'href',
      '/Website/assets/reports/ProjectWriteupGT.pdf'
    );
  });

  it('renders Credit Approval ML with the ML writeup link', () => {
    renderRoute('/projects/credit-approval');
    expect(screen.getByRole('heading', { name: 'Credit Approval ML' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Models and Results' })).toBeInTheDocument();
    expect(screen.getByText('93.56%')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View ML Writeup/i })).toHaveAttribute(
      'href',
      '/Website/assets/reports/Machine_Learning_Final_Writeup.pdf'
    );
  });

  it('renders Basketball Grid with verified repository links', () => {
    renderRoute('/projects/matrixmadness');
    expect(screen.getByRole('heading', { name: 'Basketball Grid' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Gameplay' })).toBeInTheDocument();
    expect(screen.getByText('124')).toBeInTheDocument();
    expect(
      screen.getAllByRole('link', { name: /GitHub/i }).some(
        (link) => link.getAttribute('href') === 'https://github.com/RobBundy2002/BasketballGridProject'
      )
    ).toBe(true);
  });

  it('renders archive project routes concisely', () => {
    renderRoute('/projects/wordle');
    expect(screen.getByRole('heading', { name: 'Wordle App' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Key Features / Mechanics' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Problem' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Outcome' })).not.toBeInTheDocument();
  });

  it('uses the Beneath the World Tree trailer as the archive visual', () => {
    renderRoute('/projects/beneath-world-tree');
    expect(screen.getByRole('heading', { name: 'Beneath the World Tree' })).toBeInTheDocument();
    expect(document.querySelector('video source')).toHaveAttribute(
      'src',
      '/Website/assets/videos/beneath-world-tree-trailer.mp4'
    );
  });

  it('renders experience and contact links', () => {
    renderRoute('/experience');
    expect(screen.getByText('Software Engineer II')).toBeInTheDocument();
    expect(screen.getByText('Georgia Institute of Technology')).toBeInTheDocument();

    cleanup();
    renderRoute('/contact');
    const contactLinks = screen.getByLabelText('Contact links');
    expect(within(contactLinks).getByRole('link', { name: /Email/i })).toHaveAttribute('href', `mailto:${profile.email}`);
    expect(within(contactLinks).getByRole('link', { name: /GitHub/i })).toHaveAttribute('href', profile.githubUrl);
    expect(within(contactLinks).getByRole('link', { name: /LinkedIn/i })).toHaveAttribute('href', profile.linkedinUrl);
  });

  it('supports mobile navigation', async () => {
    const user = userEvent.setup();
    renderRoute('/');
    await user.click(screen.getByRole('button', { name: /open navigation menu/i }));
    const mobileNav = screen.getByRole('navigation', { name: /mobile navigation/i });
    expect(mobileNav).toBeVisible();
    await user.click(within(mobileNav).getByRole('link', { name: 'About' }));
    expect(screen.getByRole('heading', { name: /practical workflow problems/i })).toBeInTheDocument();
  });

  it('renders a graceful unknown route', () => {
    renderRoute('/missing-route');
    expect(screen.getByRole('heading', { name: 'Page not found.' })).toBeInTheDocument();
  });
});
