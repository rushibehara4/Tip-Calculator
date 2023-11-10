let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");

let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");

let errorMsgElement = document.getElementById("errorMessage");
let errorMsg = "Please Enter a Valid Input";

function calculateButton() {
    let billAmountValue = billAmountElement.value;
    let percentageTipValue = percentageTipElement.value;

    if (billAmountValue === "") {
        errorMsgElement.textContent = errorMsg;
    } else if (percentageTipValue === "") {
        errorMsgElement.textContent = errorMsg;
    } else {
        errorMsgElement.textContent = "";
        let billAmount = parseInt(billAmountValue);
        let percentageTip = parseInt(percentageTipValue);
        let tipAmount = (percentageTip / 100) * billAmount;
        let totalBill = billAmount + tipAmount;

        tipAmountElement.value = tipAmount;
        totalAmountElement.value = totalBill;
    }
}