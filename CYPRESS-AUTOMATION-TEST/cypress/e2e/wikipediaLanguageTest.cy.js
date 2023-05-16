import wikiHomePage from '../../cypress/support/pages/wikiHomePage'


describe('Multilingual support test', () => {
  const homePage = new wikiHomePage()

  const languages = ['en', 'es', 'fr']; 

  beforeEach(() => {
    cy.visit('https://www.wikipedia.org');
  });

  languages.forEach((language) => {
    it(`Should be able to search for an article in ${language} language`, () => {
      homePage.getSearchInput().type('Golf')
      homePage.getSearchLanguage().select(`${language}`)
      homePage.getSearchButton().submit()

      cy.url().should('include', `${language}`)
      cy.get('#firstHeading').should('contain', 'Golf')
    });
  });
});