import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import App from './App';
import { featuredProjects, projects } from './data/projects';
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
    expect(screen.getByText('AI-Vestor')).toBeInTheDocument();
    expect(screen.getByText('Beneath the World Tree')).toBeInTheDocument();
    expect(projects.length).toBeGreaterThan(10);
  });

  it('renders featured project routes', async () => {
    renderRoute('/projects/resumegpt');
    expect(await screen.findByRole('heading', { name: 'ResumeGPT' })).toBeInTheDocument();
    expect(screen.getByText(/does not operate an Express backend/i)).toBeInTheDocument();
  });

  it('renders secondary project detail routes and the Emojis Versus Text report link', () => {
    renderRoute('/projects/emoji-text');
    expect(screen.getByRole('heading', { name: 'Emojis Versus Text' })).toBeInTheDocument();
    expect(screen.getByText('Emoji/Text Sentiment Study')).toBeInTheDocument();
    expect(screen.getByText('Architecture / Implementation')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View Final Report/i })).toHaveAttribute(
      'href',
      '/Website/assets/reports/ProjectWriteupGT.pdf'
    );
  });

  it('renders Credit Approval ML with the ML writeup link', () => {
    renderRoute('/projects/credit-approval');
    expect(screen.getByRole('heading', { name: 'Credit Approval ML' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View ML Writeup/i })).toHaveAttribute(
      'href',
      '/Website/assets/reports/Machine_Learning_Final_Writeup.pdf'
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
