import Purchasepage from "./purchase"

class Reservepage{
elements
get chooseflight(){
    return  cy.get('.btn-small').eq(2)
}

//methods
    choosethis(){
        this.chooseflight.click()
        return Purchasepage
    }
}
export default Reservepage