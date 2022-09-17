let randomColor = (255, 255, 255);
let bgColor = (2, 2, 2);

let originAngle = 2.0;
let angleIncrement = 1;

// Spiral variables
let angle = 2.0;
let offsetX;
let offsetY;
let scalar = 1.5;
let speed = 1.2;
let radius = 2;
let spiralAlpha = 0;
let col = {
  r: 0,
  g: 0,
  b: 0
};

// Smaller moving ball variables
let smallRadius = 0;
let smallAngle = 2.0;
let smallScalar = 1.5;
let smallSpeed = 3.3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(60)

  noSmooth();

  strokeW = 0.3;
  density = 1;
  offsetX = width / 2;
  offsetY = height / 2;
}

function draw() {

  background(bgColor);
  strokeWeight(strokeW);
  stroke(0, 0, 0);
  noStroke();
  scale(0.5);

  // Create spiral growing
  for (let i = 0; i < 1000; i++) {
    // Color gradient as spiral goes on
    col.r += 0.3;
    col.g += 0.1;
    col.b += 0.5;
    let spiralColor = color(col.r, col.g, col.b);
    spiralAlpha += 0.5;
    spiralColor.setAlpha(spiralAlpha);
    radius += 0.1;
    var x = offsetX + cos(angle) * scalar;
    var y = offsetY + sin(angle) * scalar;
    fill(spiralColor);
    ellipse(x, y, radius);
    angle += speed;
    scalar += speed;
  }

  // Draw the ball that is circling inside the spiral
  let ballX = cos(angle) * 300 + width / 2;
  let ballY = sin(angle) * 300 + height / 2;
  fill(200, 100, 100, 185);
  strokeWeight(2);
  circle(ballX, ballY, 200);

  // Increment the angle by a little so that the spiral spins around every frame
  angle = angleIncrement;
  angleIncrement = (angleIncrement + 2) % 360;

  // Reset various variables on each frame, so that the spiral is drawn in the same way from the middle again
  scalar = 1.5;
  radius = 2;
  spiralAlpha = 0;
  col = {
    r: 0,
    g: 0,
    b: 0
  };

  // Draw the smaller ball slowly following along the spiral's path
  var smallBallX = offsetX + cos(smallAngle+180) * smallScalar;
  var smallBallY = offsetY + sin(smallAngle+180) * smallScalar;
  smallRadius = (smallRadius + 0.3);
  fill(200, 200, 100, 185);
  strokeWeight(2);
  circle(smallBallX, smallBallY, smallRadius);
  smallAngle = (smallAngle + speed+2);
  smallScalar = (smallScalar + speed)/*%1440*/;

  // Reset the smaller ball when it is too far outside the spiral
  if (smallScalar > 1440) {
    smallScalar = 0;
    smallRadius = 20;
  }
}