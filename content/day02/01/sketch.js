let strokeW;
let density;

let tileSize;
let numberOfTilesX;
let numberOfTilesY;

let randomColor = (255, 255, 255);
let bgColor = (0, 0, 0);

function setup() {
  createCanvas(1600, 1600);
  angleMode(DEGREES);
  frameRate(3);
  noLoop();
  //noSmooth();

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

  for (let i = 0; i < numberOfTilesX; i++) {
    for (let j = 0; j < numberOfTilesY; j++) {
      drawTile(i * tileSize, j * tileSize, tileSize);
    }
  }
}

function drawTile(coordX, coordY, size) {
  //fill(255, 255, 255);
  //square(coordX, coordY, size);
  fill(255, 255, 255);
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