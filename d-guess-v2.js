
// ד

let secret = Math.floor(Math.random() * 20) + 1;
let html = "";

for (let i = 1; i <= 20; i++) {
    let action;

    if (i < secret) {
        action = `alert('${i} קטן מהמספר הסודי. נסי מספר גדול יותר')`;
    }
    else if (i > secret) {
        action = `alert('${i} גדול מהמספר הסודי. נסי מספר קטן יותר')`;
    }
    else {
        action = `document.body.style.color = 'green'; document.body.innerHTML = '<h1>כל הכבוד! ניחשת נכון, המספר הסודי הוא ${i}</h1>'`;
    }

    html += `<button onclick="${action}">${i}</button> `;
}

document.body.innerHTML = html;

