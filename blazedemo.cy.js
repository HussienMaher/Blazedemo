/// <reference types="Cypress" />
import {faker} from "@faker-js/faker"
import Confirmation from "./Confirmationpage"
import Reservepage from "./Reservepage"
import Reservepage2 from "./Reservepage2"
import Reservepage3 from "./Reservepage3"
import Reservepage4 from "./Reservepage4"
import Reservepage5 from "./Reservepage5"
import Homepage from "./homepage"
import Purchasepage from "./purchase"

const num1 = faker.number.int({min:0,max:6})
const num2 = faker.number.int({min:0,max:6})
it('validate booking flight',()=>{
const homepage= new Homepage()
const reserve = new Reservepage5
const purchase =new Purchasepage
const confirmation = new Confirmation
    homepage.visitwebsite()
    .departurecity(num1)
    .destinationcity(num2)
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