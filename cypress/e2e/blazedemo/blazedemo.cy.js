/// <reference types="Cypress" />
import Confirmation from "./Confirmationpage"
import Reservepage from "./Reservepage"
import Homepage from "./homepage"
import Purchasepage from "./purchase"

it('validate booking flight',()=>{
const homepage= new Homepage()
const reserve = new Reservepage
const purchase =new Purchasepage
const confirmation = new Confirmation
    homepage.visitwebsite()
    .departurecity('Paris')
    .destinationcity('New York')
    .findflight()
    reserve.choosethis()
    purchase.typename('hussein')
    .typeaddress('elnemas')
    .typecity('assuit')
    .typestate('els3ed')
    .typezipcode('123456')
    .selectcardtype('American Express')
    .typecardnumber('54165312')
    .typemonth('5')
    .typeyear('2023')
    .typenameoncard('husseinmaher')
    .checkrememberme()
    .purhcase()
    confirmation.assertconfirmation()
    .assertstatus()
    .assertcardnumber()
    //.assertexpiration()
    .assertdate()
})