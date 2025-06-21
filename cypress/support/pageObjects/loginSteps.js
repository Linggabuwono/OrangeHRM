import loginData from "../../fixtures/loginData.json"

class loginSteps {
    visit() {
        cy.visit('/auth/login')
    }

    //============================================TYPE INPUT============================================//
    masukkanUsername(username) {
        cy.xpath('//input[@placeholder="Username"]').type(username).should('have.value', username)
        cy.xpath('//input[@placeholder="Username"]').should('be.visible');
    }

    masukkanPassword(password) {
        cy.xpath('//input[@placeholder="Password"]').type(password).should('have.value',password);
        cy.xpath('//input[@placeholder="Password"]').should('be.visible');
    }

    masukkanUsernameResetPassword(reset){
        cy.get('.oxd-input').type(reset).should('have.value', reset)
    }

    masukkanUsernameSystemUser(userSystem){
        cy.get(':nth-child(2) > .oxd-input').type(userSystem).should('have.value', userSystem)
    }

    masukkanEmployeeDirectory(userDirectory) {
        cy.get('.oxd-autocomplete-text-input > input').type(userDirectory).should('have.value', userDirectory)
        cy.wait(7000)
        cy.get('.oxd-autocomplete-option').click()
        cy.get('.oxd-autocomplete-text-input > input').should('have.value', 'siu  do')
    }

    //============================================CLICK BUTTON============================================//
    clikButtonLogin() {
        cy.xpath("//button[normalize-space()='Login']").should('be.visible')
        cy.xpath("//button[normalize-space()='Login']").click();
    }

    clikButtonForget() {
        cy.get(".orangehrm-login-forgot").should('be.visible')
        cy.get(".orangehrm-login-forgot").click();
    }

    clickButtonReset() {
        cy.get('.oxd-button--secondary').should('be.visible')
        cy.get('.oxd-button--secondary').click();
    }

    clickButtonSideBarAdmin() {
        cy.contains('Admin').should('be.visible')
        cy.contains('Admin').click();
    }

    clickButtonSearchAdmin() {
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    }

    clickButtonSideBarDirectory() {
        cy.contains('Directory').should('be.visible')
        cy.contains('Directory').click();
    }

    clickButtonSearchDirectory() {
        cy.get('.oxd-button--secondary').should('be.visible')
        cy.get('.oxd-button--secondary').click()
    }
    

    //============================================ASSERTION============================================//
    assertionLoginSuccess() {
        cy.url().should('include','/dashboard/index');
    }

    assertionMessageGagal(){
        cy.get('.oxd-alert').should('contain','Invalid credentials');
    }

    assertionPindahHalamaForgotPassword() {
        cy.url().should('include','/auth/requestPasswordResetCode');
    }

    assertionPindahHalamanSidebarAdmin() {
        cy.url().should('include', '/index.php/admin/viewSystemUsers')
    }

    assertionPindahHalamanSidebarDirectory() {
        cy.url().should('include', '/index.php/directory/viewDirectory')
    }

    assertionMunculTabelAdmin() {
        cy.get('.orangehrm-container').should('be.visible')
        cy.get('.orangehrm-container').should('contain', 'Admin')
    }
    
    assertionMunculTabelDirectory(){
        cy.get('.oxd-sheet').should('be.visible')
        cy.get('.oxd-sheet').should('contain', 'siu  do')
    }

    assertionJudulResetPassword() {
        cy.get("H6").should('contain','Reset Password');
    }

    assertionJudulRecordsFound() {
        cy.get('.orangehrm-horizontal-padding > .oxd-text').should('be.visible')
    }

    assertionJudulRecordFoundDirectory(){
        cy.get('.orangehrm-horizontal-padding').should('be.visible')
    }
}

export default new loginSteps();