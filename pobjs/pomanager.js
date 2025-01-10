const { Cart } = require("./cart");
const { Checkout } = require("./checkout");
const { Confirmation } = require("./confirmation");
const { Generic } = require("./generic");
const { HomePage } = require("./homepage");
const { Login } = require("./login");

class POmanager{
    constructor(page){

        this.page = page
        this.loginpage = new Login(page)
        this.homePage = new HomePage(page)
        this.commons = new Generic(page)
        this.cartPage = new Cart(page)
        this.checkoutPage = new Checkout(page)
        this.confirmationPage = new Confirmation(page)
    }

    getLoginPage(){
        return this.loginpage
    }

    getHomePage(){
        return this.homePage
    }
    getGenericPage(){
        return this.commons
    }
    getCartPage(){
        return this.cartPage
    }
    getCheckoutPage(){
        return this.checkoutPage
    }
    getConfirmationPage(){
        return this.confirmationPage
    }
}
module.exports = { POmanager }