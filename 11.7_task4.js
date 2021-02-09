
let startTimer = 8;
let endTimer = 20;

const intervalId = setInterval(function (a, b) {       
        console.log(startTimer);
        startTimer++;
        if (startTimer === endTimer) {
            clearInterval(intervalId);
        };
    }, 1000, startTimer, endTimer+1); 

