const {When, Then, And, Step} = require("@badeball/cypress-cucumber-preprocessor");

When(/^Access example app$/, () => {
    cy.visit("example-app.html");
});

When(/^Click on (.*) button$/, (btnName) => {
    for (let i = 0; i < 5; i++) {
        cy.get("button").contains(btnName).click()
        Step(this, `Number of clicking times should be: ${i + 1}`)
    }
})

Then(/^Number of clicking times should be: (.*)$/, (numberClickingTimes) => {
    const numberSelector = '//p[@data-testid="num"]';
    cy.xpath(numberSelector).should('have.text', numberClickingTimes);
})
