
let randomColor = (255, 255, 255);

let paperLineDistance = 30;

let drawDistanceX = 0;
let drawDistanceY = 0;

let originPointX;
let originPointY;

let lastPointX = 0;
let lastPointY = 0;

let lastMouseX = 0;
let lastMouseY = 0;

let rotatione = 0;

let paintMode = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(230, 230, 230);

  // Set initial drawing coordinates to middle
  originPointX = width / 2;
  originPointY = height / 2;

  // Create paper grid pattern
  strokeWeight(0.5);
  stroke(0, 0, 0);
  for (let i = 1; i < height / paperLineDistance + 1; i++) {
    line(0, i * paperLineDistance, width, i * paperLineDistance);
  }
  strokeWeight(1);
  stroke(150, 0, 0);
  line(50, 0, 50, height);
  stroke(0, 0, 0);
}

function draw() {

}

// Drawing in the current paint mode when mouse is dragged
function mouseDragged() {
  // Chaos Pen
  if (paintMode == 0) {
    strokeWeight(random(1, 8));
    if (lastPointX != 0) {
      line(lastPointX, lastPointY, originPointX + drawDistanceX, originPointY + drawDistanceY, 2);
    }
    lastPointX = originPointX + drawDistanceX;
    lastPointY = originPointY + drawDistanceY;

    drawDistanceX = drawDistanceX + random(-20, 20);
    drawDistanceY = drawDistanceY + random(-20, 20);
    // Airbrush
  } else if (paintMode == 1) {
    strokeWeight(random(1, 20));
    point(originPointX + drawDistanceX, originPointY + drawDistanceY, 2);

    drawDistanceX = drawDistanceX + random(-20, 20);
    drawDistanceY = drawDistanceY + random(-20, 20);
    // Pen
  } else if (paintMode == 2) {
    strokeWeight(2);
    if (lastPointX != 0) {
      line(lastPointX, lastPointY, originPointX + drawDistanceX, originPointY + drawDistanceY, 2);
    }
    lastPointX = originPointX + drawDistanceX;
    lastPointY = originPointY + drawDistanceY;

    if (lastMouseX != 0) {
      drawDistanceX = drawDistanceX + (mouseX - lastMouseX) * random(-1, 1) /*+ random(-5, 5)*/;
      drawDistanceY = drawDistanceY + (mouseY - lastMouseY) * random(-1, 1)/*+ random(-5, 5)*/;
    }

    lastMouseX = mouseX;
    lastMouseY = mouseY;
  }
}

// Choose the cursor location as a new starting point to draw from when the mouse is clicked
function mousePressed() {
  drawDistanceX = 0;
  drawDistanceY = 0;
  originPointX = mouseX;
  originPointY = mouseY;
  lastPointX = 0;
  lastPointY = 0;
  lastMouseX = 0;
  lastMouseY = 0;
}

// Function reacting to the color changer
function changeColor(newColor) {
  stroke(newColor);
}

// Function reacting to the tool dropdown menu, changing the paint mode accordingly
function changeTool(newTool) {
  switch (newTool) {
    case "Pen":
      paintMode = 2;
      break;
    case "Airbrush":
      paintMode = 1;
      break;
    case "ChaosPen":
      paintMode = 0;
      break;
  }
}

// Function reacting to the download button, saving the canvas
function downloadCanvas() {
  saveCanvas("Artwork");
}