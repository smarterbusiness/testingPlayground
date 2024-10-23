import { test, expect, Page } from "@playwright/test";

test.describe("Page load", () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto("https://smarterbusinessdev.sharepoint.com/sites/e2etest", {
      waitUntil: "domcontentloaded",
    });
  });

  test.afterAll(async () => {
    await page.close();
  });

  test("Check site header title", async () => {
    const header = page.locator("[data-automationid='SiteHeaderTitle'] a");
    await expect(header).toHaveText("e2etest");
  });
});