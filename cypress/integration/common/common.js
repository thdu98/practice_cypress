const {Given, When, Then} = require('cypress-cucumber-preprocessor/steps');



When(/^Access & login to Sauce demo web$/, () => {
    cy.visit('https://www.saucedemo.com');
    cy.wait(5000)
    cy.xpath('//input[@id="user-name"]').type('standard_user');
    cy.xpath('//input[@id="password"]').type('secret_sauce');
    cy.xpath('//input[@id="login-button"]').click();
});


When(/^Select: (.*) to Add to cart$/, (itemNameList) => {
    const itemArr = itemNameList.split("; ");
    for(let i = 0; i < itemArr.length; i++) {
        cy.xpath(`//div[text()="${itemArr[i]}"]/ancestor::div[@class="inventory_item"]//button[text()="Add to cart"]`).click();
    }
});


Then(/^Number of selected items displayed on cart at top right corner should be (.*)$/, (expectedNumber) => {
    cy.xpath('//div[@id="shopping_cart_container"]//span[@class="shopping_cart_badge"]')
    .should('have.text', expectedNumber);
})