import { test } from '@playwright/test';
import Register_Login_Page from '../pages/register_login-page';

let register_login: Register_Login_Page;
test.beforeEach(async ({ page }) => {
   register_login = new Register_Login_Page(page);
   await register_login.open();
})
test.describe.configure({ mode: 'serial' });

test('Verify that the sign up label is visible', async ({ }) => {
   await register_login.getSignUpLabel();
});
test('Verify that the user can sign up', async ({ page }) => {
   await register_login.fillSignUpForm('John Doe', 'ddd@cc.com');
   await register_login.clickSignUp();
   await register_login.getLabelFromSignUpPage();
});
