class Register {
    constructor(page){
        this.page = page
        this.genderMale = page.locator("#gender-male")
        this.genderFemale = page.getByLabel("Female")
        this.firstNameField = page.getByLabel("First name:")
        this.lastNameField = page.getByLabel("Last name:")
        this.emailField = page.getByLabel("Email:")
        this.passwordField = page.locator("#Password")
        this.confirmPasswordField = page.locator("#ConfirmPassword")
        this.registerButton = page.getByRole("button",{name:"Register"})
        this.successMessage = page.locator("div.result")
        this.logoutButton = page.getByRole("link",{name:"Log out"})
    }
    async registrationFormFill(dataset){
        if(dataset.gender==="Male"){
            await this.genderMale.click()
        }
        else{
            await this.genderFemale.click()
        }
        await this.firstNameField.fill(dataset.firstName)
        await this.lastNameField.fill(dataset.lastName)
        await this.emailField.fill(dataset.email)
        await this.passwordField.fill(dataset.password)
        await this.confirmPasswordField.fill(dataset.password)
        await this.registerButton.click()
    }
    async validateRegistration(){
        let text = await this.successMessage.textContent()
        return text
    }
    async logout(){
        await this.page.logoutButton.click()
    }
}
module.exports ={Register}