class LoginPage {
    get emailInput () {
        return cy.get ('[data-vv-as="email"]')
    }

    get passwordInput () {
        return cy.get('[type="password"]')
    }

    get submitBtn () {
        return cy.get('[type="submit"]')
    }

    get userPage () {
        return cy.get('[class="vs-c-user-name"]')
    }

    get profilePage () {
        return cy.get ('a[href="/account/settings"]')
    }

    get logoutBtn () {
        return cy.get ('[.class="vs-c-icon"]')
    }

    get errorEmailAlert () {
        return cy.get('.el-form-item__error')
    }

    get errorPasswordAlert () {
        return cy.get('.el-form-item__error')
    }
 
    login (email, password) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.submitBtn.click()
    }

    logout () {
        this.userPage.click()
        this.profilePage.click()
        this.logoutBtn.click()
    }

    clickLoginBtn () {
        this.submitBtn.click()
    }
}

export const loginPage = new LoginPage