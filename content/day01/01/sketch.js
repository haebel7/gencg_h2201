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
  createCanvas(1600, 1600);
  angleMode(DEGREES);
  noSmooth();

  strokeW = 0.3;
  density = 1;

  generatePoints(80);
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

    originsX[i] = originsX[i] + speedsX[i];
    originsY[i] = originsY[i] + speedsY[i];

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