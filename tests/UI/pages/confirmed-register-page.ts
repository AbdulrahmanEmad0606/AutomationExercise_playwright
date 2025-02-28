import { Page, Locator, expect } from "@playwright/test";
class ConfirmedRegisterPage {
    readonly page: Page;
    readonly successMessage : Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.successMessage = page.getByText('Account Created!');
        this.continueButton=page.getByRole('link',{name:'Continue'});
    }

    async checkSuccessMessage() {
        await expect.soft(this.successMessage).toHaveText('Account Created!');
    }
    async clickOnContinueBtn(){
        await this.continueButton.click();
    }
    async waitForLoadingHomePage(){
        await this.page.waitForURL('https://www.automationexercise.com/');
    }
}
export default ConfirmedRegisterPage;