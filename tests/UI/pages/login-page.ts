import {Locator, Page } from '@playwright/test'
import { expect} from "../Fixtures/login-fixture";
import pagesUrl from '../utils/pagesURLs';
class LoginPage {
    /**Locators */
    readonly loginHeader: Locator;
    readonly emailAdress: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;
    /**Constractor */
    constructor(readonly page: Page) {
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
    async fillEmailAdress(email: string) {
        await this.emailAdress.fill(email);
    }
    async fillPassword(password: string) {
        await this.password.fill(password);
    }
    async clickLoginBtn() {
        await this.loginBtn.click();
    }
    async waitForLoadingHomePage() {
            await this.page.waitForURL(pagesUrl.homePage);
    }
    
}   
export default LoginPage;