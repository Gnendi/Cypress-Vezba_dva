import { loginPage } from "../POM/LoginPage";
import { faker } from "@faker-js/faker";

let validEmail = 'digiigor@gmail.com'
let validPassword = 'Gnendinger1po'
describe ('login case', () => {
    beforeEach (() => {
      cy.visit('/login') 
    }) 

it ('negative case / invalid email', () => {
  loginPage.login ('ascjkosca@scs', 'Gnendinger1po')
  loginPage.errorEmailAlert.should ('exist')
  .and ('be.visible')
  .and ('have.css', 'color', 'rgb(187, 57, 22)')
  .and ('have.text', 'The email field must be a valid email')
  .and ('have.class', 'el-form-item__error')

})

it ('negative case / not existing email', () => {
  loginPage.login (faker.internet.exampleEmail(), 'Gnendinger1po')
  loginPage.errorPasswordAlert.should ('exist')
  .and ('be.visible')
  .and ('have.css', 'color', 'rgb(187, 57, 22)')
  .and ('have.text', 'Oops! Your email/password combination is incorrect')
  .and ('have.class', 'el-form-item__error')

})

it ('negative case / invalid password', () => {
  loginPage.login ('digiigor@gmail.com', 'perovmporme')
  loginPage.errorPasswordAlert.should ('exist')
  .and ('be.visible')
  .and ('have.css', 'color', 'rgb(187, 57, 22)')
  .and ('have.text', 'Oops! Your email/password combination is incorrect')
  .and ('have.class', 'el-form-item__error')

})

it ('negative case / empty inputs', () => {
  loginPage.clickLoginBtn()
  loginPage.errorEmailAlert.should ('exist')
  .and ('be.visible')
  .and ('have.css', 'color', 'rgb(187, 57, 22)')
  .and ('have.text', 'The email field must be a valid emailThe password field is required')
  .and ('have.class', 'el-form-item__error')
  loginPage.errorPasswordAlert.should ('exist')
  .and ('be.visible')
  .and ('have.css', 'color', 'rgb(187, 57, 22)')
  .and ('have.text', 'The email field must be a valid emailThe password field is required')
  .and ('have.class', 'el-form-item-error--top')
})

it ('positive case / input fields', () => {
  cy.get ('h1').should ('exist')
  loginPage.emailInput.should ('exist')
  .and ('be.visible')
  .and ('have.class', 'el-input__inner')
  .and ('have.css', 'color', 'rgb(62, 139, 117)')
  .and ('have.css', 'border-bottom', '0.8px solid rgb(78, 174, 147)')
  loginPage.passwordInput.should ('exist')
  .and ('be.visible')
  .and ('have.class', 'el-input__inner')
  .and ('have.css', 'color', 'rgb(62, 139, 117)')
  .and ('have.css', 'border-bottom', '0.8px solid rgb(78, 174, 147)')
  
  }) 

it ('positive case login / valid credentials', () => {
    cy.get ('h1').should ('exist')
    loginPage.emailInput.should ('exist')
    .and ('be.visible')
    .and ('have.class', 'el-input__inner')
    loginPage.passwordInput.should ('exist')
    .and ('be.visible')
    .and ('have.class', 'el-input__inner')
    loginPage.login (validEmail, validPassword)
    
    }) 
})