import { loginPage } from "../POM/LoginPage";
import { faker } from "@faker-js/faker";
import { myOrganizations } from "../POM/myOrganizationsPage";
let validEmail = 'digiigor@gmail.com'
let validPassword = 'Gnendinger1po'

describe ('singUp case', () => {
    beforeEach (() => {
        cy.visit('/')
        loginPage.login (validEmail, validPassword)
        cy.url().should('include','my-organizations')
        cy.get('.vs-u-text--uppercase').should('have.text', 'OrganizationsMy Organizations')
      })

      it ('positive case / search bar', () => {
        myOrganizations.clickSearchBtn()
        myOrganizations.searchBtn.should('be.visible')
        myOrganizations.searchBtn.should('exist')
        myOrganizations.searchBtn.should('have.css', 'color', 'rgb(255, 255, 255)')
        myOrganizations.searchInput.should('exist')
        myOrganizations.searchInput.should('be.visible')
        myOrganizations.searchInput.should('have.css', 'color', 'rgb(255, 255, 255)')
        myOrganizations.searchInput.type(faker.lorem.words())
      })
})