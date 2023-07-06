import Purchasepage from "./purchase"

class Reservepage3{
//elements
//get chooseflight(){
   // return  cy.get('.btn-small').eq(2)
//}<td>$472.56</td>
x(){
      cy.get('.table td').eq(5).invoke('text').then((text1)=>{
        this.price1 = text1
    })
    cy.get('.table td').eq(11).invoke('text').then((text2)=>{
        this.price2 = text2
    })
    cy.get('.table td').eq(17).invoke('text').then((text3)=>{
        this.price3 = text3
    })
    cy.get('.table td').eq(23).invoke('text').then((text4)=>{
        this.price4 = text4
    })
    cy.get('.table td').eq(29).invoke('text').then((text5)=>{
        this.price5 = text5
    })
}
// get price2(){
//     return cy.get('.table td').eq(11).invoke('text').then((text2)=>{
//         let p2 = text2
//     })
// }
// get price3(){
//     return cy.get('.table td').eq(17).invoke('text').then((text3)=>{
//         let p3 = text3
//     })
// }
// get price4(){
//     return cy.get('.table td').eq(23).invoke('text').then((text4)=>{
//         let p4 = text4
//     })
// }
// get price5(){
//     return cy.get('.table td').eq(29).invoke('text').then((text5)=>{
//         let p5 = text5
//     })
// }

get choosefilght1(){
    return cy.get('.btn-small').eq(0)}

get choosefilght2(){
    return cy.get('.btn-small').eq(1)}

get choosefilght3(){
    return cy.get('.btn-small').eq(2)}    

get choosefilght4(){
    return cy.get('.btn-small').eq(3)}

get choosefilght5(){
    return cy.get('.btn-small').eq(4)}
//methods
    //choosethis(){
        //this.chooseflight.click()
       // return Purchasepage
    //}
        choosethis(){
        if((this.price1<this.price2) &&(this.price1<this.price3) && (this.price1<this.price4) && (this.price1<this.price5)){
            this.choosefilght1.click()
        }else if((this.price2<this.price1) &&(this.price2<this.price3) && (this.price2<this.price4) && (this.price2<this.price5)){
            this.choosefilght2.click()
        }else if((this.price3<this.price1) &&(this.price3<this.price2) && (this.price3<this.price4) && (this.price3<this.price5)){
            this.choosefilght3.click()
        }else if((this.price4<this.price1) &&(this.price4<this.price2) && (this.price4<this.price3) && (this.price4<this.price5)){
            this.choosefilght4.click()
        }else if((this.price5<this.price1) &&(this.price5<this.price2) && (this.price5<this.price3) && (this.price5<this.price4)){
            this.choosefilght5.click()
        }
        return Purchasepage
    }
    

}

export default Reservepage3