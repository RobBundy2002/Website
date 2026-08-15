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
    expect(screen.getByRole('heading', { name: 'Robert Bundy' })).toBeInTheDocument();
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

  it('renders secondary project detail routes and restored Attempt 11 report link', () => {
    renderRoute('/projects/attempt11');
    expect(screen.getByRole('heading', { name: 'Attempt 11' })).toBeInTheDocument();
    expect(screen.getByText('Course Project Writeup')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View Final Report/i })).toHaveAttribute(
      'href',
      '/Website/assets/reports/ProjectWriteupGT.pdf'
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
