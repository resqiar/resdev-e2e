import { test, expect } from "@playwright/test";

test("should has title of Resdev", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Resdev | Blogs, Showcases and Playground/);
});

test("should has logo that leads to home page", async ({ page }) => {
  await page.goto("/");

  // Check if the logo element exists
  const logo = page.getByRole("link", { name: "Resdev" });

  // click the logo
  await logo.click();

  await expect(page).toHaveTitle(/Resdev | Blogs, Showcases and Playground/);
});

test("should has dashboard link that leads to home page", async ({ page }) => {
  await page.goto("/");

  // Check if the logo element exists
  const logo = page.getByRole("link", { name: "Dashboard" });

  // click the logo
  await logo.click();

  await expect(page).toHaveTitle(/Resdev | Blogs, Showcases and Playground/);
});

test("should has blog link that leads to blog page", async ({ page }) => {
  await page.goto("/");

  // Check if the logo element exists
  const logo = page.getByRole("link", { name: "Blog" });

  // click the logo
  await logo.click();

  await expect(page).toHaveTitle(/Resdev's Blog/);
  await expect(page).toHaveURL(/.*blog/);
  await page.getByRole("heading", { name: "Blog & Thought" }).isVisible();
  await page
    .getByRole("paragraph", {
      name: "Join me on this adventure as we delve into captivating stories and a realm of knowledge that will ignite your inspiration and leave you craving for more.",
    })
    .isVisible();
});

test("should has playground link that leads to coming soon page", async ({
  page,
}) => {
  await page.goto("/");

  // Check if the logo element exists
  const logo = page.getByRole("link", { name: "Playground" });

  // click the logo
  await logo.click();

  await expect(page).toHaveTitle(/Coming Soon/);

  await expect(page).toHaveURL(/.*playground/);

  await page.getByRole("heading", { name: "Coming Soon" }).isVisible();
});

test("should has login link that leads to auth page", async ({ page }) => {
  await page.goto("/");

  // Check if the login button exist
  const loginButton = page.getByRole("link", { name: "Login" });

  // click the login button
  await loginButton.click();

  // expect to have title
  await expect(page).toHaveTitle(/Login or Register | Resdev/);

  // expect to have /auth URL
  await expect(page).toHaveURL(/.*auth/);

  await page.getByRole("heading", { name: "Welcome Back!" }).isVisible();
  await page.getByText("no password stored!").isVisible();
});
