import Login from "../PageObjects/LoginPage2.js"


describe('pom', () => {

  //using pom
    it("LoginTest", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const ln=new Login()
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit()
        ln.verifyLogin()
    })

    //using pom with fixture
    it.only("LoginTest", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture("orangehrm.json").then((data)=>{
            const ln=new Login()
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ln.verifyLogin()
        })

    })
})