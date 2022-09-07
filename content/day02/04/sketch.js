let strokeW;
let density;

let tileSize;
let numberOfTilesX;
let numberOfTilesY;

let bgColor = (0, 0, 0);

let rotatione = 0;

let tiles = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  //frameRate(5);
  //noLoop();
  //noSmooth();

  //colorMode(HSB, 100);

  cam1 = createCamera();
  //cam1.lookAt(0, 0, 0);
  cam1.ortho();
  setCamera(cam1);

  strokeW = 2;
  density = 1;
  tileSize = 80;

  numberOfTilesX = width / tileSize + 1;
  numberOfTilesY = height / tileSize + 1;

  strokeWeight(strokeW);
  stroke(255, 255, 255);
}

function draw() {
  background(bgColor);
  //noStroke();
  translate(-width / 2, -height / 2)
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(250, 250, 250, -dirX, -dirY, -1);
  //normalMaterial();
  //specularMaterial(250);
  //shininess(50);
  for (let i = 0; i < numberOfTilesX; i++) {
    for (let j = 0; j < numberOfTilesY; j++) {
      translate(i * tileSize, j * tileSize);
      if (i % 2 == 0) {
        rotateX(rotatione);
        box(tileSize);
        rotateX(-rotatione);
      } else {
        rotateX(-rotatione);
        box(tileSize);
        rotateX(rotatione);
      }

      translate(i * -tileSize, j * -tileSize);
    }
  }
  rotatione = (rotatione + 1) % 360;
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
  });
}

function mouseClicked() {
  console.log(mouseX + ", " + mouseY);
  tiles.forEach(tile => {
    if (tile.x + tileSize > mouseX && tile.x < mouseX && tile.y + tileSize > mouseY && tile.y < mouseY) {
      console.log(tile.x + ", " + tile.y);
      let backup = tile.up;
      tile.up = tile.left;
      tile.left = tile.down;
      tile.down = tile.right;
      tile.right = backup;
    }
  });
}

function randomBetweenNumbers(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}