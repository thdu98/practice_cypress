import { When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

When(/^Go to youtube$/, () => {
    cy.visit("https://www.youtube.com/watch?v=GT6rKSoWl5E");
})