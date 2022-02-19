const elMinute = findElement('.minute');
const elSecund = findElement('.secund');

let minut = Number(prompt("Minutni kirg'izing"));
let sekund = 00;

function renderTimer(minute, secund) {
    elMinute.textContent = minute.toString().padStart(2, "0")
    elSecund.textContent = secund.toString().padStart(2, "0")
}

let timer = timerFunc()


