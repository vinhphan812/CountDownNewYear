const newYears = "1 1 2021";
const newYearsDate = new Date(newYears);     
var seconds = document.getElementById('seconds');
var minute = document.getElementById('minute');
var hours = document.getElementById('hours');
var day = document.getElementById('day');
var month = document.getElementById('month');

function countDownTimer(){
     const currentDate = new Date();
     const totalSeconds = (newYearsDate - currentDate) / 1000;

     seconds.innerText = Math.floor(totalSeconds) % 60 < 10 ? `0${Math.floor(totalSeconds) % 60}` : Math.floor(totalSeconds) % 60;
     minute.innerText = Math.floor(totalSeconds / 60) % 60 < 10 ? `0${Math.floor(totalSeconds / 60) % 60}` : Math.floor(totalSeconds / 60) % 60;
     hours.innerText = Math.floor(totalSeconds / 3600) % 24 < 10 ? `0${Math.floor(totalSeconds / 3600) % 24}` : Math.floor(totalSeconds / 3600) % 24;
     day.innerText = Math.floor(totalSeconds / 3600 / 24);
}

countDownTimer();

setInterval(countDownTimer, 1000);