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
    timeToDrink();
});

//Clear textArea when user clicks
textArea.addEventListener("click", function() {
    textArea.value = "";
});

//Clear card area
let cardContent = document.getElementById("cardcontent");

//Notifications permission request

  

  
//Popup to allow notifications
//window.confirm("In order for this app to function properly, we need you to accept notifications in your browser.");

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('popup-modal');
    modal.style.display = 'block';

    const yesButton = document.getElementById('confirm-yes');
    const noButton = document.getElementById('confirm-no');

    yesButton.onclick = function() {
        modal.style.display = 'none';
        Notification.requestPermission().then((result) => {
            console.log(result);
          });
        console.log('User accepted notifications.');
    };

    noButton.onclick = function() {
        modal.style.display = 'none';
        console.log('User declined notifications.');
        window.location.href = 'https://google.com';
    };
});






//Function to show notifications
function showNotification () {
    new Notification('Time to drink', {
        body: 'It is time to drink one glass of water!',
        icon: 'cup.png'
  });
}

//Function to schedule the amount to drink
    
function timeToDrink() {
    window.setInterval(showNotification, 5000);
}



//Function to play a sound in the notification

//const sound = new Audio("sound.mp3");
//const notification = new Notification("New message", {
//  body: "You have got a new message",
//  icon: "logo.png",
//});
//notification.addEventListener("show", () => {
//  sound.play();
//  console.log("Notification displayed");
//});