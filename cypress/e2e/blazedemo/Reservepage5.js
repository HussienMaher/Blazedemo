import Purchasepage from "./purchase"
import Homepage from "./homepage"
class Reservepage5{

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
    
        choosethis(){
            
            var x1 = parseFloat(this.p1)
            var x2 = parseFloat(this.p2)
            var x3 = parseFloat(this.p3)
            var x4 = parseFloat(this.p4)
            var x5 = parseFloat(this.p5)
        if((x1<x2) &&(x1<x3) && (x1<x4) && (x1<x5)){
            this.choosefilght1.click()
        }else if((x2<x1) &&(x2<x3) && (x2<x4) && (x2<x5)){
            this.choosefilght2.click()
        }else if((x3<x1) &&(x3<x2) && (x3<x4) && (x3<x5)){
            this.choosefilght3.click()
        }else if((x4<x1) &&(x4<x2) && (x4<x3) && (x4<x5)){
            this.choosefilght4.click()
        }else if((x5<x1) &&(x5<x2) && (x5<x3) && (x5<x4)){
            this.choosefilght5.click()
        }
        return Purchasepage
    }
    

}

export default Reservepage5