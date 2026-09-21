import { Page } from "@playwright/test";
import { WebCommons } from "../../commons/ui/web-commons.ts";
import LoginPage from '../page-elements/login-page-elements.json' with {type : 'json'}

export class LoginPageSteps{
 
 page : Page;
 web : WebCommons;

 constructor(page:Page){

    this.page = page;
    this.web = new WebCommons(page);
 }
 
 // Method to launch the application 
async launchApplication() {
    await this.web.launchApplication();
}
//  Method to verify the login page is displayed
 async verifyLoginPageDisplayed(){
    await this.web.isElementDisplayed(LoginPage.loginPageHeader);
 }
   
//  Method To enter credentials     

async enterCredentials(username: string, password: string){
    await this.web.enterText(LoginPage.businessEmailTextBox, username);
    await this.web.enterText(LoginPage.passwordTextBox, password);

}
// method to click on the login button      

async clickOnLoginButton(){
    await this.web.click(LoginPage.loginButton);    
}

// Method to click on the forgot password link
async clickOnForgotPasswordLink() {
    await this.web.click(LoginPage.forgotPasswordLink);
}

// Method to verify forgot password confirmation message is displayed
async verifyForgotPasswordConfirmationMessageIsDisplayed() {
    await this.web.isElementDisplayed(LoginPage.forgotPasswordConfirmationMsg);
}

// Method to verify error message is displayed
async verifyErrorMessageIsDisplayed() {
    await this.web.isElementDisplayed(LoginPage.loginErrorMessage);
}

// Method to verify social media login options are displayed
async verifySocialMediaLoginOptionsAreDisplayed() {
    await this.web.isElementDisplayed(LoginPage.googleIcon);
    await this.web.isElementDisplayed(LoginPage.linkedInIcon);

}

// Method to SignUp page is displayed
async verifySignUpPageIsDisplayed() {
    await this.web.isElementDisplayed(LoginPage.signUpLink);
}
// Method to wait for login authentication page
async waitForLoginAuthenticationPage() {
    await this.web.isElementDisplayed(LoginPage.loginAuthHeader);
}

// Method to enter login email on the authentication page
async enterLoginEmail(username: string) {
    await this.web.enterText(LoginPage.loginEmail, username);
}

// Method to click on the continue button on the authentication page
async clickOnContinueButton() {
    await this.web.click(LoginPage.continueButton);
}

// Method to enter login password on the authentication page
async enterLoginPassword(password: string) {
    await this.web.enterText(LoginPage.loginPassword, password);
}
}