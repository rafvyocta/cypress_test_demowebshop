class RegisterPage {
    visit() {
      cy.visit('https://demowebshop.tricentis.com/register');
    }
  
    selectGender(gender) {
      if (gender === 'Male') {
        cy.get('#gender-male').check();
      } else if (gender === 'Female') {
        cy.get('#gender-female').check();
      }
    }
  
    fillFirstName(name) {
      cy.get('#FirstName').type(name);
    }
  
    fillLastName(name) {
      cy.get('#LastName').type(name);
    }
  
    fillEmail(email) {
      cy.get('#Email').type(email);
    }
  
    fillPassword(password) {
      cy.get('#Password').type(password);
    }
  
    fillConfirmPassword(password) {
      cy.get('#ConfirmPassword').type(password);
    }
  
    submit() {
      cy.get('#register-button').click();
    }
  
    getErrorMessage() {
      return cy.get('.field-validation-error');
    }

    getErrorMessage2() {
      return cy.get('.message-error', { timeout: 5000 }); // Ubah selector sesuai dengan pesan kesalahan yang sebenarnya
    }
  
    getSuccessMessage() {
      return cy.get('.result');
    }
  }
  
  export default RegisterPage;
  