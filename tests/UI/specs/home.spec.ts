import {test, expect} from '@playwright/test';
import HomePage from '../pages/home-page';

let homePage: HomePage;

test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
    await homePage.open();
});
test.describe.configure({ mode: 'serial' });
test ('Verify that home page is visible successfully', async ({page}) => {
    await expect(page).toHaveTitle(/Automation Exercise/);   
});


test('check that the register/login button is visible', async ({page}) => {
   expect(await homePage.register_login_Button.isVisible()).toBeTruthy(); 
});