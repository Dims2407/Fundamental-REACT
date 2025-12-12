describe('mysuite', () => {
    it("NavigationTest", () => {
        cy.visit('https://demo.1step.online/shop')
        cy.title().should('eq', "Магазин — Интернет-Магазин Demo")
        cy.get("li[id='menu-item-4925'] span[class='link-inner']").click()
        cy.get("h1[class='page-header-title wpex-block wpex-m-0 wpex-text-2xl'] span")
            .should('have.text',"Обувь")

        cy.go('back')
        cy.title().should('eq', "Магазин — Интернет-Магазин Demo")

        cy.go('forward')
        cy.get("h1[class='page-header-title wpex-block wpex-m-0 wpex-text-2xl'] span")
            .should('have.text',"Обувь")

        cy.go(-1)
        cy.title().should('eq', "Магазин — Интернет-Магазин Demo")

        cy.go(1)
        cy.get("h1[class='page-header-title wpex-block wpex-m-0 wpex-text-2xl'] span")
            .should('have.text',"Обувь")

        cy.reload()
    })
})