describe('Standard User Purchase Journey', () => {
    it('should complete a purchase journey', () => {
   
      cy.visit('https://www.saucedemo.com/');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
  
     
      cy.get('.bm-burger-button').click();
      cy.contains('Reset App State').click();
      cy.get('.bm-cross-button').click();
  
      cy.get('.inventory_item').eq(0).find('.btn_inventory').click();
      cy.get('.inventory_item').eq(1).find('.btn_inventory').click();
      cy.get('.inventory_item').eq(2).find('.btn_inventory').click();
  
      cy.get('.shopping_cart_link').click();
  
     
      cy.get('.cart_item').should('have.length', 3);
  
 
      cy.contains('Checkout').click();
      cy.get('[data-test="firstName"]').type('John');
      cy.get('[data-test="lastName"]').type('Doe');
      cy.get('[data-test="postalCode"]').type('12345');
      cy.get('[data-test="continue"]').click();
  
     
      cy.get('.summary_total_label').should('contain', 'Total:');
  
  
      cy.get('[data-test="finish"]').click();
      cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER');
  
      cy.get('.bm-burger-button').click();
      cy.contains('Reset App State').click();
      cy.contains('Logout').click();
    });
  });
  