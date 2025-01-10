const{ test } = require("@playwright/test")
const { POmanager } = require("../pobjs/pomanager")


test("end to end test", async({page})=>{

    const URL = "https://demowebshop.tricentis.com/"
    const dataset = {
        gender:"Male",
        firstName:"Ishan",
        lastName:"Billore",
        email:"Ishan12345@gmail.com",
        password:"133555567",
        shippingMethod:"Next Day Air (0.00)",
        paymentMethod:"Cash On Delivery (COD) (7.00)"
    }

    const pomanager = new POmanager(page)
    const commons = pomanager.getGenericPage()
    const homePage = pomanager.getHomePage()
    const loginPage = pomanager.getLoginPage()
    const cartPage = pomanager.getCartPage()
    const checkoutPage = pomanager.getCheckoutPage()
    const confirmationPage = pomanager.getConfirmationPage()

    expect(await this.page.title()).toHaveText("Login")

    await commons.goToPage(URL)
    await homePage.gotoLogin()
    await loginPage.userLogin(dataset)
    //await homePage.goToRegistration()
    //await commons.waitforPageToLoad()
    //await regpage.registrationFormFill(dataset)
    //console.log(await regpage.validateRegistration())
    //await regpage.logout()
    //await loginPage.userLogin(dataset)

    await homePage.displayProducts()
    await homePage.homeATC("14.1-inch Laptop")
    await commons.waitforPageToLoad()
    await homePage.goToShoppingCart()
    
    await cartPage.cartProductValidtion("14.1-inch Laptop")
    await cartPage.gotoCheckout()

    await checkoutPage.billingAddressSelection()
    await checkoutPage.shippingAddressSelection()
    await checkoutPage.shippingMethodSelection(dataset.shippingMethod)
    await checkoutPage.paymentMethodSelection(dataset.paymentMethod)
    await checkoutPage.paymentInformation()
    await checkoutPage.confirmOrder()
    await commons.waitforPageToLoad()

    await confirmationPage.getOrderConfirmation()
    const orderDetails = await confirmationPage.getOrderDetails()
    console.log(orderDetails)
    await confirmationPage.backToHome()

    await page.pause()
    
})

//test