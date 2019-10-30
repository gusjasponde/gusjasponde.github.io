describe('Home Page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000')
	})

	it('should contains user main properties', () => {
		cy.contains('Gustavo Jasponde')
		cy.contains('Software')
		cy.contains('Rio de Janeiro')
		cy.contains('Brasil')
	})
})