class Confirmation{
    constructor(page){
        this.page = page
        this.pageTitle = page.locator("h1")
        this.confirmationMessage = page.locator(".order-completed .title")
        this.orderDetails = page.locator("//div[contains(@class,'order-completed')]//ul/li[1]")
        this.orderConfirmationContinueButton = page.locator(".order-completed input")
    }

    async getOrderConfirmation(){
        console.log(await this.pageTitle.textContent())
        console.log(await this.confirmationMessage.textContent())
    }
    async getOrderDetails(){
        return await this.orderDetails.textContent()
    }
    async backToHome(){
        await this.orderConfirmationContinueButton.click()
    }
}
module.exports = {Confirmation}