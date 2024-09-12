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
      //cy.get(this.pageLocator.mpCategory,  { timeout: 10000 }).should('be.visible').click();
      cy.contains('MP3 Players')
      .scrollIntoView()
      .wait(1000) // Wait after scrolling
      .wait(1000) // Wait after scrolling
      .then(($el) => {
        // Log the element's position and visibility
        const rect = $el[0].getBoundingClientRect();
        console.log('Element position:', rect);
        console.log('Element visibility:', $el.is(':visible'));

        // Check if the element is actually visible
        if (!$el.is(':visible')) {
          console.error('Element is not visible after scrolling.');
          // Optionally, take a screenshot for debugging
          cy.screenshot('element-not-visible');
          // Attempt to click using JavaScript
          cy.window().then((win) => {
            win.document.querySelector('a.icon-left.both.nav-link').click();
          });
        } else {
          // Click the element with force if it's visible
          cy.wrap($el).click({ force: true }).then(() => {
            console.log('Clicked on MP3 Players');
          });
        }
      })
  }
}
  
export default HomePage;