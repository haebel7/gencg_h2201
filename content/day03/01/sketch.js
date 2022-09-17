let randomColor = (255, 255, 255);
let bgColor = (2, 2, 2);

let originAngle = 2.0;
let angleIncrement = 1;

// Spiral variables
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

  // Create spiral growing until it leaves the canvas
  for (let i = 0; i < 1000; i++) {
    // Color gradient as spiral goes on
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

  // Draw the ball that is circling inside the spiral
  let ballX = cos(angle) * 300 + width / 2;
  let ballY = sin(angle) * 300 + height / 2;
  fill(200, 200, 200, 185);
  strokeWeight(2);
  circle(ballX, ballY, 200);

  // Increment the angle by a little so that the spiral spins around every frame
  angle = originAngle + angleIncrement;
  angleIncrement += 2;

  // Reset various variables on each frame, so that the spiral is drawn in the same way from the middle again
  scalar = 1.5;
  radius = 2;
  spiralAlpha = 0;
  col = {
    r: 0,
    g: 0,
    b: 0
  };
}