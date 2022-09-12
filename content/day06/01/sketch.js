let strokeW;
let density;

let randomColor = (255, 255, 255);
let bgColor = (200, 200, 200);

let originX;
let originY;

let img;
function preload() {
  img = loadImage('blank.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noSmooth();
  noLoop();

  strokeW = 2;
  density = 1;

  originX = width / 2;
  originY = height / 2;
}

function draw() {
  background(bgColor);
  image(img, 0, 0, width, height);

  strokeWeight(strokeW);
  stroke(0, 0, 0);
  fill(255, 255, 255);

  // eye up left
  let x1 = originX - 60;
  let y1 = originY + 60;
  let x2 = originX - 50;
  let y2 = originY - 0;
  let x3 = originX - 20;
  let y3 = originY - 0;
  let x4 = originX - 10;
  let y4 = originY + 60;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // eye up right
  x1 = originX + 60;
  y1 = originY + 60;
  x2 = originX + 50;
  y2 = originY - 0;
  x3 = originX + 20;
  y3 = originY - 0;
  x4 = originX + 10;
  y4 = originY + 60;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // eye bottom left
  x1 = originX - 60;
  y1 = originY - 60;
  x2 = originX - 50;
  y2 = originY - 0;
  x3 = originX - 20;
  y3 = originY - 0;
  x4 = originX - 10;
  y4 = originY - 60;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // eye bottom right
  x1 = originX + 60;
  y1 = originY - 60;
  x2 = originX + 50;
  y2 = originY - 0;
  x3 = originX + 20;
  y3 = originY - 0;
  x4 = originX + 10;
  y4 = originY - 60;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  fill(0, 0, 0);
  // pupil left
  ellipse(originX - 30, originY, 10);

  // pupil right
  ellipse(originX + 40, originY, 10);

  noFill();

  // mouth bottom
   x1 = originX - 150;
   y1 = originY;
   x2 = originX - 50;
   y2 = originY + 100;
   x3 = originX + 50;
   y3 = originY + 100;
   x4 = originX + 150;
   y4 = originY;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // lip
  x1 = originX - 30;
  y1 = originY + 80;
  x2 = originX - 20;
  y2 = originY + 120;
  x3 = originX + 20;
  y3 = originY + 120;
  x4 = originX + 30;
  y4 = originY + 80;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // brow left
  x1 = originX - 60;
  y1 = originY + 60;
  x2 = originX - 60;
  y2 = originY - 10;
  x3 = originX - 10;
  y3 = originY - 10;
  x4 = originX - 10;
  y4 = originY + 60;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // brow right
  x1 = originX + 60;
  y1 = originY + 60;
  x2 = originX + 60;
  y2 = originY - 10;
  x3 = originX + 10;
  y3 = originY - 10;
  x4 = originX + 10;
  y4 = originY + 60;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // nose
  x1 = originX;
  y1 = originY;
  x2 = originX;
  y2 = originY;
  x3 = originX;
  y3 = originY + 60;
  x4 = originX - 200;
  y4 = originY;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);
}