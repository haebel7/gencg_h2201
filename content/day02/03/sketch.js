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
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(8);

  colorMode(HSB, 100);

  strokeW = 0;
  density = 1;
  tileSize = 80;

  numberOfTilesX = width / tileSize + 1;
  numberOfTilesY = height / tileSize + 1;

  strokeWeight(strokeW);
  stroke(255, 255, 255);

  // building up the grid, in the setup, so that the same one can be reused later
  for (let i = 0; i < numberOfTilesX; i++) {
    // slightly changing color with every column, creating a gradient
    colorModifier += colorIncrement;
    for (let j = 0; j < numberOfTilesY; j++) {
      addTile(i * tileSize, j * tileSize);
    }
  }
}

function draw() {
  background(bgColor);
  drawTiles();
}

// generating a new tile in the tiles array
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

// function that fills every individual tile of the pattern according to the tiles array
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

// rotate tile on mouse click
function mouseClicked() {
  tiles.forEach(tile => {
    if (tile.x + tileSize > mouseX && tile.x < mouseX && tile.y + tileSize > mouseY && tile.y < mouseY) {
      tile = rotateTile(tile);
    }
  });
}

// "rotating" a tile by switching which rectangles are displayed (upper rectangle becomes the right one, right rectangle becomes the bottom one, etc)
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