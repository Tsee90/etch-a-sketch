const mainContainer = document.querySelector('.main-container');
const DEFAULT_NUM = 16;
let currentNum = 16;

function makeGrid(boxNum){
    //Update current number selection for clearGrid() use
    currentNum = boxNum;

    //Removes previous grid
    const boxList = document.querySelectorAll('.box-grid');
    boxList.forEach(div => div.remove());

    //Checks boxNum to make sure it is an appropriate value
    //If not it reassigns a value
    if(boxNum > 100){
        boxNum = 100;
    }else if(boxNum < 1) {
        boxNum = DEFAULT_NUM;
    }else if (isNaN(boxNum)){
        boxNum = DEFAULT_NUM;
    }

    //Get percentage of total width per box to fill main-container evenly
    let boxWidth = (1 / boxNum) * 100;
    
    //Populates main-container with .box-grid divs
    for (i = 1; i <= boxNum * boxNum; i++){
        const box = document.createElement('div');
        box.classList.add('box-grid');
        box.style.width = boxWidth + '%';
        mainContainer.appendChild(box);
        box.addEventListener('mouseover', () => {
            //Checks opacity and ups by 10% if not yet 100%
            let currentOpacity = parseFloat(window.getComputedStyle(box).opacity);
            if (currentOpacity < 1) {
                currentOpacity += 0.1;
                box.style.opacity = currentOpacity.toFixed(1);
            }
            box.style.backgroundColor = getRandomColor();    
        });
    }
}

//Allows user to set number of grid squares 
const setButton = document.querySelector('.set-number');
setButton.addEventListener('click', () => {
    makeGrid(parseInt(prompt("Please enter number of squares in row \(1-100\): ")));
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => clearGrid());

function clearGrid(){
    makeGrid(currentNum);
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

makeGrid(DEFAULT_NUM);
