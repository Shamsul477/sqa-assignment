describe('Performance Glitch User Test', () => {
    it('should complete a purchase journey with sorting', () => {
      // Login
      cy.visit('https://www.saucedemo.com/');
      cy.get('[data-test="username"]').type('performance_glitch_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
  
      // Reset App State
      cy.get('.bm-burger-button').click();
      cy.contains('Reset App State').click();
      cy.get('.bm-cross-button').click();
  
      // Sort by Name (Z to A)
      cy.get('[data-test="product_sort_container"]').select('Name (Z to A)');
  
      // Add first product to cart
      cy.get('.inventory_item').eq(0).find('.btn_inventory').click();
  
      // Go to Cart
      cy.get('.shopping_cart_link').click();
  
      // Verify item name and price
      cy.get('.cart_item').should('have.length', 1);
  
      // Checkout
      cy.contains('Checkout').click();
      cy.get('[data-test="firstName"]').type('Jane');
      cy.get('[data-test="lastName"]').type('Doe');
      cy.get('[data-test="postalCode"]').type('12345');
      cy.get('[data-test="continue"]').click();
  
      // Verify total price
      cy.get('.summary_total_label').should('contain', 'Total:');
  
      // Finish Order
      cy.get('[data-test="finish"]').click();
      cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER');
  
      // Reset App State and Logout
      cy.get('.bm-burger-button').click();
      cy.contains('Reset App State').click();
      cy.contains('Logout').click();
    });
  });
  