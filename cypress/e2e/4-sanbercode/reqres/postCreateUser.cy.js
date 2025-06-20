/// <reference types="cypress"/>

describe('Reqres API Testing', () => {
    it('POST API Testing', () => {
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/users',
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