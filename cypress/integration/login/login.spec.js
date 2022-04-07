/// <reference types="cypress"/>

describe("tests de login", () => {
    
    beforeEach(() =>{
        cy.visit("https://the-internet.herokuapp.com/login")
    })

it("valid user can login", () => {
  
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("You logged into a secure area!")
})

//solo ejecutar 1 only
it.only("valid user can login", () => {
    
    cy.get('#username').type("tomsmiths")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid!")
})

//Saltarme este skip
it.skip("valid user can login", () => {
  
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("superSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your password is invalid!")
})


})