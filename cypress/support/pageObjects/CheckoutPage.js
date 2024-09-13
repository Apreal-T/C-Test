class CheckoutPage {

    pageLocator = {
        firstName : 'input[name="firstname"]',
        lastName :'input[name="lastname"]',
        email : 'input[name="email"]', 
        phoneNo : 'input[name="telephone"]',
        address : 'input[name="address_1"]',
        city : 'input[name="city"]',
        postCode : 'input[name="postcode"]',
        countryId : 'select[name="country_id"]',
        zoneId : 'select[name="zone_id"]',
        newsLetter: 'input[name="newsletter"]',
        paymentBtn: '#button-payment-address',
        shipBtn: '#button-shipping-address',
        shipMtd: '#button-shipping-method',
        termsBtn: 'input[name="account_agree"]' ,
        confirmBtn: '#button-confirm',
        successText: 'h1',
        password: 'input[name="password"]',
        confirmPwd:'input[name="confirm"]',
        tAndC: 'input[name="agree"]'


    }
    fillPersonalDetails() {
      cy.get(this.pageLocator.firstName).type('Esther');
      cy.get(this.pageLocator.lastName).type('Thompson');
      cy.get(this.pageLocator.email).type('chizzyolaesy@gmail.com');
      cy.get(this.pageLocator.phoneNo).type('0234567890');
      cy.get(this.pageLocator.password).type('Pass@123')
      cy.get(this.pageLocator.confirmPwd).type('Pass@123')
      cy.get(this.pageLocator.address).type('13 Iyana Ipaja');
      cy.get(this.pageLocator.city).type('New York');
      cy.get(this.pageLocator.postCode).type('10001');
      cy.get(this.pageLocator.countryId).select('United States');
      cy.get(this.pageLocator.zoneId).select('New York');


    }
     

    
  
    uncheckNewsletter() {
      cy.get(this.pageLocator.newsLetter).uncheck({force:true});
    }

    clickPrivacyPolicy(){
      cy.get(this.pageLocator.termsBtn).check({force:true}).should('be.checked');
    }

    clickTermsAndConditions(){
      cy.get(this.pageLocator.tAndC).check({force:true}).should('be.checked');;
    }
  
   
  completeCheckout() {

    cy.contains('Continue').click();

   
  }

  verifyOrderConfirmation() {
    cy.contains('Your order has been placed!').should('be.visible');
  

   cy.screenshot('checkout_page_state'); // Take a screenshot for reference
   cy.get('body').then(($body) => {
      cy.log('Current body HTML:', $body.html()); // Log the current state of the body
   });
  
  cy.contains('Confirm Order', { timeout: 30000 }) // Increase timeout if necessary
    .then(($el) => {
      if ($el.length) {
        cy.log('Element found:', $el);
        cy.wrap($el).should('be.visible').click(); // Avoid force if possible
      } else {
        cy.log('Element not found');
      }
    });

  }
}
  
export default CheckoutPage;