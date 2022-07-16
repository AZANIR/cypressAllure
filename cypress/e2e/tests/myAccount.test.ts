import { loginPage } from "../pages/loginPage";

describe('My Account Functionality', () => {
    beforeEach(() => {
        //loginPage.launchApplication()
        cy.visit('https://google.com');
    })
    it('Sample Test', () => {
        console.log("This is a sample test")
    })
})