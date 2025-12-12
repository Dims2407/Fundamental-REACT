//for example
describe('describe', () => {
    it("it", () => { })})


    describe('CssLocators', () => {

    it("csslocators", () => {

        cy.visit("http://www.automationpractice.pl/index.php")

        //cy.get("#search_query_top").type("T-Shirts")  // поиск по id, tag is optional
        //cy.get(".search_query").type("T-Shirts") // class
        cy.get("[name='search_query']").type("T-Shirts") // attribute

        cy.get("[name='submit_search']").click()
        cy.get(".lighter").contains("T-Shirts")
    })
    }

)

