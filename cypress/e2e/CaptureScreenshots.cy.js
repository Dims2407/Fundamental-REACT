describe('mysuite', () => {
    it("Capture screenshots", () => {
        cy.visit('http://www.automationpractice.pl/index.php')
       /* cy.screenshot('Homepage')
        cy.wait(3000)
        cy.get("img[alt='My Shop']").screenshot('logo')*/

        cy.get("body > div:nth-child(1) > div:nth-child(1) > header:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)")
            .click()
        cy.get('.cat-name').should('have.text', 'Q-shirts ')


    })
})

// npx cypress run --spec cypress/e2e/CaptureScreenshots.cy.js