/// <reference types="cypress" />
export class GoogleSearch{
    googleSearch(){
    return cy.get('input[name="q"]').first();
    }
    googleSearchBtn(){
     return cy.get('input[name="btnK"]').first();
     }
     searchResults(){
         return cy.get('h3').first();
     }
  }