import { test, expect, Page } from "@playwright/test";

test.describe("Render User Name on Page", () => {
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

    test("Check user name", async () => {
        const userNameElement = page.locator('[class^="welcome"] h2');
        await userNameElement.waitFor();
        expect(userNameElement).not.toBeNull();

        const userName = await userNameElement?.innerText();
        expect(userName).toContain("E2E Testing");
    });
});