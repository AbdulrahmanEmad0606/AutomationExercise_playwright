import Register_login from '../pages/register_login-page';
import { test} from "../Fixtures/login-fixture";
import userData from '../../data/user-data';
let register_login: Register_login;
test.beforeEach(async ({ page }) => {
   register_login = new Register_login(page);
 })
 test(`Verify '   Login to your account' is visible`,async({loginPage})=>{
    await loginPage.getLoginLabel();
 });
 test(`Verify that user can be able to login`,async({loginPage})=>{
    await loginPage.fillEmailAdress(userData.insertedEmail);
      await loginPage.fillPassword(userData.insertedPassword);
      await loginPage.clickLoginBtn();
      await loginPage.waitForLoadingHomePage();
 });