import loginSteps from "../../support/pageObjects/loginSteps"
import loginData from "../../fixtures/loginData.json"

describe("Test Case Login", () => {

    //prses masuk ke website orangeHRM
    beforeEach (() =>
    {
        loginSteps.visit();
    })

    //Mencoba menggunakan selector xpath
    it("TC01-Login Succes", () => {
        //cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        //proses memasukkan username
        loginSteps.masukkanUsername(loginData.validUsername);
        //cy.xpath("//input[@placeholder='Username']").type("Admin").should("be.visible");
        
        //proses memasukkan password
        loginSteps.masukkanPassword(loginData.validPassword);
        //cy.xpath("//input[@placeholder='Password']").type("admin123").should("be.visible");
        
        //proses klik tombol login
        loginSteps.clikButton();
        //cy.xpath("//button[normalize-space()='Login']").click();
    
        //proses assertion pindah halaman dashboard
        loginSteps.assertionLoginSuccess();
        //cy.url().should("include","/dashboard/index");
    })

    //Mencoba menggunakan selector attribute
    it("TC02-Login Failed Wrong Username", () => {
        //proses input username salah
        loginSteps.masukkanUsername(loginData.invalidUsername);
        //cy.get('[placeholder="Username"]').type("Lingga").should("be.visible");

        //proses input password benar
        loginSteps.masukkanPassword(loginData.validPassword);
        //cy.get('[placeholder="Password"]').type("admin123").should("be.visible");
        
        //proses klik tombol login
        loginSteps.clikButton();
        //cy.get('[type="submit"]').click();
        
        //proses assertion gagal login
        loginSteps.assertionMessageGagal();
        //cy.get('.oxd-alert').should("contain","Invalid credentials");
    })

    it("TC03-Login Failed Wrong Password", () => {
        //proses input username benar
        loginSteps.masukkanUsername(loginData.validUsername);
        //cy.get('[placeholder="Username"]').type("Admin").should("be.visible");
        
        //proses input password salah
        loginSteps.masukkanPassword(loginData.invalidPassword);
        //cy.get('[placeholder="Password"]').type("team123").should("be.visible");
        
        //proses klik tombol login
        loginSteps.clikButton();
        //cy.get('.oxd-button').click();
        
        //proses assertion gagal login
        loginSteps.assertionMessageGagal();
        //cy.get('.oxd-alert').should("contain","Invalid credentials");
    })

    it("TC04-Forgot Password", () => {
        //proses input username salah
        loginSteps.masukkanUsername(loginData.invalidUsername)
        //cy.get('[placeholder="Username"]').type("Lingga").should("be.visible");
        
        //proses input password salah
        loginSteps.masukkanPassword(loginData.invalidPassword)
        //cy.get('[placeholder="Password"]').type("team123").should("be.visible");
        
        //proses klik tombol login
        loginSteps.clikButton()
        //cy.get(".oxd-button").click();
        
        //assertion pesan gagal login
        loginSteps.assertionMessageGagal()
        //cy.get(".oxd-alert").should("contain","Invalid credentials");
        
        //proses klik tombol forgot password
        loginSteps.clikButtonForget()
        //cy.get(".orangehrm-login-forgot").click();
        
        //assertion pindah halaman ke reset password
        loginSteps.assertionPindahHalamaForgotPassword()
        //cy.url().should("include","/auth/requestPasswordResetCode");
        
        //assertion judul halaman reset password
        loginSteps.assertionJudulResetPassword()
        //cy.get("H6").should("contain","Reset Password");
    })

    it("TC05-ResetPassword", () => {
        //proses input username salah
        loginSteps.masukkanUsername(loginData.invalidUsername)
        //cy.get('[placeholder="Username"]').type("Lingga").should("be.visible");
        
        //proses input password salah
        loginSteps.masukkanPassword(loginData.invalidPassword)
        //cy.get('[placeholder="Password"]').type("tim123").should("be.visible");
        
        //proses klik tombol login
        loginSteps.clikButton()
        //cy.get(".oxd-button").click();
        
        //assertion pesan gagal login
        loginSteps.assertionMessageGagal()
        //cy.get(".oxd-alert").should("contain","Invalid credentials");
        
        //proses klik tombol forgot
        loginSteps.clikButtonForget()
        //cy.get(".orangehrm-login-forgot").click();
        
        //assertion pindah halaman reset password
        loginSteps.assertionPindahHalamaForgotPassword()
        //cy.url().should("include","/auth/requestPasswordResetCode");

        //assertion judul halaman reset password
        loginSteps.assertionJudulResetPassword()
        //cy.get("H6").should("contain","Reset Password");

        //proses input username reset password
        loginSteps.masukkanUsernameResetPassword(loginData.reset)
        //cy.get(".oxd-input").type("Lingga").should("be.visible");
        
        //proses klik tombol reset
        loginSteps.clickButtonReset()
        //cy.get(".oxd-button--secondary").click();
        
        //proses assertion muncul card container penjelasan reset password
        cy.get(".orangehrm-card-container").should("be.visible");
        
        //proses assertion muncul notifikasi berhasil reset password
        cy.get("H6").should("contain","Reset Password link sent successfully");
    })

    it("TC06-LoginSuccess > Dashboard", () => {
        //proses input username benar
        loginSteps.masukkanUsername(loginData.validUsername)
        //cy.get('[placeholder="Username"]').type("Admin").should("be.visible");
        
        //proses input password benar
        loginSteps.masukkanPassword(loginData.validPassword)
        //cy.get('[placeholder="Password"]').type("admin123").should("be.visible");
        
        //proses klik tombol login
        loginSteps.clikButton()
        //cy.get('.oxd-button').click();
        
        //proses assertion berhasil login dan masuk halaman dashboard
        loginSteps.assertionLoginSuccess()
        //cy.url().should("include","/dashboard/index");
    })
})