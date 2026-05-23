describe('Login - Swag Labs', () => {
    it('CT-001: login com credenciais válidas', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get ('[data-test="username"]') .type('standard_user')
        cy.get ('[data-test="password"]') .type('secret_sauce')
        cy.get ('[data-test="login-button"]') .click()
        cy.url().should('include', '/inventory')
    });

    it('CT-002: login com senha incorreta', () => {
          cy.visit('https://www.saucedemo.com')
          cy.get ('[data-test="username"]') .type('standard_user')
          cy.get ('[data-test="password"]') .type('senha_errada')
          cy.get ('[data-test="login-button"]') .click()
          cy.get ('[data-test="error"]') .should('be.visible')
    })

    it ('CT-003: login com campos vazios', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('be.visible')
        .and('contain', 'Username is required')
    })

    it('CT-004: validar imagens repetidas nos produtos', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('problem_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        const images = []
        cy.get('.inventory_item_img img').each(($img) => {
            const src = $img.attr('src')
            images.push(src)
        }).then(() => {        const imagensUnicas = new Set(images)
            expect(imagensUnicas.size).to.be.greaterThan(1)
        })
    })

    it ('CT-005: botão Remove não remove produto para error_user',()=> {
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('error_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('contain','1')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('not.exist')
      })

    it('teste 1 swag labs', function() {});
})
