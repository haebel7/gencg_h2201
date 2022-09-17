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

  // Setting up orthographic camera for an isometric looking pattern
  cam1 = createCamera();
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
  translate(-width / 2, -height / 2)
  // normal material to add distinct colors to the cubes not affected by light
  normalMaterial();
  // Generating rows of cubes, which all rotate on the X axis
  for (let i = 0; i < numberOfTilesX; i++) {
    for (let j = 0; j < numberOfTilesY; j++) {
      translate(i * tileSize, j * tileSize);
      // rotating every second column of boxes in the opposite direction
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