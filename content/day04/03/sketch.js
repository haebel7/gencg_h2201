
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
  //noSmooth();
  background(230, 230, 230);

  originPointX = width / 2;
  originPointY = height / 2;

  // Paper Grid
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

function changeColor(newColor) {
  stroke(newColor);
}

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

function downloadCanvas() {
  saveCanvas("Artwork");
}