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

  cam1 = createCamera();
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
  translate(-width / 2, -height / 2)
  normalMaterial();

  // Generating rows of cubes, which all rotate on the X axis
  for (let i = 0; i < numberOfTilesX; i++) {
    for (let j = 0; j < numberOfTilesY; j++) {
      translate(i * tileSize, j * tileSize);
      rotateX(rotatione);
      box(tileSize);
      rotateX(-rotatione);
      translate(i * -tileSize, j * -tileSize);
    }
  }
  rotatione = (rotatione + 1) % 360;
}