import { test, expect, Page } from '@playwright/test';
import RegisterPage from '../pages/register-page';
import Register_login from '../pages/register_login-page';
import ConfirmedRegisterPage from '../pages/confirmed-register-page'
import HomePage from '../pages/home-page';
import DeletePage from '../pages/delete-account-page';
import userData from '../../data/user-data'

let registerPage: RegisterPage;
let homePage: HomePage;
let register_login: Register_login;
let confirmedRegisterPage: ConfirmedRegisterPage;
let deleteAccountPage: DeletePage;
test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    register_login = new Register_login(page);
    confirmedRegisterPage = new ConfirmedRegisterPage(page);
    homePage = new HomePage(page);
    deleteAccountPage = new DeletePage(page);
    await registerPage.open();
})
test.describe('Register New user!', () => {
    test('Register New User', async ({ }) => {

        register_login.fillSignUpForm(userData.firstName, userData.insertedEmail)
        register_login.waitForLoadingSignUpPage();
        await registerPage.fillRegisterForm
            (userData.genderMale,
                userData.firstName,
                userData.lastName, userData.company, userData.address, userData.address2,
                userData.city, userData.state, userData.zipcode, userData.mobile,userData.insertedPassword
            );
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
// Removed export as registerPage is assigned dynamically in beforeEach