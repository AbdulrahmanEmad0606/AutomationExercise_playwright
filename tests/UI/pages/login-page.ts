import { Location, Locator, Page, expect } from '@playwright/test'

import pagesUrl from '../utils/pagesURLs';
class LoginPage {
    /**Locators */

    readonly page: Page;
    readonly loginHeader: Locator;
    readonly emailAdress: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;
    /**Constractor */
    constructor(page: Page) {
        this.page = page;
        this.loginHeader = page.getByRole('heading', { name: 'Login to your account' });
        this.emailAdress = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = page.getByRole('button', { name: 'Login' });
    }
    /**Actions */
    async open() {
        await this.page.goto(pagesUrl.loginPage);
    }
    async getLoginLabel() {
        await expect(this.loginHeader).toHaveText('Login to your account');
    }
}
export default LoginPage;