import { Locator, Page, expect } from "@playwright/test";
import Register_login from "../pages/register_login-page";


let register_login: Register_login;
class RegisterPage {
    readonly page: Page;
    readonly accountInfoLabel: Locator;
    readonly genderMale: Locator;
    readonly genderFemale: Locator;
    readonly password: Locator;
    readonly birthDay: Locator;
    readonly birthMonth: Locator;
    readonly birthYear: Locator;
    readonly newsletter: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly company: Locator;
    readonly address: Locator;
    readonly address2: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly zipcode: Locator;
    readonly mobile: Locator;
    readonly registerButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.accountInfoLabel = page.getByText('Enter Account Information');
        this.genderMale = page.getByRole('radio', { name: 'Mr.' });
        this.genderFemale = page.getByRole('radio', { name: 'Mrs.' });
        this.password = page.getByRole('textbox', { name: 'Password *' });
        this.birthDay = page.locator('#days');
        this.birthMonth = page.locator('#months');
        this.birthYear = page.locator('#years');
        this.newsletter = page.getByText('Sign up for our newsletter!');
        this.firstName = page.getByRole('textbox', { name: 'First name *' });
        this.lastName = page.getByRole('textbox', { name: 'Last name *' });
        this.company = page.getByRole('textbox', { name: 'Company', exact: true });
        this.address = page.getByRole('textbox', { name: 'Address * (Street address, P.' });
        this.address2 = page.getByRole('textbox', { name: 'Address 2' });
        this.city = page.getByRole('textbox', { name: 'City * Zipcode *' });
        this.state = page.getByRole('textbox', { name: 'State *' });
        this.zipcode = page.locator('#zipcode');
        this.mobile = page.getByRole('textbox', { name: 'Mobile Number *' });
        this.registerButton = page.getByRole('button', { name: 'Create Account' });

    }
    async getAccountInfoLabel() {
        await expect(this.accountInfoLabel).toHaveText('Enter Account Information');
    }
    async open() {
        await this.page.goto('https://www.automationexercise.com/signup');
    }
    async fillinputs() {
        let userName,mail;
        register_login = new Register_login(this.page);
        await register_login.open();
        await register_login.fillSignUpForm(userName,mail);
    }
    async selectGender(gender: string) {
        if (gender === 'Mr.') {
            await this.genderMale.check();  
        } else if (gender === 'Mrs.') {
            await this.genderFemale.check();
        }
    }
    async fillPassword(password: string) {
        await this.password.fill(password);
    }
    async selectBirthDay() {
        await this.birthDay.selectOption('6');
    }
    async selectBirthMonth() {
        await this.birthMonth.selectOption('6');
    }
    async selectBirthYear() {
        await this.birthYear.selectOption('1998');
    }
    async checkNewsletter() {
        await this.newsletter.check();
    }
    async fillFirstName(firstName: string) {
        await this.firstName.fill(firstName);
    }
    async fillLastName(lastName: string) {
        await this.lastName.fill(lastName);
    }
    async fillCompany(company: string) {
        await this.company.fill(company);
    }
    async fillAddress(address: string) {
        await this.address.fill(address);
    }
    async fillAddress2(address2: string) {
        await this.address2.fill(address2);
    }
    async fillCity(city: string) {
        await this.city.fill(city);
    }
    async fillState(state: string) {
        await this.state.fill(state);
    }
    async fillZipcode(zipcode: string) {
        await this.zipcode.fill(zipcode);
    }
    async fillMobile(mobile: string) {
        await this.mobile.fill(mobile);
    }
    async clickRegisterButton() {
        await this.registerButton.click();
    }

    async fillRegisterForm(gender: string, firstName: string, lastName: string, company: string, address: string, address2: string, city: string, state: string, zipcode: string, mobile: string, password: string) {
        await this.selectGender(gender);
        await this.fillPassword(password);
        await this.selectBirthDay();
        await this.selectBirthMonth();
        await this.selectBirthYear();
        await this.checkNewsletter();
        await this.fillFirstName(firstName);
        await this.fillLastName(lastName);
        await this.fillCompany(company);
        await this.fillAddress(address);
        await this.fillAddress2(address2);
        await this.fillCity(city);
        await this.fillState(state);
        await this.fillZipcode(zipcode);
        await this.fillMobile(mobile);
        await this.clickRegisterButton();

    }
    async waitForLoadingAccountCreatedPage() {
        console.log('waiting for success message');
        await this.page.waitForURL('https://www.automationexercise.com/account_created');
    }
}
export default RegisterPage;