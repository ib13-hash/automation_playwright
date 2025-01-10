class Login{
    constructor(page,expect){
        this.expect = expect
        this.page = page
        this.loginPageTitle = page.locator('.login-page h1')
        this.emailField = page.getByLabel("Email:")
        this.passwordField = page.getByLabel("Password:") 
        this.rememberCheckBox = page.getByLabel("Remember me?")
        this.loginButton = page.getByRole("Button",{name:"Log in"})
    }
    async validateLoginPage(expect){
        expect(await this.loginPageTitle).toHaveText('Welcome, Please Sign In!')
        expect(await this.page).toHaveTitle('Demo Web Shop. Login')
        expect(await this.page).toHaveURL('https://demowebshop.tricentis.com/login')
    }
    async userLogin(username,password){
        await this.emailField.fill(username)
        await this.passwordField.fill(password)
        await this.loginButton.click()
    }
}
module.exports = { Login }