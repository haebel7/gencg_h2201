let strokeW;

let randomColor = (255, 255, 255);
let bgColor = (200, 200, 200);

let drawDistanceX = 0;
let drawDistanceY = 0;

let originPointX;
let originPointY;

let rotatione = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  //noSmooth();
  background(bgColor);

  strokeW = 2;
  originPointX = width / 2;
  originPointY = height / 2;
}

function draw() {
  drawDistanceX = drawDistanceX + randomBetweenNumbers(5, -5);
  drawDistanceY = drawDistanceY + randomBetweenNumbers(5, -5);
}

function mouseDragged() {
  strokeWeight(strokeW);
  stroke(0, 0, 0);
  point(originPointX + drawDistanceX, originPointY + drawDistanceY, 2);
  /*if (drawDistance > 255) {
    drawDistance = 0;
  }*/
}

function mousePressed() {
  
}

function randomBetweenNumbers(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}