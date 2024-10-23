import { test as setup } from "@playwright/test";
import { AuthFile } from "../constants/AuthFile";

/**
 * Login to Microsoft 365
 * More info: https://playwright.dev/docs/auth
 */
setup("authenticate", async ({ page }) => {
  await page.goto("https://smarterbusinessdev.sharepoint.com/sites/e2etest");

  const emailInput = page.locator("input[type=email]");
  await emailInput.click();
  await emailInput.fill("e2etesting@smarterbusinessdev.onmicrosoft.com");

  await page.getByRole("button", { name: "Next" }).click();

  const passwordInput = page.locator("input[type=password]");
  await passwordInput.click();
  await passwordInput.fill("Y^333779921509uv");

  await page.locator("input[type=submit]").click();
  await page.locator("input[type=submit][value='Yes']").click();
  await page.waitForURL("https://smarterbusinessdev.sharepoint.com/sites/e2etest");

  await page.context().storageState({ path: AuthFile }); 
});