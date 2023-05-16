export default class wikiHomePage{
   getSearchInput () {
    return cy.get('#searchInput')
   } 

   getSearchLanguage (){
      return cy.get('#searchLanguage')
   }
   
   getSearchButton () {
      return cy.get('#search-form')
   }



}
