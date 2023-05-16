describe('Wikipedia Tests', () => {
  
  it('loads the homepage', () => {
    cy.visit('https://en.wikipedia.org')
    cy.title().should('contain', 'Wikipedia')
  });

  it('search returns the correct result', () => {
    const searchTerm = 'Frog'
    const expectedTitle = 'Frog - Wikipedia'
    cy.searchWikipedia(searchTerm)
    cy.url().should('include', 'Frog')
  });

  it('opens the hamburger menu and selects random page link', () => {
    cy.visit('https://en.wikipedia.org')
    cy.get('[aria-label="Main menu"]').click()
    cy.get('#n-randompage').click()
    cy.title().should('not.be.empty')
  })

  it('open Wikipedia About page', () =>{
    cy.visit('https://en.wikipedia.org')
    cy.clickHamburgerMenuLink('About Wikipedia')
    cy.url().should('include', 'About')
  })
  
  it('read wikipedia in your language dropdown', () =>{
    cy.visit('https://wikipedia.org');
    cy.contains('Read Wikipedia in your language').click()
    cy.get('.lang-list-active').should('be.visible')
    cy.get('.langlist').contains('Español')
  })

});