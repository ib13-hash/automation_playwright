class Generic{
    constructor(page){
        this.page = page
    }
    async goToPage(URL){
        await this.page.goto(URL)
    }
    async waitforPageToLoad(){
        await this.page.waitForLoadState("networkidle")
    }
}
module.exports = {Generic}