let strokeW;
let density;

let tileSize;
let numberOfTilesX;
let numberOfTilesY;

let bgColor = (0, 0, 0);
let colorModifier = 0;
let colorIncrement = 3;

let videoModifier = 0;
let videoIncrement = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(3);
  noLoop();
  //noSmooth();

  colorMode(HSB, 100);

  strokeW = 0;
  density = 1;
  tileSize = 75;

  numberOfTilesX = width / tileSize + 1;
  numberOfTilesY = height / tileSize + 1;
}

function draw() {
  background(bgColor);

  strokeWeight(strokeW);
  stroke(0, 0, 0);

  // building up the grid
  for (let i = 0; i < numberOfTilesX; i++) {
    // slightly changing color with every column, creating a gradient
    colorModifier += colorIncrement;
    for (let j = 0; j < numberOfTilesY; j++) {
      drawTile(i * tileSize, j * tileSize);
    }
  }
}

// function that fills every individual tile of the pattern with the randomly selected rectangles
function drawTile(coordX, coordY) {
  fill((40 + colorModifier) % 100, 100, 100);
  let randoo;
  randoo = Math.random();
  if (randoo < 0.5) {
    rect(coordX - tileSize / 8 * 5, coordY, tileSize / 4, tileSize / 2);
  }
  randoo = Math.random();
  if (randoo < 0.5) {
    rect(coordX - tileSize / 8 * 5, coordY - tileSize / 8 * 4, tileSize / 4, tileSize / 2);
  }
  randoo = Math.random();
  if (randoo < 0.5) {
    rect(coordX - tileSize, coordY - tileSize / 8 * 5, tileSize / 2, tileSize / 4);
  }
  randoo = Math.random();
  if (randoo < 0.5) {
    rect(coordX - tileSize / 2, coordY - tileSize / 8 * 5, tileSize / 2, tileSize / 4);
  }
}

function randomBetweenNumbers(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}