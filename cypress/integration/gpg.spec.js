describe('Home Page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000')
	})

	it('should click on GPG and open keys', () => {
		cy.contains('GPG').click()

		cy.contains('Copy')
		cy.contains('Download')
		cy.contains('-----BEGIN PGP PUBLIC KEY BLOCK-----')
		cy.contains('-----END PGP PUBLIC KEY BLOCK-----')
	})

	it('should change language, then click on GPG and open keys', () => {
		cy.contains('Language').click()
		cy.contains('Português (Brasil)').click()
		cy.contains('GPG').click()

		cy.contains('Copiar')
		cy.contains('Baixar')
	})
})