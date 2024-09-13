/// <reference types= "cypress"/>

import HomePage from '../support/pageObjects/HomePage';
import ProductPage from '../support/pageObjects/ProductPage';
import CheckoutPage from '../support/pageObjects/CheckoutPage';

describe('E-commerce Checkout Process', () => {
  const homePage = new HomePage();
  const productPage = new ProductPage();
  const checkoutPage = new CheckoutPage();

  it('Completes the purchase of an MP3 Player', () => {
    // Step 1: Visit the homepage
    homePage.visit();

    // Step 2: Click on "Shop by Category" and then "MP3 Player"
    homePage.clickShopByCategory();
    homePage.clickMP3PlayerCategory();

    // Step 3: Hover over the first MP3 player and add it to the cart
    productPage.hoverOverFirstProduct();
    //productPage.addToCart();

    // Step 4: Proceed to checkout
    productPage.proceedToCheckout();

    // Step 5: Fill in personal details and uncheck newsletter
    checkoutPage.fillPersonalDetails();
    checkoutPage.uncheckNewsletter();

    checkoutPage.clickPrivacyPolicy();
    checkoutPage.clickTermsAndConditions();

    checkoutPage.completeCheckout();
    
  });
});