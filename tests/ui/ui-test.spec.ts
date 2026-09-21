import { test } from '@playwright/test';

import { CookiesPageSteps } from '../../page-object/page-steps/cookies-page-steps.ts';
import { HomePageSteps } from '../../page-object/page-steps/home-page-step.ts';
import { LoginPageSteps } from '../../page-object/page-steps/login-page-steps.ts';
import data from '../../testdata/ui/ui-data.json' with {type: 'json'};

let cookiesPage: CookiesPageSteps;
let homePage: HomePageSteps;
let loginPage: LoginPageSteps;

test.describe('Creatio Crm Web Application Automation', () => {


    test.beforeEach('cookies Page Validation', async ({ page }) => {

        cookiesPage = new CookiesPageSteps(page);
        homePage = new HomePageSteps(page);
        loginPage = new LoginPageSteps(page);
    })

    // tes1 -- Verify the cookies pop-up is displayed on the home page.
    test('Verify the cookies pop-up is displayed on the home page', async ({ page }) => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopUpDisplayed();

    })
    // test 2-- Verify cookies pop up content 
    test('Verify cookies pop up content', async ({ page }) => {

        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopUpDisplayed();

        const testData: any = data['Verify cookies pop up content'];

        await cookiesPage.verifyCookiesPopupContent(testData.cookiesContent);

    })

    //  test 3 -- Verify cookies pop-up logo is displayed.
    test('Verify cookies pop-up logo is displayed', async ({ page }) => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopUpDisplayed();
        await cookiesPage.verifyCookiesPopupLogoDisplayed();

    })

    // test 4 -- Verify switch buttons in the cookies pop-up.
    test('Verify switch buttons in the cookies pop-up', async ({ page }) => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopUpDisplayed();
        await cookiesPage.verifySwitchButtonsDisplayed();

    })

    // test 5 -- Verify selection button in the cookies pop-up.
    test('Verify selection button in the cookies pop-up', async ({ page }) => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopUpDisplayed();
        await cookiesPage.clickOnSelectionButton();

    })

    // test 6 -- Verify show details link in the cookies pop-up.
    test('Verify show details link in the cookies pop-up', async ({ page }) => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopUpDisplayed();
        await cookiesPage.clickOnShowDetailsLink();

    })

    // test 7 -- Verify expanded view on the cookies pop-up.
    test('Verify expanded view on the cookies pop-up', async ({ page }) => {
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopUpDisplayed();
        await cookiesPage.clickOnShowDetailsLink();
        await cookiesPage.verifyExpandedViewDisplayed();


    })

    // test 8  -- Verify closing the cookies pop-up by clicking on the selection button.
    test('Verify closing the cookies pop-up by clicking on the selection button', async ({ page }) => {

        const testData = data['Verify closing the cookies pop-up'];
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopUpDisplayed();
        await cookiesPage.clickOnShowDetailsLink();
        await cookiesPage.verifyExpandedViewDisplayed();
        await cookiesPage.clickOnAllowSelectionButton(testData.buttonName);
        await cookiesPage.verifyCookiesPopupNotDisplayed();

    })
    // test 9 -- Verify Login Page is displayed after closing the cookies pop-up.
    test('Verify Login Page is displayed', async ({ page }) => {
        const testData = data['Verify closing the cookies pop-up'];
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopUpDisplayed();
        await cookiesPage.clickOnShowDetailsLink();
        await cookiesPage.verifyExpandedViewDisplayed();
        await cookiesPage.clickOnAllowSelectionButton(testData.buttonName);
        await cookiesPage.verifyCookiesPopupNotDisplayed();
        await loginPage.verifyLoginPageDisplayed();

    })
    // test 10 -- Verify Valid Login with valid credentials.
    test.only('Verify Valid Login with valid credentials', async ({ page }) => {
        const testData = data['Verify Valid Login with valid credentials'];
        await loginPage.launchApplication();
        await cookiesPage.verifyCookiesPopUpDisplayed();
        await cookiesPage.clickOnShowDetailsLink();
        await cookiesPage.verifyExpandedViewDisplayed();
        await cookiesPage.clickOnAllowSelectionButton(testData.buttonName);
        await cookiesPage.verifyCookiesPopupNotDisplayed();
        await loginPage.verifyLoginPageDisplayed();
        await loginPage.enterCredentials(testData.username, testData.password);
         console.log("Before clicking on login button");
        await loginPage.clickOnLoginButton();
         console.log("After clicking on login button");
         await loginPage.waitForLoginAuthenticationPage();
         await loginPage.enterLoginEmail(testData.username);
         await loginPage.clickOnContinueButton();
         await loginPage.enterLoginPassword(testData.password);
         await loginPage.clickOnContinueButton();
         await homePage.verifyHomePageIsDisplayed();
         console.log("Test Ends");
        

    })
})
