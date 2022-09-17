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
  background(bgColor);

  strokeW = 2;
  // Set initial drawing coordinates to middle
  originPointX = width / 2;
  originPointY = height / 2;
}

function draw() {
  // Randomly add/remove amount of the drawing coordinates, making it move unpredictably
  drawDistanceX = drawDistanceX + randomBetweenNumbers(5, -5);
  drawDistanceY = drawDistanceY + randomBetweenNumbers(5, -5);
}

// Create points at the random coordinates when the mouse is dragged
function mouseDragged() {
  strokeWeight(strokeW);
  stroke(0, 0, 0);
  point(originPointX + drawDistanceX, originPointY + drawDistanceY, 2);
}

function mousePressed() {
  
}

function randomBetweenNumbers(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}