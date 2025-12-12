

describe("Check UI Elements", ()=> {
    /*it("Checking Radio Buttons", ()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")


        cy.get("[value='radio1']").should("be.visible")
        cy.get("[value='radio2']").should("be.visible")

        cy.get("[value='radio1']").check().should("be.checked")
        cy.get("[value='radio2']").should("not.be.checked")

        cy.get("[value='radio2']").check().should("be.checked")
        cy.get("[value='radio1']").should("not.be.checked")

    }) */

    it("Checking Check Boxes", ()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

                //visible
        //cy.get("#checkBoxOption1").should("be.visible")
        //cy.get("[value='option2']").should("be.visible")
        //cy.get("[value='option3']").should("be.visible")

                //selecting single checkbox
        //cy.get("#checkBoxOption1").check().should("be.checked")
        //cy.get("#checkBoxOption1").uncheck().should("not.be.checked")

                //selecting all
        //cy.get("input[type='checkbox']").check().should("be.checked")
        //cy.get("input[type='checkbox']").uncheck().should("not.be.checked")

                //selecting first
        cy.get("input[type='checkbox']").first().check().should("be.checked")
        cy.get("input[type='checkbox']").last().check().should("be.checked")

    })
})