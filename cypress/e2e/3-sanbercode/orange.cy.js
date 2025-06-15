describe("Test Case Login", () => {
    //Mencoba menggunakan selector xpath
    it("TC01-LoginSucces", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.xpath("//input[@placeholder='Username']").type("Admin").should("be.visible");
        cy.xpath("//input[@placeholder='Password']").type("admin123").should("be.visible");
        cy.xpath("//button[normalize-space()='Login']").click();
        cy.url().should("include","/dashboard/index");
    })

    //Mencoba menggunakan selector attribute
    it("TC02-LoginFailed", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('[placeholder="Username"]').type("Lingga").should("be.visible");
        cy.get('[placeholder="Password"]').type("admin123").should("be.visible");
        cy.get('[type="submit"]').click();
        cy.get('.oxd-alert').should("contain","Invalid credentials");
    })

    it("TC03-LoginFailed", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('[placeholder="Username"]').type("Admin").should("be.visible");
        cy.get('[placeholder="Password"]').type("team123").should("be.visible");
        cy.get('.oxd-button').click();
        cy.get('.oxd-alert').should("contain","Invalid credentials");
    })

    it("TC04-ForgotPassword", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('[placeholder="Username"]').type("Lingga").should("be.visible");
        cy.get('[placeholder="Password"]').type("team123").should("be.visible");
        cy.get(".oxd-button").click();
        cy.get(".oxd-alert").should("contain","Invalid credentials");
        cy.get(".orangehrm-login-forgot").click();
        cy.url().should("include","/auth/requestPasswordResetCode");
        cy.get("H6").should("contain","Reset Password");
    })

    it("TC05-ResetPassword", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('[placeholder="Username"]').type("Lingga").should("be.visible");
        cy.get('[placeholder="Password"]').type("tim123").should("be.visible");
        cy.get(".oxd-button").click();
        cy.get(".oxd-alert").should("contain","Invalid credentials");
        cy.get(".orangehrm-login-forgot").click();
        cy.url().should("include","/auth/requestPasswordResetCode");
        cy.get("H6").should("contain","Reset Password");
        cy.get(".oxd-input").type("Lingga").should("be.visible");
        cy.get(".oxd-button--secondary").click();
        cy.get(".orangehrm-card-container").should("be.visible");
        cy.get("H6").should("contain","Reset Password link sent successfully");
    })

    it.only("TC06-LoginSuccess > Dashboard", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('[placeholder="Username"]').type("Admin").should("be.visible");
        cy.get('[placeholder="Password"]').type("admin123").should("be.visible");
        cy.get('.oxd-button').click();
        cy.url().should("include","/dashboard/index");
    })
})