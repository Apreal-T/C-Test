class HomePage {


    pageLocator= {
        category : 'a:contains("Shop by Category")',
        mpCategory: 'a[href*="mp3-players"]' 
    }
    visit() {
      cy.visit('https://ecommerce-playground.lambdatest.io/');
    }
  
    clickShopByCategory() {
        cy.get(this.pageLocator.category).should('not.have.class', 'display' ,'none') // Ensure it doesn't have the 'd-none' class
        .invoke('show') 
        .then(() => {
          
          cy.get('a[aria-label="Shop by Category"]').first().click({force:true});
        });

    }
  
    clickMP3PlayerCategory() {
     
      cy.contains('MP3 Players')
      .scrollIntoView()
      .wait(1000) 
      .wait(1000) 
      .then(($el) => {
        
        const rect = $el[0].getBoundingClientRect();
        console.log('Element position:', rect);
        console.log('Element visibility:', $el.is(':visible'));

        
        if (!$el.is(':visible')) {
          console.error('Element is not visible after scrolling.');
          
          cy.screenshot('element-not-visible');
          
          cy.window().then((win) => {
            win.document.querySelector('a.icon-left.both.nav-link').click();
          });
        } else {
          
          cy.wrap($el).click({ force: true }).then(() => {
            console.log('Clicked on MP3 Players');
          });
        }
      })
  }
}
  
export default HomePage;