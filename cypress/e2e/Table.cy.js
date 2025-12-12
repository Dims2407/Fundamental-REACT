describe('TAble', () => {

    //beforeEach('Visit',()=>{cy.visit('https://rahulshettyacademy.com/AutomationPractice/')})

    it.skip("Check number rows & columns", () => {

        cy.get("table[class='table-display']>tbody>tr").should('have.length', '11')
        cy.get("div[class='tableFixHead']>table>thead>tr>th").should('have.length', '4')
    })
    it.skip("Check cell data from specific row & column", () => {

        cy.get("div[class='tableFixHead']>table>tbody>tr:nth-child(5)>td:nth-child(3)")
            .contains("Pune")

    })

    it.skip("Read all the rows & columns data in the first page", () => {

        cy.get("div[class='tableFixHead']>table>tbody>tr")
            .each(($row, index, $rows) => {
                cy.wrap($row).within(()=>{
                    cy.get('td').each(($col, index, $cols) =>{
                        cy.log($col.text())
                    })
                })
            })



    })
    it("Pagination", () => {
        //find total numbers
        cy.visit('https://practice.expandtesting.com/dynamic-pagination-table')
        /*let totalPages;
        cy.get('#example_info').then((e) =>{
            let mytext=e.text() //Showing 1 to 3 of 10 entries
            totalPages=mytext.substring(mytext.indexOf("f") +1, mytext.indexOf("entries")-1)
            cy.log("Total number of pages in a table===>"+totalPages)
        })*/
        let totalPages=4;
        for (let p=2;p<=totalPages;p++)
        {
            if (totalPages>1)
            {
                cy.log("Active page is==="+p)
                //paginate_button page-item
                //ul[class='pagination']>li:nth-child(2)
                cy.get(".pagination>li:nth-child("+p+")").click()
                cy.wait(3000)
                cy.get("table[class='table table-striped table-bordered dataTable no-footer']>tbody>tr").each(($row, index, $rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text())
                        })
                    })
                })

            }
        }
    })


})