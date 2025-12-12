describe('Custom commands', () => {
    it("handling links", () => {
        cy.visit("https://demo.1step.online/shop/")
        cy.clickLink("Белый Кружевной Топ")
        cy.get(".product_title.entry-title.single-post-title").should('have.text','Белый Кружевной Топ')
    })

    it.only("handling links", () => {
        cy.visit("https://demo.1step.online/shop/")
        cy.clickLink("Вход")
        cy.loginapp("UserName","UserPassword")
        cy.get('.ico-account').should('have.text',' My account')

    })
})