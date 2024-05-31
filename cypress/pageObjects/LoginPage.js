class LoginPage {

    navigateToLoginPage() {
      cy.visit('/qa-portal/registerlogin/registerlogin.php')
    }
  
    getUsernameInput() {
      return cy.get('input[name="username"]')
    }
  
    getPasswordInput() {
      return cy.get('input[name="password"]')
    }
  
    getLoginButton() {
      return cy.get('input[type="submit"]')
    }
    
    enterUsername(username) {
      this.getUsernameInput().type(username);
    }

    enterPassword(password) {
      this.getPasswordInput().type(password);
    }

    pressLoginButton(){
      this.getLoginButton().click();  
    }
  
    getErrorMessageForUsernameInput() {
      return cy.get('input[name="username"] + .help-block')
    }

    getErrorMessageForPasswordInput() {
      return cy.get('input[name="password"] + .help-block')
    }
    
  }
  
  export default LoginPage