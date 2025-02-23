import{Page, Locator} from '@playwright/test';

class HomePage {
    readonly page: Page;
    readonly register_login_Button: Locator;

    constructor(page: any) {
        this.page = page;
        this.register_login_Button=page.getByRole('link', { name: ' Signup / Login' });

    }

    async open() {
        await this.page.goto('https://www.automationexercise.com/');
    }

}
export default HomePage;