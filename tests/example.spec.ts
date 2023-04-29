import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://pqx-global-imdb.vercel.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/IMDb Clone/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://pqx-global-imdb.vercel.app/');

  // Click the get started link.
  await page.getByRole('link', { name: 'About' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*about/);
});
