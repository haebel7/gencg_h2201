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

let smallRadius = 0;
let smallAngle = 2.0;
let smallScalar = 1.5;
let smallSpeed = 3.3;

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
    ellipse(x, y, radius);
    angle += speed;
    scalar += speed;
  }

  let ballX = cos(angle) * 300 + width / 2;
  let ballY = sin(angle) * 300 + height / 2;
  fill(200, 100, 100, 185);
  strokeWeight(2);
  circle(ballX, ballY, 200);

  
  angle = angleIncrement;
  angleIncrement = (angleIncrement + 2) % 360;
  scalar = 1.5;
  radius = 2;
  spiralAlpha = 0;
  col = {
    r: 0,
    g: 0,
    b: 0
  };
  var smallBallX = offset + cos(smallAngle+180) * smallScalar;
  var smallBallY = offset + sin(smallAngle+180) * smallScalar;
  smallRadius = (smallRadius + 0.3);
  fill(200, 200, 100, 185);
  strokeWeight(2);
  circle(smallBallX, smallBallY, smallRadius);
  smallAngle = (smallAngle + speed+2);
  smallScalar = (smallScalar + speed)/*%1440*/;

  if (smallScalar > 1440) {
    smallScalar = 0;
    smallRadius = 20;
  }
}