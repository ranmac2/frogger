const timeLeftDisplay = document.getElementById('time-left');
const resultDisplay = document.getElementById('result');
const startPauseButton = document.getElementById('start-pause-button');
const squares = document.querySelectorAll('.grid div');
const width = 9;
let currentIndex = 76;


const moveFrog = (e) => {

    switch(e.key) {
        case 'ArrowLeft' :
            console.log("move left");
            currentIndex -= 1;
            break
        case 'ArrowRight' :
            console.log("move right");
            currentIndex += 1;
            break
        case 'ArrowUp' :
            console.log("move up");
            currentIndex -= width;
            break
        case 'ArrowDown' :
            console.log("move down");
            currentIndex += width;
            break
    }

    squares[currentIndex].classList.add('frog');
};

document.addEventListener("keyup", moveFrog);