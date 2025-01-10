Feature: Ecom flow 1

    Scenario: User logs in
        Given User in Home Page
        When user clicks on the login link navigates to the login page and validates
        Then enters the credentials 'Ishan12345@gmail.com' and '133555567' and log in
        Then lands on home page and Adds '14.1-inch Laptop' to cart
        Then navigates to cart page and validates that '14.1-inch Laptop' is added