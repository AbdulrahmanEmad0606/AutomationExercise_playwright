import { test } from '@playwright/test';
import LoginPage from '../pages/login-page';

let loginPage:LoginPage ;
test.beforeEach(async ({ page }) => {
    loginPage =new LoginPage(page);
    await loginPage.open();
 })
 test(`Verify 'Login to your account' is visible`,async({page})=>{
    await loginPage.getLoginLabel();
 });