//Get waterAmount
const selectElement = document.getElementById("amount");
let waterAmount = selectElement.value;

selectElement.addEventListener("change", function() {
    waterAmount = selectElement.value;
    console.log(`Selected water amount: ${waterAmount}`);
});

//Get amountDrunk
const textArea = document.getElementById("waterdrunk");
let waterDrunk = textArea.value;

textArea.addEventListener("change", function() {
    waterDrunk = textArea.value;
});

//Function to know how much yet to drink
const submitButton = document.getElementById("submit");

submitButton.addEventListener('click', () => {
    let waterAmountFloat = parseFloat(waterAmount);
    let waterDrunkFloat = parseFloat(waterDrunk);
    let waterLeft = waterAmountFloat - waterDrunkFloat;
    waterLeft = waterLeft.toFixed(1);
    cardContent.textContent = `You still have to drink ${waterLeft} liters.`; 
});

//Clear textArea when user clicks
textArea.addEventListener("click", function() {
    textArea.value = "";
});

//Clear card area
let cardContent = document.getElementById("cardcontent");
