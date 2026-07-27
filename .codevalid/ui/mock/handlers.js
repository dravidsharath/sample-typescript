export function registerMockRoutes(page) {
  return page.route("**/*", async (route) => {
    await route.continue();
  });
}
