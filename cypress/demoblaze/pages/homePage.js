import signup from "./signupPage"

class homepage{
//elements
    get signupbutton(){
    return cy.get('#signin2')
    }
    get signuplabel(){
        return cy.get('#signInModalLabel')
    }

    //methods
    visitwebsite(){
        cy.visit('/')
        return this
    }
    clicksignup(){
        this.signupbutton.click().wait(1000)
        return new signup
    }
    signuplabelinvisible(){
        this.signuplabel.should('not.be.visible')
        return this
    }


}

export default homepage