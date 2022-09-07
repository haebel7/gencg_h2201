let randomColor = (255, 255, 255);
let bgColor = (2, 2, 2);

let originAngle = 2.0;
let angleIncrement = 1;

let angle = 2.0;
let offset = 800;
let scalar = 1.5;
let speed = 1.2;
let radius = 2;
let spiralAlpha = 0;
let col = {
  r: 0,
  g: 0,
  b: 0
};

function setup() {
  createCanvas(1600, 1600);
  angleMode(DEGREES);
  frameRate(60)
  //noLoop();
  //colorMode(RGB, 100);

  noSmooth();

  strokeW = 0.3;
  density = 1;

}

function draw() {

  background(bgColor);
  strokeWeight(strokeW);
  stroke(0, 0, 0);
  noStroke();

  for (let i = 0; i < 1000; i++) {
    col.r += 0.3;
    col.g += 0.1;
    col.b += 0.5;
    let spiralColor = color(col.r, col.g, col.b);
    spiralAlpha += 0.5;
    spiralColor.setAlpha(spiralAlpha);
    radius += 0.1;
    var x = offset + cos(angle) * scalar;
    var y = offset + sin(angle) * scalar;
    fill(spiralColor);
    ellipse(x, y, radius, radius);
    angle += speed;
    scalar += speed;
  }

  let ballX = cos(angle) * 300 + width / 2;
  let ballY = sin(angle) * 300 + height / 2;
  fill(200, 200, 200, 185);
  strokeWeight(2);
  //circle(width / 2, height / 2, 400);
  circle(ballX, ballY, 200);


  angle = originAngle + angleIncrement;
  angleIncrement += 2;
  scalar = 1.5;
  radius = 2;
  spiralAlpha = 0;
  col = {
    r: 0,
    g: 0,
    b: 0
  };
}