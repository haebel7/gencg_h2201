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

  let eyeHeight = random(-10, 10);
  let innerEyeHeight = random(-5, 5);
  let outerEyeHeight = random(-5, 5);
  let innerEyeWidth = random(20, 30);
  let outerEyeWidth = random(50, 60);
  let eyeOpening = random(60, 100);

  // eye up left
  let x1 = originX - 60;
  let y1 = originY + eyeHeight + eyeOpening;
  let x2 = originX - outerEyeWidth;
  let y2 = originY + eyeHeight + outerEyeHeight;
  let x3 = originX - innerEyeWidth;
  let y3 = originY + eyeHeight + innerEyeHeight;
  let x4 = originX - 10;
  let y4 = originY + eyeHeight + eyeOpening;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // eye up right
  x1 = originX + 60;
  y1 = originY + eyeHeight + eyeOpening;
  x2 = originX + outerEyeWidth;
  y2 = originY + eyeHeight + outerEyeHeight;
  x3 = originX + innerEyeWidth;
  y3 = originY + eyeHeight + innerEyeHeight;
  x4 = originX + 10;
  y4 = originY + eyeHeight + eyeOpening;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // eye bottom left
  x1 = originX - 60;
  y1 = originY + eyeHeight - 60;
  x2 = originX - outerEyeWidth;
  y2 = originY + eyeHeight + outerEyeHeight;
  x3 = originX - innerEyeWidth;
  y3 = originY + eyeHeight + innerEyeHeight;
  x4 = originX - 10;
  y4 = originY + eyeHeight - 60;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // eye bottom right
  x1 = originX + 60;
  y1 = originY + eyeHeight - 60;
  x2 = originX + outerEyeWidth;
  y2 = originY + eyeHeight + outerEyeHeight;
  x3 = originX + innerEyeWidth;
  y3 = originY + eyeHeight + innerEyeHeight;
  x4 = originX + 10;
  y4 = originY + eyeHeight - 60;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  fill(0, 0, 0);

  let pupilSize = random(5, 10);
  let pupilPos = random(5, 20);

  // pupil left
  ellipse(originX - outerEyeWidth + pupilPos, originY + eyeHeight + (outerEyeHeight + innerEyeHeight) / 2, pupilSize);

  // pupil right
  ellipse(originX + innerEyeWidth + pupilPos, originY + eyeHeight + (outerEyeHeight + innerEyeHeight) / 2, pupilSize);

  noFill();

  // brow left
  strokeWeight(random(2, 10));

  let leftBrowHeight1 = random(5, 30);
  let leftBrowHeight2 = random(5, 30);
  let leftBrowTilt1 = random(-60, 60);
  let leftBrowTilt2 = random(-60, 60);

  x1 = originX - 60;
  y1 = originY + leftBrowHeight1 + leftBrowTilt1;
  x2 = originX - 60;
  y2 = originY - leftBrowHeight1;
  x3 = originX - 10;
  y3 = originY - leftBrowHeight2;
  x4 = originX - 10;
  y4 = originY + leftBrowHeight2 + leftBrowTilt2;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // brow right
  let rightBrowHeight1 = random(5, 30);
  let rightBrowHeight2 = random(5, 30);
  let rightBrowTilt1 = random(-60, 60);
  let rightBrowTilt2 = random(-60, 60);

  x1 = originX + 60;
  y1 = originY + rightBrowHeight1 + rightBrowTilt1;
  x2 = originX + 60;
  y2 = originY - rightBrowHeight1;
  x3 = originX + 10;
  y3 = originY - rightBrowHeight2;
  x4 = originX + 10;
  y4 = originY + rightBrowHeight2 + rightBrowTilt2;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  strokeWeight(strokeW);

  // nose
  let noseSize = random(30, 90);
  let noseLength = random(100, 200);
  let noseTilt = random(0, 100);

  x1 = originX;
  y1 = originY;
  x2 = originX;
  y2 = originY;
  x3 = originX;
  y3 = originY + noseSize;
  x4 = originX - noseLength;
  y4 = originY - noseTilt;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // nostril
  x1 = originX + 30;
  y1 = originY + noseSize;
  x2 = originX - 10;
  y2 = originY + noseSize;
  x3 = originX - 10;
  y3 = originY + noseSize - 10;
  x4 = originX + 10;
  y4 = originY + noseSize - 10;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // mouth
  let mouthHeight1 = random(noseSize + 5, 110);
  let mouthHeight2 = random(noseSize + 5, 110);
  let mouthWidth = random(20, 50);

  x1 = originX - 150;
  y1 = originY;
  x2 = originX - mouthWidth;
  y2 = originY + mouthHeight1;
  x3 = originX + mouthWidth;
  y3 = originY + mouthHeight2;
  x4 = originX + 150;
  y4 = originY;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);


  strokeWeight(strokeW - 0.2);

  // lower lip
  let lipHeight = max(mouthHeight1, mouthHeight2) + 20;
  let lipWidth = random(10, 20);

  x1 = originX - 30;
  y1 = originY + lipHeight - 30;
  x2 = originX - lipWidth;
  y2 = originY + lipHeight;
  x3 = originX + lipWidth;
  y3 = originY + lipHeight;
  x4 = originX + 30;
  y4 = originY + lipHeight - 30;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  if (random() < 0.5) {
    // mouthSide left
    x1 = originX - 30;
    y1 = originY + lipHeight - 30;
    x2 = originX - mouthWidth;
    y2 = originY + mouthHeight1 + 5;
    x3 = originX - mouthWidth;
    y3 = originY + mouthHeight1 - 5;
    x4 = originX + 30;
    y4 = originY + lipHeight - 30;
    curve(x1, y1, x2, y2, x3, y3, x4, y4);

    // mouthSide right
    x1 = originX + 30;
    y1 = originY + lipHeight - 30;
    x2 = originX + mouthWidth;
    y2 = originY + mouthHeight2 + 5;
    x3 = originX + mouthWidth;
    y3 = originY + mouthHeight2 - 5;
    x4 = originX - 30;
    y4 = originY + lipHeight - 30;
    curve(x1, y1, x2, y2, x3, y3, x4, y4);
  }

  if (random() < 0.5) {
    // upper lip
    let upperLipHeight = (mouthHeight1 + mouthHeight2) / 2;
    let upperLipWidth = random(5, 5);

    x1 = originX - 30;
    y1 = originY + upperLipHeight - 30;
    x2 = originX - upperLipWidth;
    y2 = originY + upperLipHeight;
    x3 = originX + upperLipWidth;
    y3 = originY + upperLipHeight;
    x4 = originX + 30;
    y4 = originY + upperLipHeight - 30;
    curve(x1, y1, x2, y2, x3, y3, x4, y4);

    line(x2, y2, x2, originY + noseSize + 5);
  }

  if (random() < 0.5) {
    // eye bag left
    x1 = originX - 60;
    y1 = originY - 60;
    x2 = originX - outerEyeWidth;
    y2 = originY + eyeHeight + 10;
    x3 = originX - innerEyeWidth;
    y3 = originY + eyeHeight + 10;
    x4 = originX - 10;
    y4 = originY - 60;
    curve(x1, y1, x2, y2, x3, y3, x4, y4);

    // eye bag right
    x1 = originX + 60;
    y1 = originY - 60;
    x2 = originX + outerEyeWidth;
    y2 = originY + eyeHeight + 10;
    x3 = originX + innerEyeWidth;
    y3 = originY + eyeHeight + 10;
    x4 = originX + 10;
    y4 = originY - 60;
    curve(x1, y1, x2, y2, x3, y3, x4, y4);
  }

  if (random() < 0.5) {
    // cheek left
    x1 = originX - 80;
    y1 = originY + noseSize;
    x2 = originX - 60;
    y2 = originY + noseSize + 20;
    x3 = originX - 80;
    y3 = originY + noseSize - 10;
    x4 = originX - 150;
    y4 = originY + noseSize - 10;
    curve(x1, y1, x2, y2, x3, y3, x4, y4);

    // cheek right
    x1 = originX + 80;
    y1 = originY + noseSize;
    x2 = originX + 60;
    y2 = originY + noseSize + 20;
    x3 = originX + 80;
    y3 = originY + noseSize - 10;
    x4 = originX + 150;
    y4 = originY + noseSize - 10;
    curve(x1, y1, x2, y2, x3, y3, x4, y4);
  }
}