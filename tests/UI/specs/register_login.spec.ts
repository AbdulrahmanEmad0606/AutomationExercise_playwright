import { test } from '@playwright/test';
import Register_Login_Page from '../pages/register_login-page';
import RegisterPage from '../pages/register-page';

let register_login: Register_Login_Page;
let register_page: RegisterPage;
test.beforeEach(async ({ page }) => {
   register_login = new Register_Login_Page(page);
   register_page =new RegisterPage(page);
   await register_login.open();
})

test.describe.configure({ mode: 'serial' });

test('Verify that the sign up label is visible', async ({ }) => {
   await register_login.getSignUpLabel();
});
test('Verify that ENTER ACCOUNT INFORMATION', async ({}) => {
   await register_login.fillSignUpForm('John Doe', 'dd2d21122222@cc.com');
   await register_login.clickSignUp();
   await register_login.waitForLoadingSignUpPage();
   await register_page.getAccountInfoLabel();
});
