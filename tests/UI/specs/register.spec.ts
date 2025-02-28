import { test, expect, Page } from '@playwright/test';
import RegisterPage from '../pages/register-page';
import Register_login from '../pages/register_login-page';
import ConfirmedRegisterPage from '../pages/confirmed-register-page'
import HomePage from '../pages/home-page';
import DeletePage from '../pages/delete-account-page';


let registerPage: RegisterPage;
let homePage: HomePage;
let register_login: Register_login;
let confirmedRegisterPage: ConfirmedRegisterPage;
let deleteAccountPage:DeletePage;
test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    register_login = new Register_login(page);
    confirmedRegisterPage = new ConfirmedRegisterPage(page);
    homePage = new HomePage(page);
    deleteAccountPage=new DeletePage(page);
    await registerPage.open();
})
test.describe('Register New user!', () => {
    test('Register New User', async ({}) => {
        registerPage.fillinputs();
        await registerPage.fillRegisterForm('Mr.',
            'test','last name',
            'company','address','address2','city',
            'Alabama','12345','1234567890','test');
        await registerPage.waitForLoadingAccountCreatedPage();
        await confirmedRegisterPage.checkSuccessMessage();
        await confirmedRegisterPage.clickOnContinueBtn();
        await confirmedRegisterPage.waitForLoadingHomePage();
        await homePage.checkLoggedInAsBtn();
        await homePage.checkDeleteAccount();
        await homePage.clickOnDeleteAccount();
        await homePage.waitForLoadingDeleteAccountPage();
        await deleteAccountPage.checkDeleteAccountLabel();
    })
})
