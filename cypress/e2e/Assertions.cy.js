

describe("Assertions demo", () => {

    it("Implicit assertions", ()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // should and
        //cy.url().should('include','orangehrmlive.com')
        //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.url().should("contain",'orange')

        /*cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should("contain",'orange') */

        cy.url().should('include','orangehrmlive.com')
            .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and("contain",'orangehrm')
            .and("not.contain",'greenhrm')

            cy.title().should('include', 'Orange')
                .and('eq', 'OrangeHRM')
                .and("contain", "HRM")

        cy.get('.orangehrm-login-branding > img').should('be.visible')
            .and('exist')

        cy.get("input[placeholder='Username']").type("Admin")
            .should('have.value', 'Admin')

    })
    it("Implicit assertions", ()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()


        let expName = "BCDTest 17 user"
        cy.get(".oxd-userdropdown-name").then( (x)=>{
                let actName=x.text()
            //bdd style
            //expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)



            //tdd style
            assert.notEqual(actName,expName)
            //assert.equal(actName,expName)


        } )
    })
    })