let originsX = [];
let originsY = [];
let strokeW;
let density;

standardSpeedX = 3;
standardSpeedY = 3;
let speedsX = [];
let speedsY = [];
let randomColor = (255, 255, 255);
let bgColor = (200, 200, 200);

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noSmooth();

  strokeW = 0.3;
  density = 1;

  generatePoints(30);
}

function draw() {
  background(bgColor);

  strokeWeight(strokeW);
  stroke(0, 0, 0);
  for (let i = 0; i < originsX.length; i++) {
    //point(originsX[i], originsY[i]);

    for (let j = 0; j < originsX.length; j++) {
      line(originsX[i], originsY[i], originsX[j], originsY[j]);
    }

    // Moving the points depending on their speed
    originsX[i] = originsX[i] + speedsX[i];
    originsY[i] = originsY[i] + speedsY[i];

    // CHange direction when hitting border of screen
    if (originsX[i] > width) {
      speedsX[i] = -standardSpeedX - Math.random() * 2;
    }
    if (originsX[i] < 0) {
      speedsX[i] = standardSpeedX + Math.random() * 2;
    }
    if (originsY[i] > height){
      speedsY[i] = -standardSpeedY - Math.random() * 2;
    }
    if (originsY[i] < 0){
      speedsY[i] = standardSpeedY - Math.random() * 2;
    }
  }
}

// Function that generates a given number of points to be connected with each other. Each starts at a random position with a random speed
function generatePoints(number) {
  for (let i = 0; i < number; i++) {
    originsX.push(random() * width);
    originsY.push(random() * height);
    speedsX.push(randomBetweenNumbers(3, -3));
    speedsY.push(randomBetweenNumbers(3, -3));
  }
}

function randomBetweenNumbers(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}