import { test, expect } from "@playwright/test";

test("seed validation - app is reachable", async ({ page }) => {
  const response = await page.request.get("http://127.0.0.1:4010/api/health");
  const payload = await response.json();

  expect(payload.status).toBe("ok");

  await page.goto("/");

  await expect(page).toHaveTitle(/Sample TS App/i);
  await expect(page.locator("h1")).toContainText("Task Manager");
});
