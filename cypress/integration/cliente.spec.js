/// <reference types="cypress" />

const { first } = require("cypress/types/lodash")

 
context('Deve buscar torne-se um programador no google', () => {
  beforeEach(() => {
    cy.visit('https://www.torneseumprogramador.com.br/')
  })

  it('Deve pesquisar por TORNE-SE UM PROGRAMADOR ', () => {
    cy.get('#aula').type('integração continua')
    cy.get('.btn-pesquisa').submit()
    cy.get('.div-card-aulas a').first().click()

    })

    
    
  })


