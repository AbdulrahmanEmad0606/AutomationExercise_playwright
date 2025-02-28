import{Page, Locator, expect} from '@playwright/test';

class DeleteAccount{
    readonly page:Page;
    readonly deleteAccoutLabel:Locator;

    constructor(page:Page){
        this.page=this.page;
        this.deleteAccoutLabel=page.getByText('Account Deleted!');
    }
    async checkDeleteAccountLabel(){
        await expect.soft(this.deleteAccoutLabel).toHaveText('Account Deleted!');
    }
}
export default DeleteAccount;