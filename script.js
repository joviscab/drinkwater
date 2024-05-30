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
    let waterLeft = parseFloat(waterAmount) - parseFloat(waterDrunk);
    console.log(`You still have to drink ${waterLeft} liters`); 
});