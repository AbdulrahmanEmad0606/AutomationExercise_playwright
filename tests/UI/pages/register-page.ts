import { Locator, Page,expect } from "@playwright/test";

class RegisterPage {
    readonly page: Page;
    readonly genderMale: Locator;
    readonly genderFemale: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly companyName: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly registerButton: Locator;
    readonly registerSuccessMessage: Locator;
    readonly invalidEmailMessage: Locator;
    readonly invalidPasswordMessage: Locator;
    constructor(page: Page) {
        this.page = page;
        this.genderMale = page.getByRole('radio', { name: 'Male', exact: true });
        this.genderFemale = page.getByRole('radio', { name: 'Female' });
        this.firstName = page.getByRole('textbox', { name: 'First name:' });
        this.lastName = page.getByRole('textbox', { name: 'Last name:'   });
        this.email = page.getByRole('textbox', { name: 'Email:' });
        this.companyName = page.getByRole('textbox', { name: 'Company name:' });
        this.password = page.getByRole('textbox', { name: 'Password:', exact: true });
        this.confirmPassword = page.getByRole('textbox', { name: 'Confirm password:' });
        this.registerButton = page.getByRole('button', { name: 'Register' });
        this.invalidEmailMessage = page.getByText('Please enter a valid email');
        
    }
    async open() {
        await this.page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
    }
    async registerUser(firstName: string, lastName: string, email: string, companyName: string, password: string) {
        await this.selectGender();
        await this.fillFirstName(firstName);
        await this.fillLastName(lastName);
        await this.fillEmail(email);
        await this.fillCompanyName(companyName);
        await this.fillPassword(password);
        await this.fillConfirmPassword(password);
        await this.clickRegisterButton();
    }
    async selectGender() {
        await this.genderMale.check();
    }
    async fillFirstName(firstName: string) {
        await this.firstName.fill(firstName);
    }
    async fillLastName(lastName: string) {
        await this.lastName.fill(lastName);
    }
    async fillEmail(email: string) {
        await this.email.fill(email);
    }
    async fillCompanyName(companyName: string) {
        await this.companyName.fill(companyName);
    }
    async fillPassword(password: string) {
        await this.password.fill(password);
    }
    async fillConfirmPassword(password: string) {
        await this.confirmPassword.fill(password);
    }
    async clickRegisterButton() {
        await this.registerButton.click();
    }
    async checkSuccessMessage() {
        expect(await this.registerSuccessMessage.textContent()).toBe('Your registration completed');
    }
    async checkInvalidPasswordMessage(password : string) {
        await this.password.fill(password);  
        await this.registerButton.click();
        expect(await this.invalidPasswordMessage.textContent()).toBe('Password must meet the following rules:');
    }
    async checkInvalidEmailMessage(email : string) {
        await this.email.fill(email);  
        await this.registerButton.click();
        expect(await this.invalidEmailMessage.textContent()).toBe('Please enter a valid email address.');
    }
}
export default RegisterPage;