
// ג
let playAgain = true;

while (playAgain) {
    let secretNumber = Math.floor(Math.random() * 20) + 1;
    let attempts = 0;
    let guess;
    let cancelled = false;

    while (guess !== secretNumber) {
        let input = prompt("נחשי מספר בין 1 ל-20");

        if (input === null) {
            cancelled = true;
            break;
        }

        guess = Number(input);
        attempts++;

        if (guess > secretNumber) {
            alert("גבוה מדי");
        }
        else if (guess < secretNumber) {
            alert("נמוך מדי");
        }
    }

    if (cancelled) {
        break;
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

    playAgain = confirm("לשחק שוב?");
}

