/// <reference types="cypress" />

describe("deve renderizar corretamente ", ()=>{
    beforeEach(()=>{
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })

    it("deve verificar se há 3 items", ()=>{
        cy.get(".contato").should("have.length", 3)
    })

    it("deve verificar se o item esta sendo incluido corretamente", ()=>{
        cy.get('[type="text"]').type("Rebeca Lima")
        cy.get('[type="email"]').type("rebecalima@teste.com")
        cy.get('[type="tel"]').type("979016039")
        cy.get('.adicionar').click()
        cy.get(".contato").should("have.length", 4)
    })
    
    it("deve verificar se o item esta sendo editado corretamente", ()=>{
        cy.get(".edit").first().click()
          cy.get('[type="text"]').clear().type("Rebeca")
           cy.get('.alterar').click()
        cy.get("ul > li").should('contain.text', 'Rebeca')
    })

    it("deve verificar se o item esta sendo excluido corretamente", ()=>{
         cy.get(".delete").last().click()
          cy.get(".contato").should("have.length", 3)
    })
})