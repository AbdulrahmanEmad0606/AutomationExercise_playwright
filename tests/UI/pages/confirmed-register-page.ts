import { Page, Locator, expect } from "@playwright/test";
class ConfirmedRegisterPage {
    readonly page: Page;
    readonly confirmedRegister: Locator;
    constructor(page: Page) {
        this.page = page;
        this.confirmedRegister = page.getByText('Your registration completed');
    }

    async checkSuccessMessage() {
        expect(await this.confirmedRegister.textContent()).toBe('Please enter a valid email address.');
    }
}
export default ConfirmedRegisterPage;