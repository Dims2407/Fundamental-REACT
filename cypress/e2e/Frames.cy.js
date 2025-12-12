import 'cypress-iframe'

describe('handling frames', () => {
    it("approach1", () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        const iframe = cy.get('#courses-iframe')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)
            iframe.clear().type('Welcome{cmd+a}')
            cy.get("[aria-label='Bold']").click();
    })
    it("approach2 - custom command", () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.getIframe('#mce_0_)ifr').clear().type('Welcome{cmd+a}')
        cy.get("[aria-label='Bold']").click();
    })
    it("approach3 - cypress-iframe plugin", () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.frameLoaded('#mce_0_ifr');
        cy.iframe('#mce_0_ifr').clear().type("Welcome{cmd+a}");
        cy.get("[aria-label='Bold']").click();
    })
})

