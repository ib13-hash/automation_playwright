const { expect } = require("@playwright/test")

class Cart{
    constructor(page){
        this.page = page
        this.productName = page.locator(".cart-item-row .product")
        this.productPrice = page.locator(".cart-item-row .product-unit-price")
        this.tncCheckbox = page.locator("//input[@id='termsofservice']")
        this.checkoutButton = page.getByRole("button",{name:" Checkout "})
        
    }
    async cartProductValidtion(proName){
        expect(await this.productName).toHaveText(proName)
        //expect(await this.productPrice.textContent()).toHaveText(proPrice)
    }
    async gotoCheckout(){
        await this.tncCheckbox.click()
        await this.checkoutButton.click()
    }
}
module.exports = {Cart}