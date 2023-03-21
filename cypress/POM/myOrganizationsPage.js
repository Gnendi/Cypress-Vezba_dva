import { faker } from "@faker-js/faker"

class MyOrganizations {
    get searchBtn () {
        return cy.get('.vs-c-project-search > .vs-c-btn')
    }

    get searchInput () {
        return cy.get ('input')
    }

    clickSearchBtn () {
        this.searchBtn.click()
    }
}

export const myOrganizations = new MyOrganizations