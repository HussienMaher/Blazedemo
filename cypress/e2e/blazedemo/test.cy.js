
// var mytable = document.getElementsByClassName('table');
// var rowlength = mytable.length
// function table(){
//     for(i=0;i<rowlength;i++){
//         for(cells in mytable[i]){
//             if
//         }
// }}

it('cells',()=>{
cy.visit('https://blazedemo.com/reserve.php')
cy.get('.table td').eq(5).invoke('text').then((text1)=>{
     n1 = text1.match(/(\d+)/)
    cy.log(n1[0])
})
    
})