Feature: Demo



    Scenario: Add product to cart & verify
        When Access & login to Sauce demo web
        When Select: Sauce Labs Backpack; Sauce Labs Bike Light to Add to cart
        Then Number of selected items displayed on cart at top right corner should be 2