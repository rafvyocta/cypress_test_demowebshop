import RegisterPage from '../support/pageObjects/RegisterPage';

describe('Register Page Tests', () => {
  const registerPage = new RegisterPage();

  beforeEach(() => {
    registerPage.visit();
  });

  it('Register Success - Valid (Male)', function () {
    cy.fixture('user').then((user) => {
      registerPage.selectGender(user.validMaleUser.gender);
      registerPage.fillFirstName(user.validMaleUser.firstName);
      registerPage.fillLastName(user.validMaleUser.lastName);
      registerPage.fillEmail(user.validMaleUser.email);
      registerPage.fillPassword(user.validMaleUser.password);
      registerPage.fillConfirmPassword(user.validMaleUser.password);
      registerPage.submit();

      registerPage.getSuccessMessage().should('contain', 'Your registration completed');
    });
  });

  it('Register Success - Valid (Female)', function () {
    cy.fixture('user').then((user) => {
      registerPage.selectGender(user.validFemaleUser.gender);
      registerPage.fillFirstName(user.validFemaleUser.firstName);
      registerPage.fillLastName(user.validFemaleUser.lastName);
      registerPage.fillEmail(user.validFemaleUser.email);
      registerPage.fillPassword(user.validFemaleUser.password);
      registerPage.fillConfirmPassword(user.validFemaleUser.password);
      registerPage.submit();

      registerPage.getSuccessMessage().should('contain', 'Your registration completed');
    });
  });

  it('Register Failed - Mismatched passwords', function () {
    cy.fixture('user').then((user) => {
      registerPage.selectGender(user.invalidUserMismatchPassword.gender);
      registerPage.fillFirstName(user.invalidUserMismatchPassword.firstName);
      registerPage.fillLastName(user.invalidUserMismatchPassword.lastName);
      registerPage.fillEmail(user.invalidUserMismatchPassword.email);
      registerPage.fillPassword(user.invalidUserMismatchPassword.password);
      registerPage.fillConfirmPassword(user.invalidUserMismatchPassword.confirmPassword);
      registerPage.submit();

      registerPage.getErrorMessage().should('contain', 'The password and confirmation password do not match.');
    });
  });

  it('Register Failed - Invalid email format', function () {
    cy.fixture('user').then((user) => {
      registerPage.selectGender(user.invalidUserInvalidEmail.gender);
      registerPage.fillFirstName(user.invalidUserInvalidEmail.firstName);
      registerPage.fillLastName(user.invalidUserInvalidEmail.lastName);
      registerPage.fillEmail(user.invalidUserInvalidEmail.email);
      registerPage.fillPassword(user.invalidUserInvalidEmail.password);
      registerPage.fillConfirmPassword(user.invalidUserInvalidEmail.password);
      registerPage.submit();

      registerPage.getErrorMessage().should('contain', 'Wrong email');
    });
  });

  it('Register Failed - Email already exists', function () {
    cy.fixture('user').then((user) => {
      registerPage.selectGender(user.existingUser.gender);
      registerPage.fillFirstName(user.existingUser.firstName);
      registerPage.fillLastName(user.existingUser.lastName);
      registerPage.fillEmail(user.existingUser.email);
      registerPage.fillPassword(user.existingUser.password);
      registerPage.fillConfirmPassword(user.existingUser.password);
      registerPage.submit();

      registerPage.getErrorMessage2().should('contain', 'The specified email already exists');
    });
  });
});
