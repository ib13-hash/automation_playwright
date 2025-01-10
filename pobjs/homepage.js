class HomePage{
    constructor(page){
        this.page = page
        this.registrationLink = page.getByRole("link", {name:"Register"})
        this.loginLink = page.getByRole("link",{name:"Log in"})
        this.cartLink = page.locator(".header-links .ico-cart")
        this.productcard = page.locator(".item-box")
        this.productName = this.productcard.locator("h2 a")
        this.productPrice = this.productcard.locator(".prices span")
    }
    async goToRegistration(){
        await this.registrationLink.click()
    }
    async gotoLogin(){
        await this.loginLink.click()
    }
    async goToShoppingCart(){
        await this.cartLink.click()
    }
    async displayProducts(){
        let pcount = await this.productcard.count()
        for(let i=0; i<pcount; i++){
            console.log(await this.productName.nth(i).textContent()+" "+await this.productPrice.nth(i).textContent())
        }
    }
    async homeATC(product){
        await this.productcard.filter({hasText:product}).locator("//input[@value='Add to cart']").click()
    }
    async categorySearch(categoryName){

    }
    async barSearch(product){

    }
}
module.exports = {HomePage}