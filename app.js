const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const timer = document.querySelector(".timer")

let seconds = 0;
let minutes = 0;
let hours = 0;


const startTimer = () => {
    seconds++
    if (seconds > 59) {
        minutes++;
        seconds = 0;
        if (minutes > 59) {
            hours++;
            minutes = 0;
        }
    }

    if(hours > 23 && minutes > 59 && seconds > 59){
        hours = 0;
        minutes = 0;
        seconds = 0;
    }

    let newSeconds = (seconds < 10) ? `0${seconds}` : `${seconds}`;
    let newMinutes = (minutes < 10) ? `0${minutes}` : `${minutes}`;
    let newHours = (hours < 10) ? `0${hours}` : `${hours}`;

    timer.textContent = `${newHours}: ${newMinutes}: ${newSeconds}`;
}
let info = null
startBtn.addEventListener("click", () => {
    info = setInterval(startTimer, 1000);
})

stopBtn.addEventListener("click",()=>{
    clearInterval(info);
});

const reset = document.querySelector("#reset");

reset.addEventListener("click",()=>{
    hours = 0;
    minutes = 0;
    seconds = 0;

    let newSeconds = (seconds < 10) ? `0${seconds}` : `${seconds}`;
    let newMinutes = (minutes < 10) ? `0${minutes}` : `${minutes}`;
    let newHours = (hours < 10) ? `0${hours}` : `${hours}`;
    timer.textContent = `${newHours}: ${newMinutes}: ${newSeconds}`;
    clearInterval(info);
})