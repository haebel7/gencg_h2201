
let randomColor = (255, 255, 255);

let paperLineDistance = 30;

let drawDistanceX = 0;
let drawDistanceY = 0;

let originPointX;
let originPointY;

let lastPointX = 0;
let lastPointY = 0;

let rotatione = 0;

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

function mouseDragged() {
  strokeWeight(2);
  // Draw lines between the randomly changing drawing coordinates when the mouse is dragged
  if (lastPointX != 0) {
    line(lastPointX, lastPointY, originPointX + drawDistanceX, originPointY + drawDistanceY, 2);
  }
  lastPointX = originPointX + drawDistanceX;
  lastPointY = originPointY + drawDistanceY;

  // Randomly add/remove amount of the drawing coordinates, making it move unpredictably
  drawDistanceX = drawDistanceX + randomBetweenNumbers(10, -10);
  drawDistanceY = drawDistanceY + randomBetweenNumbers(10, -10);
}

// Choose a random new starting point to draw from when the mouse is clicked
function mousePressed() {
  drawDistanceX = 0;
  drawDistanceY = 0;
  originPointX = randomBetweenNumbers(width, 0);
  originPointY = randomBetweenNumbers(height, 0);
  lastPointX = 0;
  lastPointY = 0;
}

// Function reacting to the color changer
function changeColor(newColor){
  stroke(newColor);
}

function randomBetweenNumbers(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}