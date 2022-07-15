/// <reference types="cypress" />

class LoginPage {
    get signinLink() { return cy.get('.login') }
    get emailAddressTxt() { return cy.get('#email') }
    get passwordTxt() { return cy.get('#passwd') }
    get signinBtn() { return cy.get('#SubmitLogin') }
    get alertBox() { return cy.get('p:contains("error")')}
    get alertMessage() { return cy.get('.alert-danger > ol > li') }
    
    public launchApplication() {
        cy.visit('/')
    }

    public login(emailId: string, password: string) {
        this.signinLink.click()
        this.emailAddressTxt.type(emailId)
        this.passwordTxt.type(password)
        this.signinBtn.click()
    }

    public validateLoginError(errorMessage: string) {
        this.alertBox.should('be.visible')
        this.alertMessage.should('have.text', errorMessage)

    }
}
export const loginPage: LoginPage = new LoginPage()