document.addEventListener("DOMContentLoaded", function () {

const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const milisecondsEl = document.querySelector("#miliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const restartBtn = document.querySelector("#restartBtn");

const formatTime = time => time < 10 ? `0${time}` : time;
const formatMiliseconds = time => time < 100 ? `${time}`.padstart(3, "0") : time;

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer)
pauseBtn.addEventListener("click", pauseTimer)
resumeBtn.addEventListener("click", resumeTimer)
restartBtn.addEventListener("click", restartTimer)

// o cronometro para quando a pagina e minimizada por default - Definir se mesmo minimizada o tempo continua

function startTimer() {

    interval = setInterval(() => {

        if (!isPaused) {
            miliseconds += 10;

            if (miliseconds === 1000) {
                seconds++;
                miliseconds = 0;
            }
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            // Lógica feature horas
            //
            // if (minutes === 60) {              
            //     hours++;
            //     minutes = 0;
            //     seconds = 0;
            // }

            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            milisecondsEl.textContent = (miliseconds);
        }

    }, 10);

    startBtn.style.display = "none"
    pauseBtn.style.display = "inline-block"
}

function pauseTimer() {
    isPaused = true
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function resumeTimer() {
    isPaused = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "nome";
}

function restartTimer() {
    isPaused = false;
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    milisecondsEl.textContent = "000";

    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
}
}
