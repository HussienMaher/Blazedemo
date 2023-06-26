import Confirmation from "./Confirmationpage"

class Purchasepage{
//elements
    get name(){
    return cy.get('#inputName')
    }
    get address(){
        return cy.get('#address')
    }
    get city(){
        return cy.get('#city')
    }
    get state(){
        return cy.get('#state')
    }
    get zipcode(){
        return cy.get('#zipCode')
    }
    get cardtype(){
        return cy.get('#cardType')
    }
    get cardnumber(){
        return cy.get('#creditCardNumber')
    }
    get month(){
        return cy.get('#creditCardMonth')
    }
    get year(){
        return cy.get('#creditCardYear')
    }
    get nameoncard(){
        return cy.get('#nameOnCard')
    }
    get rememberme(){
        return cy.get('#rememberMe')
    }
    get purhcaseflight(){
        return cy.get('[value="Purchase Flight"]')
    }

//methods
    typename(Name){
        this.name.type(Name)
        return this
    }
    typeaddress(Address){
        this.address.type(Address)
        return this
    }
    typecity(City){
        this.city.type(City)
        return this
    }
    typestate(State){
        this.state.type(State)
        return this
    }
    typezipcode(Zipcode){
        this.zipcode.type(Zipcode)
        return this
    }
    selectcardtype(Cardtype){
        this.cardtype.select(Cardtype)
        return this
    }
    typecardnumber(Number){
        this.cardnumber.type(Number)
        return this
    }
    typemonth(Month){
        this.month.type(Month)
        return this
    }
    typeyear(Year){
        this.year.type(Year)
        return this
    }
    typenameoncard(Cardname){
        this.nameoncard.type(Cardname)
        return this
    }
    checkrememberme(){
        this.rememberme.check()
        return this
    }
    purhcase(){
        this.purhcaseflight.click()
        
    }
}
export default Purchasepage