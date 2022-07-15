import { loginPage } from '../pages/loginPage'
import { myAccountPage } from '../pages/myAccountPage'

describe('Login Functionality', () => {
    beforeEach(() => {
        loginPage.launchApplication()
        cy.fixture('users.json').then(function (data) {
            this.data = data;
        })
    })
    it('login with valid credentials', function () {
        loginPage.login("testautomation@cypresstest.com", "Test@1234")
        myAccountPage.validateSuccessfulLogin()
        myAccountPage.logout()
        myAccountPage.validateSuccessfulLogout()
    })
    it('login with valid credentials read data from fixture', function () {
        loginPage.login(this.data.valid_credentials.emailId, this.data.valid_credentials.password)
        myAccountPage.validateSuccessfulLogin()
        myAccountPage.logout()
        myAccountPage.validateSuccessfulLogout()
    })
    it('login with invalid email credentials read data from fixture', function () {
        loginPage.login(this.data.invalid_credentials.invalid_email.emailId, 
            this.data.invalid_credentials.invalid_email.password)
        loginPage.validateLoginError('Authentication failed.')
    })
    it('login with invalid password credentials read data from fixture', function () {
        loginPage.login(this.data.invalid_credentials.invalid_password.emailId, 
            this.data.invalid_credentials.invalid_password.password)
        loginPage.validateLoginError('Authentication failed.')
    })
    it('login with wrong email format credentials read data from fixture', function () {
        loginPage.login(this.data.invalid_credentials.wrong_email_format.emailId, this.data.invalid_credentials.wrong_email_format.password)
        loginPage.validateLoginError('Invalid email addressssss.')
    })
})