import { expect, test } from '@playwright/test';

test('homepage loads and navigation works', async ({ page }) => {
  await page.goto('./');
  await expect(page.getByRole('heading', { name: 'Rob Bundy' })).toBeVisible();
  await page.getByRole('link', { name: /View Projects/i }).click();
  await expect(page).toHaveURL(/\/Website\/projects$/);
  await expect(page.getByRole('heading', { name: 'Project portfolio' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Featured case studies' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Full-stack builds and research work' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Earlier games, coursework, and smaller builds' })).toBeVisible();
});

test('featured project routes load directly', async ({ page }) => {
  for (const slug of ['northstar', 'careerboard', 'ujlp', 'resumegpt']) {
    await page.goto(`./projects/${slug}`);
    await expect(page.locator('h1')).toBeVisible();
  }
});

test('project cards navigate to detail pages', async ({ page }) => {
  await page.goto('./projects');
  await page.getByRole('link', { name: /Northstar/i }).first().click();
  await expect(page).toHaveURL(/\/Website\/projects\/northstar$/);
  await expect(page.getByRole('heading', { name: 'Northstar' })).toBeVisible();
});

test('Tier 2 project cards navigate to medium-depth pages', async ({ page }) => {
  await page.goto('./projects');
  await page.getByRole('link', { name: /Emoji vs Text/i }).first().click();
  await expect(page).toHaveURL(/\/Website\/projects\/emoji-text$/);
  await expect(page.getByRole('heading', { name: 'Emoji vs Text' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Research Question' })).toBeVisible();
  await expect(page.getByRole('link', { name: /View Final Report/i })).toHaveAttribute(
    'href',
    '/Website/assets/reports/ProjectWriteupGT.pdf'
  );
});

test('requested Tier 2 routes load', async ({ page }) => {
  for (const [slug, heading] of [
    ['matrixmadness', 'Basketball Grid'],
    ['credit-approval', 'Credit Approval ML'],
    ['emoji-text', 'Emoji vs Text']
  ]) {
    await page.goto(`./projects/${slug}`);
    await expect(page.getByRole('heading', { name: heading })).toBeVisible();
  }
});

test('archive project navigation works', async ({ page }) => {
  await page.goto('./projects');
  await page.getByRole('link', { name: /Wordle App/i }).first().click();
  await expect(page).toHaveURL(/\/Website\/projects\/wordle$/);
  await expect(page.getByRole('heading', { name: 'Wordle App' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Key Features / Mechanics' })).toBeVisible();
});

test('Credit Approval ML keeps its ML report link', async ({ page }) => {
  await page.goto('./projects/credit-approval');
  await expect(page.getByRole('heading', { name: 'Credit Approval ML' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Models and Results' })).toBeVisible();
  await expect(page.getByRole('link', { name: /View ML Writeup/i })).toHaveAttribute(
    'href',
    '/Website/assets/reports/Machine_Learning_Final_Writeup.pdf'
  );
});

test('external CTAs have expected hrefs', async ({ page }) => {
  await page.goto('./projects/ujlp');
  const ctas = page.locator('.project-cta-row').last();
  await expect(ctas.getByRole('link', { name: /GitHub/i })).toHaveAttribute(
    'href',
    'https://github.com/RobBundy2002/UJLP'
  );
  await expect(ctas.getByRole('link', { name: /Live Site/i })).toHaveAttribute('href', 'https://ujlawandpolitics.org/');
});

test('contact links exist', async ({ page }) => {
  await page.goto('./contact');
  const contactLinks = page.getByLabel('Contact links');
  await expect(contactLinks.getByRole('link', { name: /Email/i })).toHaveAttribute('href', 'mailto:robbielbundy@gmail.com');
  await expect(contactLinks.getByRole('link', { name: /GitHub/i })).toHaveAttribute('href', 'https://github.com/RobBundy2002');
});

test('mobile navigation works', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('./');
  await page.getByRole('button', { name: /open navigation menu/i }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await expect(page).toHaveURL(/\/Website\/contact$/);
  await expect(page.getByRole('heading', { name: /Connect with Rob Bundy/i })).toBeVisible();
});

test('unknown route fails gracefully', async ({ page }) => {
  await page.goto('./does-not-exist');
  await expect(page.getByRole('heading', { name: 'Page not found.' })).toBeVisible();
});
