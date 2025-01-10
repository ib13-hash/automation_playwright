const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');  // Use Playwright's standalone API
const { POmanager } = require('../../pobjs/pomanager');  // Ensure correct import
const{expect} = require("@playwright/test")

Given('User in Home Page', async function() {
  // Launch the browser

  this.expect = expect
  this.browser = await chromium.launch({ headless: false }); // or headless: false for visible UI
  this.context = await this.browser.newContext();  // Create a new browser context
  this.page = await this.context.newPage();  // Open a new page

  // Initialize POmanager with the page object
  this.pomanager = await new POmanager(this.page,this.expect);  // Use 'this.page' instead of 'page'

  // Get the generic page object and navigate to the home page
  this.commons = await this.pomanager.getGenericPage();
  await this.commons.goToPage('https://demowebshop.tricentis.com/');
  await this.commons.waitforPageToLoad();  // Wait for the page to fully load
});
    /* this.browser = await playwright.chromium.launch({headless: true})
    this.context = await this.browser.newContext()
    this.page = await this.context.newPage()

    this.pomanager = new POmanager(this.page)

    this.commons = this.pomanager.getGenericPage()
    await this.commons.goToPage('https://demowebshop.tricentis.com/')
    await this.commons.waitforPageToLoad()
 */

When('user clicks on the login link navigates to the login page and validates', async function(){
    this.homePage = this.pomanager.getHomePage()
    this.loginPage = this.pomanager.getLoginPage()
    await this.homePage.gotoLogin()
    await this.loginPage.validateLoginPage(this.expect)
    
})

Then('enters the credentials {string} and {string} and log in', async function(username,password){
    await this.loginPage.userLogin(username,password)
})

Then('lands on home page and Adds {string} to cart', async function(product){
    this.expect(this.page).toHaveTitle("Demo Web Shop")
    await this.homePage.displayProducts()
    await this.homePage.homeATC(product)
    await this.commons.waitforPageToLoad()
})

Then('navigates to cart page and validates that {string} is added', async function(product){
    const cartPage = this.pomanager.getCartPage()
    await this.homePage.goToShoppingCart()
    await cartPage.cartProductValidtion(product)
})