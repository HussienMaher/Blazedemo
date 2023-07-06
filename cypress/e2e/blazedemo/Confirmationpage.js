class Confirmation{
//elements
get Confirmation(){
    return cy.get('h1')
}
get id(){
    return cy.get('.table tr').eq(1)
}
get status(){
    return cy.get('.table tr').eq(2)
}
get amount(){
    return cy.get('.table tr').eq(3)
}
get cardnumber(){
    return cy.get('.table tr').eq(4)
}
get expiration(){
    return cy.get('.table tr').eq(5)
}
get authcode(){
    return cy.get('.table tr').eq(6)
}
get date(){
    return cy.get('.table tr').eq(7)
}


//methods
assertconfirmation(){
    this.Confirmation.should('contain','Thank you for your purchase today!')
    return this
}
assertstatus(){
    this.status.should('contain','PendingCapture')
    return this
}
assertamount(){
    this.amount.should('eql','200')
    return this
}
assertcardnumber(){
     this.cardnumber.should('contain','1111')
    return this
}
// assertexpiration(){
//     this.expiration.should('be.greaterThan','2017')
//     return this
// }
assertdate(){
    // let date1 = new Date('2020 01 01')
    // cy.clock(date1)
    this.date.should('contain','2023')
    return this
}
}
export default Confirmation