describe("Test Case Login", () => {

    //Mencoba menggunakan selector xpath
    it("TC01-Login Succes", () => {
        //proses masuk ke website orangeHRM
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        //proses memasukkan username
        cy.xpath("//input[@placeholder='Username']").type("Admin").should("be.visible");
        
        //proses memasukkan password
        cy.xpath("//input[@placeholder='Password']").type("admin123").should("be.visible");
        
        //proses klik tombol login
        cy.xpath("//button[normalize-space()='Login']").click();
        
        //proses assertion pindah halaman dashboard
        cy.url().should("include","/dashboard/index");
    })

    //Mencoba menggunakan selector attribute
    it("TC02-Login Failed Wrong Username", () => {
        //proses masuk ke website orangeHRM
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        //proses input username salah
        cy.get('[placeholder="Username"]').type("Lingga").should("be.visible");

        //proses input password benar
        cy.get('[placeholder="Password"]').type("admin123").should("be.visible");
        
        //proses klik tombol login
        cy.get('[type="submit"]').click();
        
        //proses assertion gagal login
        cy.get('.oxd-alert').should("contain","Invalid credentials");
    })

    it("TC03-Login Failed Wrong Password", () => {
        //proses masuk ke website orangeHRM
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        //proses input username benar
        cy.get('[placeholder="Username"]').type("Admin").should("be.visible");
        
        //proses input password salah
        cy.get('[placeholder="Password"]').type("team123").should("be.visible");
        
        //proses klik tombol login
        cy.get('.oxd-button').click();
        
        //proses assertion gagal login
        cy.get('.oxd-alert').should("contain","Invalid credentials");
    })

    it("TC04-Forgot Password", () => {
        //proses masuk ke website orangeHRM
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        //proses input username salah
        cy.get('[placeholder="Username"]').type("Lingga").should("be.visible");
        
        //proses input password salah
        cy.get('[placeholder="Password"]').type("team123").should("be.visible");
        
        //proses klik tombol login
        cy.get(".oxd-button").click();
        
        //proses assertion pesan gagal login
        cy.get(".oxd-alert").should("contain","Invalid credentials");
        
        //proses klik tombol forgot password
        cy.get(".orangehrm-login-forgot").click();
        
        //proses assertion pindah halaman ke reset password
        cy.url().should("include","/auth/requestPasswordResetCode");
        
        //proses assertion judul halaman reset password
        cy.get("H6").should("contain","Reset Password");
    })

    it("TC05-ResetPassword", () => {
        //proses masuk ke website orangeHRM
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        //proses input username salah
        cy.get('[placeholder="Username"]').type("Lingga").should("be.visible");
        
        //proses input password salah
        cy.get('[placeholder="Password"]').type("tim123").should("be.visible");
        
        //proses klik tombol login
        cy.get(".oxd-button").click();
        
        //assertion pesan gagal login
        cy.get(".oxd-alert").should("contain","Invalid credentials");
        
        //proses klik tombol forgot
        cy.get(".orangehrm-login-forgot").click();
        
        //proses assertion pindah halaman reset password
        cy.url().should("include","/auth/requestPasswordResetCode");

        //proses assertion judul halaman reset password
        cy.get("H6").should("contain","Reset Password");

        //proses input username reset password
        cy.get(".oxd-input").type("Lingga").should("be.visible");
        
        //proses klik tombol reset
        cy.get(".oxd-button--secondary").click();
        
        //proses assertion muncul card container penjelasan reset password
        cy.get(".orangehrm-card-container").should("be.visible");
        
        //proses assertion muncul notifikasi berhasil reset password
        cy.get("H6").should("contain","Reset Password link sent successfully");
    })

    it("TC06-LoginSuccess > Dashboard", () => {
        //proses masuk ke website orangeHRM
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        //proses input username benar
        cy.get('[placeholder="Username"]').type("Admin").should("be.visible");
        
        //proses input password benar
        cy.get('[placeholder="Password"]').type("admin123").should("be.visible");
        
        //proses klik tombol login
        cy.get('.oxd-button').click();
        
        //proses assertion berhasil login dan masuk halaman dashboard
        cy.url().should("include","/dashboard/index");
    })
})