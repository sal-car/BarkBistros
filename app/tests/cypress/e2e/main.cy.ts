import { data } from 'server/db/fixtures';

describe('Rendering of UI', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('renders the name and slogan', () => {
    cy.contains('BarkBistros');
    cy.contains('Restaurants for Foodies and Furry Friends');
  });

  it('renders the main container', () => {
    cy.get('[data-cy="main"]').should('exist');
    cy.get('[data-cy="main"]').should('be.visible');
  });

  it('renders the list of restaurants', () => {
    cy.get('[data-cy="result-list"]').should('exist');
    cy.get('[data-cy="result-list"]').should('be.visible');
    cy.get('[data-cy="result-item"]').should('have.length', data.length);
  });

  it('renders the search form', () => {
    cy.get('[data-cy="search-form"]').should('exist');
    cy.get('[data-cy="search-form"]').should('be.visible');
  });
});

describe('Searching for restaurants', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000').wait(2000);
  });

  it('shows restaurants with matching name', () => {
    cy.get('[data-cy="search-input"]').type('Paws');
    cy.get('[data-cy="result-item"]').should('contain', 'Paws');
  });

  it('shows restaurants with matching address', () => {
    cy.get('[data-cy="search-input"]').type('Tail Lane');
    cy.get('[data-cy="result-item"]').should('contain', 'Tail Lane');
  });

  it('shows restaurants with matching tag', () => {
    cy.get('[data-cy="search-input"]').type('Café');
    cy.get('[data-cy="result-item"]').should('contain', 'Canine Corner');
  });

  it('does not show restaurants with another name', () => {
    cy.get('[data-cy="search-input"]').type('Paws');
    cy.get('[data-cy="result-item"]').should('not.contain', 'Tail Lane');
  });

  it('does not show restaurants with another address', () => {
    cy.get('[data-cy="search-input"]').type('Lick Street');
    cy.get('[data-cy="result-item"]').should('not.contain', 'Woof Street');
  });

  it('does not show restaurants with another tag', () => {
    cy.get('[data-cy="search-input"]').type('Garden');
    cy.get('[data-cy="result-item"]').should('not.contain', 'Tail Wag Tavern');
  });
});
