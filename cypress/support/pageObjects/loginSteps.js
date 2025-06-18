import loginData from "../../fixtures/loginData.json"

class loginSteps {
    visit() {
        cy.visit('/auth/login')
    }

    masukkanUsername(username) {
        cy.xpath('//input[@placeholder="Username"]').type(username).should('have.value', username)
        cy.xpath('//input[@placeholder="Username"]').should('be.visible');
    }

    masukkanPassword(password) {
        cy.xpath('//input[@placeholder="Password"]').type(password).should('have.value',password);
        cy.xpath('//input[@placeholder="Password"]').should('be.visible');
    }

    masukkanUsernameResetPassword(reset){
        cy.get(".oxd-input").type(reset).should('have.value', reset)
    }

    clikButton() {
        cy.xpath("//button[normalize-space()='Login']").should('be.visible')
        cy.xpath("//button[normalize-space()='Login']").click();
    }

    clikButtonForget() {
        cy.get(".orangehrm-login-forgot").click();
    }

    clickButtonReset() {
        cy.get(".oxd-button--secondary").click();
    }

    assertionLoginSuccess() {
        cy.url().should("include","/dashboard/index");
    }

    assertionMessageGagal(){
        cy.get('.oxd-alert').should("contain","Invalid credentials");
    }

    assertionPindahHalamaForgotPassword() {
        cy.url().should("include","/auth/requestPasswordResetCode");
    }

    assertionJudulResetPassword() {
        cy.get("H6").should("contain","Reset Password");
    }
}

export default new loginSteps();