import 'cypress-file-upload';

describe('File uploads', () => {
    it("Single File Upload", () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('test1.jpg')
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })
    it("File Upload - Rename", () => {

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'test1.jpg', fileName:'test123.jpg'})
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })

    it("File Upload - drug and drop", () => {

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile("test1.jpg",{subjectType:'drag-n-drop'})
        cy.wait(3000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
            .contains("test1.jpg")
    })
    it("multiple files upload", () => {

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(["test1.jpg", "test2.txt"])
        cy.wait(5000)
        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected')
    })
    it.only("file upload - shadow dom", () => {

        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile('test1.jpg')
        cy.wait(3000)

        cy.get('.smart-item-name',{includeShadowDom:true}).contains('test1.jpg')


    })
})

