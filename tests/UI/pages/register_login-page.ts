import { expect, Locator, Page } from "@playwright/test";

class Register_Login_Page {
  
    readonly page: Page;

   readonly email: Locator;

   
    readonly name: Locator;

    readonly signUpLabel: Locator;

    
    readonly signUpBtn: Locator;

    
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
    async clickSignUp(){
    }
    async waitForLoadingSignUpPage() {
        await this.page.waitForURL('https://www.automationexercise.com/signup');
    }
    
}
export default Register_Login_Page;    