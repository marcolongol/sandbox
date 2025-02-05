import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('/');
  const homeWorks = await page.$('text=home works!');
  expect(homeWorks).toBeTruthy();
});
