import loginSteps from "../../support/pageObjects/loginSteps"
import loginData from "../../fixtures/loginData.json"

describe("Test Case Login", () => {

    beforeEach (() =>
    {
        loginSteps.visit();
    })

    it("TC01-Login Succes", () => {   
        //proses memasukkan username
        loginSteps.masukkanUsername(loginData.validUsername);
        //proses memasukkan password
        loginSteps.masukkanPassword(loginData.validPassword);
        //menerapkan intercepts
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('actoinSummary');
        //proses klik tombol login
        loginSteps.clikButtonLogin();
        cy.wait('@actoinSummary');
        //proses assertion pindah halaman dashboard
        loginSteps.assertionLoginSuccess();
    })

    it("TC02-Login Failed Wrong Username", () => {
        //proses input username salah
        loginSteps.masukkanUsername(loginData.invalidUsername);
        //proses input password salah
        loginSteps.masukkanPassword(loginData.validPassword);
         //menerapkan intercepts
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('message');
        //proses klik tombol login
        loginSteps.clikButtonLogin();
        cy.wait('@message');
        //proses assertion pesan gagal login
        loginSteps.assertionMessageGagal();
    })

    it("TC03-Login Failed Wrong Password", () => {
        //proses input username benar
        loginSteps.masukkanUsername(loginData.validUsername);        
        //proses input password salah
        loginSteps.masukkanPassword(loginData.invalidPassword);        
         //menerapkan intercepts
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('messages');
        //proses klik tombol login
        loginSteps.clikButtonLogin();        
        cy.wait('@messages');
        //proses assertion pesan gagal login
        loginSteps.assertionMessageGagal();
    })

    it("TC04-Forgot Password", () => {
        //proses input username salah
        loginSteps.masukkanUsername(loginData.invalidUsername)        
        //proses input password salah
        loginSteps.masukkanPassword(loginData.invalidPassword)
         //menerapkan intercepts
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('messages');
        //proses klik tombol login
        loginSteps.clikButtonLogin()
        cy.wait('@messages');
        //assertion pesan gagal login
        loginSteps.assertionMessageGagal()
        //menerapkan intercepts
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('messages');
        //proses klik tombol forgot password
        loginSteps.clikButtonForget()
        cy.wait('@messages')
        //assertion pindah halaman ke reset password
        loginSteps.assertionPindahHalamaForgotPassword()
        //assertion judul halaman reset password
        loginSteps.assertionJudulResetPassword()
    })

    it("TC05-ResetPassword", () => {
        //proses input username salah
        loginSteps.masukkanUsername(loginData.invalidUsername)
        //proses input password salah
        loginSteps.masukkanPassword(loginData.invalidPassword)
         //menerapkan intercepts
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('messages');
        //proses klik tombol login
        loginSteps.clikButtonLogin()
        cy.wait('@messages');
        //assertion pesan gagal login
        loginSteps.assertionMessageGagal()
        //menerapkan intercepts
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('messages');
        //proses klik tombol forgot
        loginSteps.clikButtonForget()
        cy.wait('@messages')
        //assertion pindah halaman reset password
        loginSteps.assertionPindahHalamaForgotPassword()
        //assertion judul halaman reset password
        loginSteps.assertionJudulResetPassword()
        //proses input username reset password
        loginSteps.masukkanUsernameResetPassword(loginData.reset)
        //menerapkan intercepts
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('messages');    
        //proses klik tombol reset
        loginSteps.clickButtonReset()
        cy.wait('@messages')
        cy.get(".orangehrm-card-container").should("be.visible");
        cy.get("H6").should("contain","Reset Password link sent successfully");
    })

    it("TC06-LoginSuccess > Dashboard", () => {
        //proses input username benar
        loginSteps.masukkanUsername(loginData.validUsername)
        //proses input password benar
        loginSteps.masukkanPassword(loginData.validPassword)
         //menerapkan intercepts
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('messages');
        //proses klik tombol login
        loginSteps.clikButtonLogin()
        cy.wait('@messages');
        //assertion berhasil login
        loginSteps.assertionLoginSuccess()
        //proses klik sidebar menu >> Admin
        loginSteps.clickButtonSideBarAdmin()
        //assertion pindah halaman sidebar menu >> Admin
        loginSteps.assertionPindahHalamanSidebarAdmin()
        //proses memasukkan username untuk mencari user
        loginSteps.masukkanUsernameSystemUser(loginData.userSystem)
        //proses klik tombol Search
        loginSteps.clickButtonSideBarAdmin()
        //assertion muncul tabel dengan data Admin
        loginSteps.assertionMunculTabel()
        //assertion muncul tulisan Records Found
        loginSteps.assertionJudulRecordsFound()
    })
})