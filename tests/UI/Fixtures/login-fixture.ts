import { test as base, type Fixtures } from "@playwright/test";
import LoginPage from "../pages/login-page";

type CustomFixtures = {
    loginPage: LoginPage;
};

export const test = base.extend<CustomFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.open();
        await use(loginPage);
    }
});


export { expect } from '@playwright/test';