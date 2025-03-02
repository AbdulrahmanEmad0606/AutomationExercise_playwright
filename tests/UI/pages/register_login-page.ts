import { expect, Locator, Page } from "@playwright/test";
import userData from "../../data/user-data";
/**
 * Represents the Register/Login page of the application.
 * Provides methods to interact with the registration and login elements.
 */
class Register_Login_Page {
    /**
     * The Playwright Page object.
     */
    readonly page: Page;

    /**
     * Locator for the email input field within the signup form.
     */
    readonly email: Locator;

    /**
     * Locator for the name input field.
     */
    readonly name: Locator;

    /**
     * Locator for the "New User Signup!" heading.
     */
    readonly signUpLabel: Locator;

    /**
     * Locator for the signup button.
     */
    readonly signUpBtn: Locator;

    /**
     * Locator for the "Enter Account Information" label.
     */
    readonly accountInfLabel: Locator;

 

    constructor(page: Page) {
        this.page = page;
        // Locate the email input field within the signup form
        const signupForm = page.locator('form').filter({ hasText: 'Signup' });
        this.email = signupForm.getByPlaceholder('Email Address');
        this.name = page.getByRole('textbox', { name: 'Name' });
        this.signUpBtn = page.getByRole('button', { name: 'Signup' });
        this.signUpLabel = page.getByRole('heading', { name: 'New User Signup!' });
    }
    async open() {
        await this.page.goto('https://www.automationexercise.com/login');
    }
    async getSignUpLabel() {
        await expect(this.signUpLabel).toHaveText('New User Signup!');
    }
    async fillSignUpForm(userName:string,mail:string ) {
        await this.name.fill(userName);
        await this.email.fill(mail);
        await this.signUpBtn.click();
    }
    async waitForLoadingSignUpPage() {
        await this.page.waitForURL('https://www.automationexercise.com/signup');
    }
    
}
export default Register_Login_Page;    