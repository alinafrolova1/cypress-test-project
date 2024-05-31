import LoginPage from "../pageObjects/LoginPage";

describe("Login tests", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.navigateToLoginPage();
  });

  it("should verify that all elements are present on the login page", () => {
    loginPage.getUsernameInput().should("be.visible");
    loginPage.getPasswordInput().should("be.visible");
    loginPage.getLoginButton().should("be.visible");
  });

  it("should show the error when log in with invalid credentials", () => {
    loginPage.enterUsername(Cypress.env("username"));
    loginPage.enterPassword(Cypress.env("password"));
    loginPage.pressLoginButton();
    loginPage
      .getErrorMessageForUsernameInput()
      .should("contain", "No account found with that username.");
  });

  it("should show the errors when not to provide credentials", () => {
    cy.fixture("emptyCredentials.json").then((data) => {
      loginPage.enterUsername(data.emptyUsername);
      loginPage.enterPassword(data.emptyPassword);
      loginPage.pressLoginButton();
      loginPage
        .getErrorMessageForUsernameInput()
        .should("contain", "Please enter username.");
      loginPage
        .getErrorMessageForPasswordInput()
        .should("contain", "Please enter your password.");
    });
  });

  it("should redirect to the home page after successful log in", () => {
    cy.fixture("correctCredentials.json").then((data) => {
      loginPage.enterUsername(data.correctUsername);
      loginPage.enterPassword(data.correctPassword);
      loginPage.pressLoginButton();
      cy.url().should('include', '/home'); //this assertion should fail
    });
  });
});
