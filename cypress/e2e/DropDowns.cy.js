describe('handle dropdowns', () => {

    /*it.skip("dropdown with select", () => {

        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get('.cwf-change-country').click()
        cy.get("#zcf_address_country_1")
            .select('Italy')
            .should("have.value", "Italy")

    })*/

    /*it("dropdown without select", () => {

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')
        cy.get('#select2-billing_country-container')
            .should("have.text", "Italy")
    })*/

    /*it("Auto suggest dropdown", () => {

        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type('Delhi')
        cy.get('.suggestion-title').contains('Delphi ').click()

    })*/

    /*it("Auto suggest dropdown", () => {

        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type('Delhi')
        cy.get('.suggestion-title').contains('Delphi ').click()

    })*/
    it("Auto suggest dropdown", () => {

        cy.visit("https://www.google.com/?hl=ru")
        cy.get("#APjFqb").type("cypress automation")
        cy.wait(3000)
        cy.get("div.wM6W7d>span").should('have.length', 13)
        cy.get('div.wM6W7d>span').each(($el, index, $list) => {
            if($el.text()=='cypress automation tool')
            {
                cy.wrap($el).click()
            }
        })
        cy.get("#APjFqb").should('have.value', 'cypress automation tool')

    })



})