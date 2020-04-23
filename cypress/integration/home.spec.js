describe('Home Page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000')
	})

	it('should contain user main properties on land (english)', () => {
		cy.contains('Gustavo Jasponde')
		cy.contains('Software')
		cy.contains('Rio de Janeiro')
	})
	
	it('should change to Portuguese and render correctly', () => {
		cy.contains('Language').click()
		cy.contains('Português (Brasil)').click()

		cy.contains('Gustavo Jasponde')
		cy.contains('Engenheiro de Software no Rio de Janeiro, Brasil')
		cy.contains('Brasil')
		cy.contains('Projetos')
		cy.contains('Contato')
		cy.contains('Redes')

		cy.contains('Idioma').click()
		cy.contains('English (United States)').click()

		cy.contains('Gustavo Jasponde')
		cy.contains('Software Engineer at Rio de Janeiro, Brazil')
		cy.contains('Brazil')
		cy.contains('Projects')
		cy.contains('Contact')
		cy.contains('Media')
	})

	it('should change to English and render correctly', () => {
		cy.contains('Language').click()
		cy.contains('Português (Brasil)').click()
		
		cy.contains('Idioma').click()
		cy.contains('English (United States)').click()

		cy.contains('Gustavo Jasponde')
		cy.contains('Software Engineer at Rio de Janeiro, Brazil')
		cy.contains('Brazil')
		cy.contains('Projects')
		cy.contains('Contact')
		cy.contains('Media')
	})
})