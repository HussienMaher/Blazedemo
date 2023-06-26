import homepage from "./homePage"

class signup{
    //elements
    get usernameFiled(){
        return cy.get('#sign-username')
    }
    get passwordFiled(){
        return cy.get('#sign-password')
    }
    get submitButton(){
        return cy.get('[onclick="register()"]')
    }
    
    //methods
    signup(username,password){
        this.usernameFiled.type(username)
        this.passwordFiled.type(password)
        this.submitButton.click().wait(1000)
        return new homepage
    }
    

}
export default signup