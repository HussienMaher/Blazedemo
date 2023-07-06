class table{
    choosethis(){
    return cy.get('table tbody tr').then((rows)=>{
        let lowestPrice = Number.MAX_SAFE_INTEGER;
        let lowestRow;

        rows.each((index, row)=>{
            const price = parseFloat(row.querySelector('td:nth-child(7)').textContent.replace('$',''));
            if (price< lowestPrice){
                lowestPrice = price;
                lowestRow = row;
            }
        });
        cy.wrap(lowestPrice.toFixed(2)).as('lowestprice');
        cy.wrap(lowestRow).within(()=>{
            cy.get('input[type="submit"]').click();
        })
    })
}

}
export default table