const timeLeftDisplay = document.getElementById('time-left');
const resultDisplay = document.getElementById('result');
const startPauseButton = document.getElementById('start-pause-button');
const squares = document.querySelectorAll('.grid div');
const width = 9;
let currentIndex = 76;


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