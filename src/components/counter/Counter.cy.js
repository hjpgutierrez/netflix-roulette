import React from 'react'
import Counter from './Counter'

describe('<Counter />', () => {
  it('renders', () => {
    cy.mount(<Counter />)
  })

  it('renders 0 when no params', () => {
    cy.mount(<Counter />)
    cy.get('span').should('have.text', '0')
  })

  it('when the increment button is pressed, the counter is incremented', () => {
    cy.mount(<Counter />)
    cy.get('[data-cy=increment]').click()
    cy.get('[data-cy=counter]').should('have.text', '1')
  })
  
  it('when the decrement button is pressed, the counter is decremented', () => {
    cy.mount(<Counter />)
    cy.get('[data-cy=decrement]').click()
    cy.get('[data-cy=counter]').should('have.text', '-1')
  })
})