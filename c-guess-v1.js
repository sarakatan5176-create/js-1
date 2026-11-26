// ג
let secretNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 1;
let guess = Number(prompt("נחשי מספר בין 1 ל-20"));
while (guess != secretNumber) {
    if (guess > secretNumber) {
        alert("גבוה מדי");
    }
    else {
        alert("נמוך מדי");
    }

    guess = Number(prompt("נסי שוב!"));
    attempts++;
}
let message;

if (attempts <= 3) {
    message = "מדהים!";
}
else if (attempts <= 6) {
    message = "יפה מאוד";
}
else {
    message = "אפשר לשפר";
}
alert(message + " ניחשת אחרי " + attempts + " ניסיונות");
console.log(message + " ניחשת אחרי " + attempts + " ניסיונות");
alert("כל הכבוד!!");
