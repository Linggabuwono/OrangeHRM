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

    clikButton() {
        cy.xpath('//button[normalize-space()="Login"]').click();
        cy.xpath('//button[normalize-space()="Login"]').should('be', 'visible');
    }

    assertionLoginSuccess() {
        cy.url().should("include","/dashboard/index");
    }
}

export default new loginSteps();