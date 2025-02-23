import { test, expect, Page } from '@playwright/test';
import RegisterPage from '../pages/register-page';

let registerPage: RegisterPage;
test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    await registerPage.open();
})
test.describe('Register New user!', () => {
    test('Register New User', async ({ page}) => {
        await registerPage.registerUser('John', 'Doe', 'test2@gmail.com', 'Test Company', 'Test123');
        await expect(page).toHaveTitle(/Just a moment/);
    })
    test('Register New User with invalid email', async ({}) => {
        await registerPage.checkInvalidEmailMessage('test2');
    })
})
