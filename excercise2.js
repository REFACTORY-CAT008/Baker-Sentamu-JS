//Using functions parameters, create a javascript program that can calculate someone's net salary
// Where NSSF is 0.11 (11%) and PAYE is 0.30 (30%)

/**
 * Parameters;- gross salary, nssf, paye 
 */

const nssf = 11/100;
const paye = 30/100;

//Define a function netSalary that takes the gross salary, nssf and pay as your earn percentages
function netSalary(grossSalary, nssf, paye) {

    //Declare a variable netPay and assigned it the result from calculating the net salary
    let netPay = grossSalary-((nssf*grossSalary)+(paye*grossSalary))

    console.log(netPay);

    //return netPay
    return netPay
}

//invoke function netSalary
netSalary(3000000,nssf,paye)