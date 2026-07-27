import { test, expect } from "@playwright/test";

test("vite react app is reachable", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Vite/i);
  await expect(page.locator("#root")).toBeVisible();
});
