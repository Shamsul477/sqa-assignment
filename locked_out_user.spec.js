describe('Locked Out User Test', () => {
    it('should display error message on login attempt', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('[data-test="username"]').type('locked_out_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.');
    });
  });
  