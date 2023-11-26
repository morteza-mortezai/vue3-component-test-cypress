import Stepper from '../../src/components/stepper.vue'
describe('<Stepper />', () => {
  it('mounts', () => {
    cy.mount(Stepper, { props: { countValue: 100 } })
    cy.get('[data-cy=counter]').should('have.text', 100)
  })

  it('increment', () => {
    cy.mount(Stepper)
    cy.get('[data-cy=increment]').click()
    cy.get('[data-cy=counter]').should('have.text', 1)
  })

  it('decrement', () => {
    cy.mount(Stepper)
    cy.get('[data-cy=decrement]').click()
    cy.get('[data-cy=counter]').should('have.text', -1)
  })

  it('fire click event', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    cy.mount(Stepper, { props: { onChange: onChangeSpy } })
    cy.get('[data-cy=increment]').click()
    cy.get('@onChangeSpy').should('have.been.calledWith', 1)
  })
})