import Reservepage from "./Reservepage"

class Homepage{
//elements 
get departure(){
    return cy.get('[name="fromPort"]')
}
get destination(){
    return  cy.get('[name="toPort"]')
}
get find(){
    return cy.get('[value="Find Flights"]') 
}


//methods
    visitwebsite(){
         cy.visit('https://blazedemo.com')
         return this
        
    }
    departurecity(fromcity){
         this.departure.select(fromcity)
         return this
    }
    destinationcity(tocity){
        this.destination.select(tocity)
        return this
    }
    findflight(){
        this.find.click()
        return Reservepage
    }

}

export default Homepage