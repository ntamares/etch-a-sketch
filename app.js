const size = 16;
const canvasContainer = document.getElementById("canvas-container");
const square = document.createElement('div');
const rowContainer = document.createElement('div');
const blackBtn = document.getElementById('black-btn');
const rainbowBtn = document.getElementById('rainbow-btn');
const eraserBtn = document.getElementById('eraser-btn');
const clearBtn = document.getElementById('black-btn');
let isMouseDown = false;
let selectedColor = 'black';

function colorSquare(e){
  if(isMouseDown){
    if(selectedColor == 'black'){
      this.style.backgroundColor = 'black';
    }
    else if(selectedColor == 'rainbow'){
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      this.style.backgroundColor = "#" + randomColor;
    }
    else if(selectedColor == 'eraser'){
      this.style.backgroundColor = 'white';
    }
    e.preventDefault();
  }
}

function setMouseFlag(e){
    if(e.type == "mousedown"){
      isMouseDown = true;
    }
    else{
      isMouseDown = false;
    }
    e.preventDefault();
}

function clearCanvas(){
  allSquares.forEach(sq => sq.style.backgroundColor = 'white');
}

function changeColorMode(mode){
  if(mode === 'black'){
    rainbowBtn.classList.remove('selected');
    eraserBtn.classList.remove('selected');
    blackBtn.classList.add('selected');
    selectedColor = 'black';
  }
  else if(mode === 'rainbow'){
    blackBtn.classList.remove('selected');
    eraserBtn.classList.remove('selected');
    rainbowBtn.classList.add('selected');
    selectedColor = 'rainbow';
  }
  else if(mode === 'eraser'){
    blackBtn.classList.remove('selected');
    rainbowBtn.classList.remove('selected');
    eraserBtn.classList.add('selected');
    selectedColor = 'eraser';
  }
}

for(let i = 0; i < size; i++){

  let newRowContainer = document.createElement('div');
  newRowContainer.id = 'rowContainer' + (i+1);
  newRowContainer.classList.add('row-container');

  for(let j = 0; j < size; j++){
    const newDiv = document.createElement('div');
    newDiv.classList.add('square');
    newRowContainer.appendChild(newDiv);
  }
  canvasContainer.appendChild(newRowContainer);
}

const allSquares = document.querySelectorAll('.square');
allSquares.forEach(sq => sq.addEventListener('mousedown', setMouseFlag));
allSquares.forEach(sq => sq.addEventListener('mouseup', setMouseFlag));
allSquares.forEach(sq => sq.addEventListener('mouseover', colorSquare));

// button
blackBtn.classList.add('selected');