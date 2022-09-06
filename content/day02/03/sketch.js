let strokeW;
let density;

let tileSize;
let numberOfTilesX;
let numberOfTilesY;

let bgColor = (0, 0, 0);

let startColor = 0;

let colorModifier = 0;
let colorIncrement = 3;

let videoIncrement = 2;

let tiles = [];

function setup() {
  createCanvas(1600, 1600);
  angleMode(DEGREES);
  frameRate(8);
  //noLoop();
  //noSmooth();

  colorMode(HSB, 100);

  strokeW = 0;
  density = 1;
  tileSize = 100;

  numberOfTilesX = width / tileSize + 1;
  numberOfTilesY = height / tileSize + 1;

  strokeWeight(strokeW);
  stroke(255, 255, 255);

  for (let i = 0; i < numberOfTilesX; i++) {
    colorModifier += colorIncrement;
    for (let j = 0; j < numberOfTilesY; j++) {
      addTile(i * tileSize, j * tileSize);
    }
  }
}

function draw() {
  background(bgColor);
  drawTiles();

  /*fill((startColor + colorModifier) % 100, 100, 100);
  square(0, 0, tileSize);
  rect(0 + tileSize / 8 * 3, 0, tileSize / 4, tileSize / 2);
  rect(0 + tileSize / 2, 0 + tileSize / 8 * 3, tileSize / 2, tileSize / 4);
  rect(0 + tileSize / 8 * 3, 0 + tileSize / 8 * 4, tileSize / 4, tileSize / 2);
  rect(0, 0 + tileSize / 8 * 3, tileSize / 2, tileSize / 4);*/
}

function addTile(coordX, coordY) {
  let tile = {
    x: coordX,
    y: coordY,
    up: Math.random() < 0.5 ? true : false,
    down: Math.random() < 0.5 ? true : false,
    left: Math.random() < 0.5 ? true : false,
    right: Math.random() < 0.5 ? true : false,
    fill: (startColor + colorModifier) % 100
  };
  tiles.push(tile);
}

function drawTiles() {
  tiles.forEach(tile => {
    fill(tile.fill, 100, 100);
    if (tile.up) {
      rect(tile.x + tileSize / 8 * 3, tile.y, tileSize / 4, tileSize / 2);
    }
    if (tile.right) {
      rect(tile.x + tileSize / 2, tile.y + tileSize / 8 * 3, tileSize / 2, tileSize / 4);
    }
    if (tile.down) {
      rect(tile.x + tileSize / 8 * 3, tile.y + tileSize / 8 * 4, tileSize / 4, tileSize / 2);
    }
    if (tile.left) {
      rect(tile.x, tile.y + tileSize / 8 * 3, tileSize / 2, tileSize / 4);
    }

    if (Math.random() < 0.1) {
      rotateTile(tile)
    }
  });
}

function mouseClicked() {
  tiles.forEach(tile => {
    if (tile.x + tileSize > mouseX && tile.x < mouseX && tile.y + tileSize > mouseY && tile.y < mouseY) {
      tile = rotateTile(tile);
    }
  });
}

function rotateTile(tile) {
  let backup = tile.up;
  tile.up = tile.left;
  tile.left = tile.down;
  tile.down = tile.right;
  tile.right = backup;
  return tile;
}

function randomBetweenNumbers(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}