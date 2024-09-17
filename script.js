const mainContainer = document.querySelector('.main-container');


function makeGrid(boxNum){
    //Removes previous grid
    const boxList = document.querySelectorAll('.box-grid');
    boxList.forEach(div => div.remove());

    //Checks boxNum to make sure it is an appropriate value
    //If not it reassigns a value
    if(boxNum > 100){
        boxNum = 100;
    }else if(boxNum < 1) {
        boxNum = 1;
    }else if (typeof boxNum !== 'number'){
        boxNum = 16;
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
            box.style.backgroundColor = "black";    
        });
    }
}

//Allows user to set number of grid squares 
const setButton = document.querySelector('.set-number');
setButton.addEventListener('click', () => {
    makeGrid(parseInt(prompt("Please enter number of squares in row: ")));
});

makeGrid(16);
