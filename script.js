//Get waterAmount
const selectElement = document.getElementById("amount");
let waterAmount = selectElement.value;

selectElement.addEventListener("change", function() {
    waterAmount = selectElement.value;
    console.log(`Selected water amount: ${waterAmount}`);
});

//Get amount drunk
const textArea = document.getElementById("waterdrunk");
let waterDrunk = textArea.value;

textArea.addEventListener("change", function() {
    waterDrunk = textArea.value;
});



function getWaterPlan(waterAmount, waterDrunk) {
   let waterLeft;
   
    if (waterAmount === 3.7){
        let waterLeft = parseFloat(waterAmount) - parseFloat(waterDrunk);
        console.log(`You still have to drink ${waterLeft} liters`);
    } else {
        let waterLeft = 2.7 - parseFloat(waterDrunk);
        console.log(`You still have to drink ${waterLeft} liters`);
    }

    return waterLeft;
}

//Function to know how much yet to drink
const submitButton = document.getElementById("submit");

submitButton.addEventListener('click', () => {
    getWaterPlan();
    console.log(`You still have to drink ${waterLeft} liters`); 
});