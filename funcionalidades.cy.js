/// <reference types="cypress" />

describe('Deve testar as funcionalidades', () => {

    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve testar a inclusão de contato', () => {
        cy.get('input[type="text"]').type('Marcelo')
        cy.get('input[type="email"]').type('marcelo@teste.com')
        cy.get('input[type="tel"]').type('11 12345678')
        cy.get('.adicionar').click()
    })

    it('Deve testar a alteração das informações do contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="tel"]').type('{backspace}9')
        cy.get('.alterar').click()

        cy.on('sc-eDDNvR cTVgex',(conteudo) => {
            expect(conteudo).contain('15932635179')
        })

    })

    it('Deve testar a remoção das informações do contato', () => {
        cy.get('.delete').last().click()
    })
})