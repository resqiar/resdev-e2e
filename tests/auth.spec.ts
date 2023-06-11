import { test, expect } from "@playwright/test";

test("Should do the auth process", async ({ page }) => {
  await page.goto("/auth");

  // expect to have title
  await expect(page).toHaveTitle(/Login or Register | Resdev/);

  // expect to have /auth URL
  await expect(page).toHaveURL(/.*auth/);

  await page.getByRole("link", { name: "Login with Google" }).click();

  const emailInput = page.getByRole("textbox", { name: "Email or phone" });

  await emailInput.click();
  await emailInput.fill(process.env.EMAIL);

  await page.getByRole("button", { name: "Next" }).click();

  const passwordInput = page.getByRole("textbox", {
    name: "Enter your password",
  });

  await passwordInput.click();
  await passwordInput.fill(process.env.PASSWORD);

  await page.getByRole("button", { name: "Next" }).click();

  // expect to go back to homepage
  await expect(page).toHaveTitle(/Resdev | Blogs, Showcases and Playground/);

  // expect the login button now gone
  await page.getByRole("link", { name: "Login" }).isHidden();
});
