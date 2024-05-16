const tipcal = () => {
    let moninc=document.getElementById("monthlyincome").value;
    let dbt=document.getElementById("debt").value;
    let dt=dbt/moninc;
    document.getElementById("dti").value=dt;
    
}
const tipcalcy = () => {
    const MONTHS_IN_YEAR = 12;
    let monexp=document.getElementById("monthlyexpense").value;
    let mort=document.getElementById("mortgageterm").value;
    let interrate=document.getElementById("interestrate").value;
    let down=document.getElementById("downpayment").value;
    let dbt=document.getElementById("debt").value;
    let inter=document.getElementById("interestrate").value;
    let moninc=document.getElementById("monthlyincome").value;
    let dt=dbt/moninc;
    /*let Budget = (moninc - monexp)*(1-dt)*mort*interrate + down;*/
    let Budget = (moninc * dt) - dbt - mort
    
   /* let loanAmount = (moninc * (1 - dt) * mort * MONTHS_IN_YEAR) /
                 ((1 + interrate / MONTHS_IN_YEAR) ** (mort* MONTHS_IN_YEAR) - 1) +
                 down;*/
   
    document.getElementById("monthlybudget").value=Budget;
   // document.getElementById("loanamount").value=loanAmount;

}
    




// Calculate loan amount


// Output the results
/*console.log(`Your monthly budget is $${monthlyBudget.toFixed(2)}`);
alert("monthlyBudget");
console.log(`Your loan amount is $${loanAmount.toFixed(2)}`);
alert("loanAmount");*//**
 * 
 */