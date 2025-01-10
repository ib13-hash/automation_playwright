class Checkout {
    constructor(page){
        this.page = page
        this.billingContinueButton = page.locator("//li[@id='opc-billing']//input[@value='Continue']")
        this.shippingContinueButton = page.locator("//li[@id='opc-shipping']//input[@value='Continue']")
        this.shippingMethodOptions = page.locator(".shipping-method li")
        this.shippingMethodContinueButton = page.locator("//li[@id='opc-shipping_method']//input[@value='Continue']")
        this.paymentMethodOptions = page.locator(".payment-details")
        this.paymentMethodContinueButton = page.locator("#payment-method-buttons-container input")
        this.paymentInfoMessage = page.locator(".payment-info p")
        this.paymentInfoContinueButton = page.locator("#payment-info-buttons-container input")
        this.orderConfirmButton = page.locator("#confirm-order-buttons-container input")
    }
    
    async billingAddressSelection(){
        await this.billingContinueButton.click()
    }
    
    async shippingAddressSelection(){
        await this.shippingContinueButton.click()
    }
    
    async shippingMethodSelection(shippingMethod){
        
        await this.shippingMethodOptions.filter({hasText:shippingMethod}).locator('input').click()
        console.log(await this.shippingMethodOptions.filter({hasText:shippingMethod}).locator('label').textContent())
        /* const options = await this.shippingMethodOptions.count()
        for(let i=0; i<options; i++){
            if(await this.shippingMethodOptions.loctor("label").nth(i).textContent() === shippingMethod){
                await this.shippingMethodOptions.locator("input").nth(i).click()
                console.log(await this.shippingMethodOptions.loctor("label").nth(i).textContent()+"is the shipping method")
            }
        } */
        await this.shippingMethodContinueButton.click()
    }
    
    async paymentMethodSelection(paymentMethod){

        await this.paymentMethodOptions.filter({hasText:paymentMethod}).locator('input').click()
        console.log(await this.paymentMethodOptions.filter({hasText:paymentMethod}).locator('label').textContent())
       /*  const choices = await this.paymentMethodOptions.count()
        for(let j=0; j<choices; j++){
            if(await this.paymentMethodOptions.nth(i).textContent() === paymentMethod){
                console.log(await this.paymentMethodOptions.nth(i).textContent())
                await this.paymentMethodSelector.nth(i).click()
            }
        } */
        await this.paymentMethodContinueButton.click() 
    }
    
    async paymentInformation(){
        console.log(await this.paymentInfoMessage.textContent())
        await this.paymentInfoContinueButton.click()
    }
    
    async confirmOrder(){
        await this.orderConfirmButton.click()
    }
}
module.exports = {Checkout}