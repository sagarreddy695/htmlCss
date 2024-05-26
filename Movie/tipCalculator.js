let billamount = document.getElementById("billAmount");
let percentagetip = document.getElementById("percentageTip");
let tipamount = document.getElementById("tipAmount");
let totalamount = document.getElementById("totalAmount");
let errormessage = document.getElementById("errorMessage");


function buttonCalculate() {
let billNumberValue = billamount.value;
let percentageNumberValue = percentagetip.value;

if (billNumberValue === "") {
    errormessage.textContent = "Please enter a valid input";
    errormessage.style.color = "red";
}
else if(percentageNumberValue === "") {
    errormessage.textContent = "Please enter a valid input";
    errormessage.style.color = "red";
}
else{
    errormessage.textContent = "";
    let billNumber = parseInt(billNumberValue);
    let percentageNumber = parseInt(percentageNumberValue);
    let calculatedTip = (percentageNumber / 100) * billNumber;
    let totalAmount = billNumber + calculatedTip;
    tipamount.value = calculatedTip;
    totalamount.value = totalAmount;
}

}