import { Page } from "@playwright/test";
import cookiesPage from '../page-elements//cookies-page-elements.json' with {type: 'json'};
import { WebCommons } from "../../commons/ui/web-commons.ts";


export class CookiesPageSteps {

    page: Page;
    web: WebCommons;

    constructor(page: Page) {
        this.page = page;

        this.web = new WebCommons(page)
    }

    async verifyCookiesPopUpDisplayed() {
        await this.web.isElementDisplayed(cookiesPage.cookiesPageHeader);
    }

    async verifyCookiesPopupContent(expectedValue: string) {
        await this.web.isElementDisplayed(cookiesPage.cookiesContent);
        const actualValue = await this.web.getText(cookiesPage.cookiesContent);
        await this.web.compareContainsText(cookiesPage.cookiesContent, expectedValue);

    }
 
        // Method to Verify cookies pop-up logo 
    async verifyCookiesPopupLogoDisplayed() {
        await this.web.isElementDisplayed(cookiesPage.creatologo);
        await this.web.isElementDisplayed(cookiesPage.cookiebotLogo);

    }
        //Verify switch buttons in the cookies pop-up. 
    async verifySwitchButtonsDisplayed() {
        await this.web.isElementDisplayed(cookiesPage.necessarySwitchButton);
        await this.web.isElementDisplayed(cookiesPage.preferencesSwitchButton);
        await this.web.isElementDisplayed(cookiesPage.statisticsSwitchButton);
        await this.web.isElementDisplayed(cookiesPage.marketingSwitchButton);
    }

    //    Selection button in the cookies pop-up 

      async clickOnSelectionButton() {
        await this.web.isElementDisplayed(cookiesPage.allowAllButton);
        await this.web.isElementDisplayed(cookiesPage.allowSelection);
        await this.web.click(cookiesPage.denyButton);
      }
 
    // verify and click on show details link in the cookies pop-up.
    async clickOnShowDetailsLink() {
        await this.web.isElementDisplayed(cookiesPage.showDetailsLink);
        await this.web.click(cookiesPage.showDetailsLink);
    }
  
   // Verify Expanded view on the cookies pop-up. 
   async verifyExpandedViewDisplayed() {
        await this.web.isElementDisplayed(cookiesPage.expandedViewOfCookies);
    
    }
    // Click on the selection button in the cookies pop-up. 

    async clickOnAllowSelectionButton(buttonName: string) {

        switch (buttonName.toLowerCase()) {
            case 'allow selection':
                await this.web.click(cookiesPage.allowSelection); 
                break;
            case 'allow all':
                await this.web.click(cookiesPage.allowAllButton);
                break;
            case 'deny':
                await this.web.click(cookiesPage.denyButton);
                break;
            default:
                throw new Error(`Invalid button name: ${buttonName}`);
     
        }
    }

    // Verify the cookies pop-up is no longer displayed after clicking the selection button.
    async verifyCookiesPopupNotDisplayed() {
        const isNotDisplayed = await this.web.isElementNotDisplayed(cookiesPage.cookiesContent);
        if (!isNotDisplayed) {
            throw new Error('Cookies pop-up is still displayed after clicking the selection button.');
        }
    }
}