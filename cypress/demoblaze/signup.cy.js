/// <reference types="Cypress" />
import homepage from "../pages/homePage"
import signup from "../pages/signupPage"

it('should signup successfully using valid credentials',()=>{
    new homepage()
    .visitwebsite()
    .clicksignup()
    .signup(Cypress.env('user'), Cypress.env('pass'))
    .signuplabelinvisible()
})