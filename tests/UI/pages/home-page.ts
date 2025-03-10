import{Page, Locator, expect} from '@playwright/test';
import pagesURL from '../utils/pagesURLs';
class HomePage {
    readonly page: Page;
    readonly register_login_Button: Locator;
    readonly loggedInAs: Locator;
    readonly deleteAccount:Locator;

    constructor(page: any) {
        this.page = page;
        this.register_login_Button=page.getByRole('link', { name: ' Signup / Login' });
        this.loggedInAs=page.getByText('Logged in as test');  
        this.deleteAccount=page.getByRole('link',{name:' Delete Account'});
      }

    async open() {
        await this.page.goto(pagesURL.homePage);
    }
    async checkLoggedInAsBtn(){
       await expect.soft(this.loggedInAs).toBeVisible();
    }
    async checkDeleteAccount(){
        await expect.soft(this.deleteAccount).toBeVisible();
    }
    async clickOnDeleteAccount(){
        await this.deleteAccount.click();
    }
    async waitForLoadingDeleteAccountPage(){
        await this.page.waitForURL('https://www.automationexercise.com/delete_account');
    }

}
export default HomePage;