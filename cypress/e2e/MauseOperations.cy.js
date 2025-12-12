import 'cypress-iframe'
require('@4tw/cypress-drag-drop')

describe('Mouse Operations', () => {
    it("Mouse hover", () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.get("a[href='#top']").should('not.be.visible')
        cy.get('#mousehover').trigger('mouseover').click()
        cy.get("a[href='#top']").should('be.visible')
    })
    it("Right click", () => {
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        /*cy.get("li[class='context-menu-item context-menu-icon context-menu-icon-copy'] span").should('not.be.visible')
        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')
        cy.get("li[class='context-menu-item context-menu-icon context-menu-icon-copy'] span").should('be.visible')
        */
        cy.get('.context-menu-one.btn.btn-neutral').rightclick()
        cy.get('.context-menu-icon-copy > span').should('be.visible')
    })
    it("Double click", () => {
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        // в support/e2e.js или конкретном тесте
        Cypress.on('uncaught:exception', (err, runnable) => {
            // игнорировать ошибки загрузки внешних скриптов
            if (
                err.message.includes('Failed to load script') ||
                err.message.includes('gpt.js') ||
                err.message.includes('doubleclick.net')
            ) {
                console.log('Ignored GPT script loading error:', err.message);
                return false;
            }
            return true;
        });
        cy.frameLoaded('#iframeResult')

            //cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick')
            //.find('#field2').should('have.value','Hello World!')

        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick()
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')
    })

    it("Drug and drop using plugin", () => {
            cy.get('#box6').drag('#box106',{force:true})
    })
    it.only("scrolling Page", () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("a[href='https://www.udemy.com/course/mobile-automation-using-appiumselenium-3/?referralCode=C46BF551F5B9EAF08E10']")
            .scrollIntoView({duration:2000})
        cy.get("a[href='https://www.udemy.com/course/mobile-automation-using-appiumselenium-3/?referralCode=C46BF551F5B9EAF08E10']")
            .should('be.visible')
        cy.get('body div:nth-child(3) div:nth-child(1) fieldset:nth-child(1) legend:nth-child(1)')
            .scrollIntoView({duration:2000})
        cy.get('body div:nth-child(3) div:nth-child(1) fieldset:nth-child(1) legend:nth-child(1)')
            .should('be.visible')
    })


})

