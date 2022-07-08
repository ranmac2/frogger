const timeLeftDisplay = document.getElementById('time-left');
const resultDisplay = document.getElementById('result');
const startPauseButton = document.getElementById('start-pause-button');
const squares = document.querySelectorAll('.grid div');
const width = 9;
let currentIndex = 76;
const logsLeft = document.querySelectorAll('.log-left');
const logsRight = document.querySelectorAll('.log-right');



const moveFrog = (e) => {

    squares[currentIndex].classList.remove('frog');

    switch(e.key) {
        case 'ArrowLeft' :
            console.log("move left");
            if (currentIndex % width !== 0) currentIndex -= 1;
            break
        case 'ArrowRight' :
            console.log("move right");
            if (currentIndex % width < width - 1) currentIndex += 1;
            break
        case 'ArrowUp' :
            console.log("move up");
            if (currentIndex - width >= 0) currentIndex -= width;
            break
        case 'ArrowDown' :
            console.log("move down");
            if (currentIndex + width < width * width) currentIndex += width;
            break
    };

    squares[currentIndex].classList.add('frog');
};

document.addEventListener("keyup", moveFrog);

const autoMoveLogsLeft = () => {
    logsLeft.forEach(logLeft => moveLogLeft(logLeft));
}

const moveLogLeft = (logLeft) => {
    switch(true) {
        case logLeft.classList.contains('l1') :
            logLeft.classList.remove('l1')
            logLeft.classList.add('l2')
            break
        case logLeft.classList.contains('l2') :
            logLeft.classList.remove('l2')
            logLeft.classList.add('l3')
            break
         case logLeft.classList.contains('l3') :
            logLeft.classList.remove('l3')
            logLeft.classList.add('l4')
            break
        case logLeft.classList.contains('l4') :
            logLeft.classList.remove('l4')
            logLeft.classList.add('l5')
            break
        case logLeft.classList.contains('l5') :
            logLeft.classList.remove('l5')
            logLeft.classList.add('l1')
            break
    }
}

setInterval(autoMoveLogsLeft, 1000);

const autoMoveLogsRight = () => {
    logsRight.forEach(logRight => moveLogRight(logRight));
}

const moveLogRight = (logRight) => {
    switch(true) {
        case logRight.classList.contains('l5') :
            logRight.classList.remove('l5')
            logRight.classList.add('l4')
            break
        case logRight.classList.contains('l4') :
            logRight.classList.remove('l4')
            logRight.classList.add('l3')
            break
         case logRight.classList.contains('l3') :
            logRight.classList.remove('l3')
            logRight.classList.add('l2')
            break
        case logRight.classList.contains('l2') :
            logRight.classList.remove('l2')
            logRight.classList.add('l1')
            break
        case logRight.classList.contains('l1') :
            logRight.classList.remove('l1')
            logRight.classList.add('l5')
            break
    }
}

setInterval(autoMoveLogsRight, 1000);