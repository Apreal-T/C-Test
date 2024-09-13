class ProductPage {

    pageLocator = {
        firstProduct: 'div.product-layout',
        cartBtn: '.fa-shopping-cart',
        clickCart:'#cart',
        clickCheckout: '.text-right > .btn-primary'
    }
    hoverOverFirstProduct() {
      cy.wait(3000); 

    
      cy.get('.product-layout', { timeout: 15000 })
        .should('exist')
        .and('be.visible')
        .then(() => {
          console.log('Product layout loaded successfully.');
        });
  
      
      cy.get('.loading-spinner', { timeout: 15000 }).should('not.exist');

      cy.get('.product-layout').first().trigger('mouseover');

      
      cy.get('.fa-shopping-cart', { timeout: 10000 }).should('be.visible');
  
    
      cy.get('.fa-shopping-cart').first().click({ force: true });


  }
    

    

    proceedToCheckout() {
      //cy.contains('View Cart').click();
      cy.contains('Checkout').click({force:true});
    }
}
  
export default ProductPage;