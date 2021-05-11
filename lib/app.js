const deadLine = new Date("2021-08-1 00:00").getTime();

var daysContent = document.querySelector(".days .content");
var hoursContent = document.querySelector(".hours .content");
var minutesContent = document.querySelector(".minutes .content");
var secondesContent = document.querySelector(".secondes .content");

function countDown() {
    
    const secondUnit = 1000,
        minuteUnit = 60 * secondUnit,
        hourUnit = 60 * minuteUnit,
        dayUnit = 24 * hourUnit;
    
    let now = new Date().getTime();
    let millisecondesLeft = deadLine - now;
    
    let daysLeft = Math.trunc(millisecondesLeft / dayUnit);
    let hoursLeft = Math.trunc((millisecondesLeft % dayUnit) / hourUnit);
    let minutesLeft = Math.floor((millisecondesLeft % hourUnit) / minuteUnit);
    let secondesLeft = Math.floor((millisecondesLeft % minuteUnit) / secondUnit);

    daysContent.innerHTML = daysLeft;
    hoursContent.innerHTML = hoursLeft;
    minutesContent.innerHTML = minutesLeft;
    secondesContent.innerHTML = secondesLeft;

}

setInterval(countDown, 1000);
