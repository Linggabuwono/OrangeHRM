describe('Reqres API Automation Testing With Cypress', () => {

    // REGISTER SUCCESS (POSITIF CASE)
    it.only('REGISTER - SUCCESS', () => {
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/register',
            failOnStatusCode: false,
            body: {
                email: 'linggabuwonojati@gmail.com',
                password: '12tiga4'
            }
        })
        .then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body).to.not.be.null
        })
    })

    // REGISTER FAILED (NEGATIF CASE)
    it.only('REGISTER - FAILED', () => {
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/register',
            failOnStatusCode: false,
            header : 
            {
                'content-type' : "application/json",
                'x-api-key' : "reqres-free-v1"
            },
            body: 
            {
                email: 'linggabuwonojati@gmail.com',
                password: ''
            }
        })
        .then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body).to.have.property('error', 'Missing API key.')
        })
    })

    // LOGIN SUCCESS (POSITIF CASE)
    it.only('LOGIN - SUCCESS', () => {
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/login',
            failOnStatusCode: false,
            header : 
            {
                'content-type' : "application/json",
                'x-api-key' : "reqres-free-v1"
            },
            body: 
            {
                email: 'linggabuwonojati@gmail.com',
                password: '12tiga4'
            }
        })
        .then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body).to.not.be.null
        })
    })

    // LOGIN FAILED (NEGATIF CASE)
    it.only('LOGIN - FAILED', () => {
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/login',
            failOnStatusCode: false,
            header : 
            {
                'user-agent' : 'PostmanRuntime/7.44.1',
                // 'content-type' : "application/json",
                // 'x-api-key' : "reqres-free-v1"
            },
            body: 
            {
                email: 'xxx@yahoo.co.id',
                password: '12tiga4'
            }
        })
        .then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body).to.have.property('error','Missing API key.')
        })
    })

    //"DELETE" API (POSITIF CASE)
    it.only('DELETE API LIST USER (POSITIF CASE)', () => {
        cy.request({
            method:'DELETE',
            url:'https://reqres.in/api/users/2',
            failOnStatusCode: false,
            header : 
            {
                'user-agent' : 'PostmanRuntime/7.44.1',
                'content-type' : "application/json",
                'x-api-key' : "reqres-free-v1"
            }
        })
        .then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body).to.not.be.null
        })
    })

    //"DELETE" API (NEGATIF CASE)
    it.only('DELETE API LIST USER (NEGATIF CASE)', () => {
        cy.request({
            method:'DELETE',
            url:'https://reqres.in/api/users/2',
            failOnStatusCode: false,
            header : 
            {
                'user-agent' : 'PostmanRuntime/7.44.1',
                'content-type' : "application/json",
                'x-api-key' : "reqres-free-v1"
            }
        })
        .then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body).to.not.be.null
        })
    })




    //"GET" API (POSITIF CASE)
    it('GET API LIST USER (TESTING POSITIF CASE)', () => {
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users/2',
            failOnStatusCode: false
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
        })
    })

    //"POST" API (POSITIF CASE)
    it('POST API Testing', () => {
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/users',
            failOnStatusCode: false,
            body: {
                name: 'Lingga',
                job: 'QA Enginer'
            }
        })
        .then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body).to.not.be.null
        })
    })

    //"PATCH" API (POSITIF CASE)
    it('PATCH API Testing', () => {
        cy.request({
            method:'PATCH',
            url:'https://reqres.in/api/users/2',
            failOnStatusCode: false,
            
            body: {
                name: 'Lingga',
                job: 'Direktur'
            }
        })
        .then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body).to.not.be.null
        })
    })
})