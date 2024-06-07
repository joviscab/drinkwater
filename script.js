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
    timeToDrink(waterLeft);
});

//Clear textArea when user clicks
textArea.addEventListener("click", function() {
    textArea.value = "";
});

//Clear card area
let cardContent = document.getElementById("cardcontent");

//Popup request allow notifications
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
    };

    noButton.onclick = function() {
        modal.style.display = 'none';
        window.location.href = 'https://google.com';
    };
});

//Function to show notifications
function showNotification (remaining, isLast) {
    let adjustedRemaining = remaining -1;
    updateRemainingNotifications(remaining);
    let message = isLast
        ? 'This is your last glass of water. Great job staying hydrated!'
        : `It is time to drink one glass of water! You still have to drink ${adjustedRemaining} more time(s).`;
    
    //Notification Sound
    const sound = new Audio("wateralarm.mp3");
    sound.play();

    new Notification('Time to drink', {
        body: message,
        icon: 'cup.png'
  });
}

//Function to schedule the amount to drink
let notificationsCount = 0;
let intervalId;

function timeToDrink(waterLeft) {
    let cupsAmount = waterLeft / 0.2;
    let totalNotifications = Math.ceil(cupsAmount);
    let notificationsInterval = 30 * 60 * 1000; // 30 minutes

    //Reset notificationsCount and clear previous intervals
    notificationsCount = 0;
    clearInterval(intervalId);

    //Update initial remaining notifications display
    updateRemainingNotifications(totalNotifications - notificationsCount);
    
    intervalId = window.setInterval(function() {
        let remaining = totalNotifications - notificationsCount;
        if (remaining > 0) {
            let isLast = remaining ===1;
            showNotification(remaining, isLast);
            notificationsCount++;
        } else {
            clearInterval(intervalId);
        }
    }, notificationsInterval);
}

//Function to update the remaining notifications display
function updateRemainingNotifications (remaining) {
    cardContent.textContent = `You still have to drink ${remaining} more cups of water today. I will notify you every 30 minutes for you to drink a cup until you complete the recommended amount of water for today. Please let this page opened in one tab meanwhile you use your computer.`;
}
