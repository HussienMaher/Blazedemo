import Purchasepage from "./purchase"
class Reservepage5{
//elements
//get chooseflight(){
   // return  cy.get('.btn-small').eq(2)
//}<td>$472.56</td>
get p1(){
      return cy.get('.table td').eq(5).invoke('text').then((text1)=>{
        var n1 = text1.match(/(\d+)/)
    })
}
get p2(){
    return cy.get('.table td').eq(11).invoke('text').then((text2)=>{
        var n2 = text2.match(/(\d+)/)
    })}
get p3(){   
    return cy.get('.table td').eq(17).invoke('text').then((text3)=>{
         var n3 = text3.match(/(\d+)/)
    })}
get p4(){   
    return cy.get('.table td').eq(23).invoke('text').then((text4)=>{
        var n4 = text4.match(/(\d+)/)
    })}
get p5(){ 
    return cy.get('.table td').eq(29).invoke('text').then((text5)=>{
       var n5= text5.match(/(\d+)/)
    })}

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
    x1(){
        var h1 = this.p1[0]
        return h1
    }
    x2(){
        var h2 = this.p2[0]
        return 
    }
    x3(){
        var h3 = this.p3[0]
        return h3
    }
    x4(){
        var h4 = this.p4[0]
        return h4
    }
    x5(){
        var h5 = this.p5[0]
        return h5
    }

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
        if((this.x1<this.x2) &&(this.x1<this.x3) && (this.x1<this.x4) && (this.x1<this.x5)){
            this.choosefilght1.click()
        }else if((this.x2<this.x1) &&(this.x2<this.x3) && (this.x2<this.x4) && (this.x2<this.x5)){
            this.choosefilght2.click()
        }else if((this.x3<this.x1) &&(this.x3<this.x2) && (this.x3<this.x4) && (this.x3<this.x5)){
            this.choosefilght3.click()
        }else if((this.x4<this.x1) &&(this.x4<this.x2) && (this.x4<this.x3) && (this.x4<this.x5)){
            this.choosefilght4.click()
        }else if((this.x5<this.x1) &&(this.x5<this.x2) && (this.x5<this.x3) && (this.x5<this.x4)){
            this.choosefilght5.click()
        }
        return Purchasepage
    }
    

}

export default Reservepage5