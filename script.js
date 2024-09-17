const mainContainer = document.querySelector('.main-container');
function makeGrid(boxNum){
    if(boxNum > 100){
        boxNum = 100;
    }else if(boxNum < 1) {
        boxNum = 1;
    }
    let boxWidth = (1 / boxNum) * 100;
    
    for (i = 1; i <= boxNum * boxNum; i++){
        const box = document.createElement('div');
        box.classList.add('box-grid');
        box.style.width = boxWidth + '%';
        mainContainer.appendChild(box);
    }
}
makeGrid(64);