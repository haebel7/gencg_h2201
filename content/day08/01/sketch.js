let strokeW;

let randomColor = (255, 255, 255);
let bgColor = (200, 200, 200);

let originX;
let originY;

let numOfPortraits = 2;
let portraitSize;

let rm;

let loopCount = 0;

//let img;
/*function preload() {
  img = loadImage('blank.jpg');
}*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  //noSmooth();
  noLoop();
  frameRate(15);

  portraitSize = width / numOfPortraits;
  rm = portraitSize / 600;

  strokeW = 2 * rm;
}

function draw() {
  clear();
  background(255);
  for (let j = 0; j < height / portraitSize - 1; j++) {
    for (let i = 0; i < numOfPortraits; i++) {
      //image(img, i * portraitSize, j * portraitSize, portraitSize, portraitSize);
      originX = i * portraitSize + portraitSize / 2;
      originY = j * portraitSize + portraitSize / 2;
      createFace();
    }
  }
  if (loopCount > 5) {
    noLoop();
  }
  loopCount++;
}

function mouseClicked() {
  loopCount = 0;
  loop();
}

function createFace() {
  //background(bgColor);
  //image(img, 0, 0, width, height);

  let x1, y1, x2, y2, x3, y3, x4, y4;

  fill(255, 255, 255);
  strokeWeight(strokeW + 0.5 * rm);

  // head
  let headTop = 150 * rm;
  let headSide = 100 * rm;
  let headBottom = 170 * rm;
  let headCheek = random(0, 50) * rm;
  let headJaw = random(350, 650) * rm;

  let earDistanceX = random(0, 10) * rm;
  let earDistanceY = random(20, 40) * rm;
  let earSizeX = random(30, 50) * rm;
  let earSizeY = random(70, 90) * rm;

  // ear left
  push();
  translate(originX - headSide - earDistanceX, originY + earDistanceY);
  rotate(-10);
  ellipse(0, 0, earSizeX, earSizeY);
  rotate(10);
  translate(originX + headSide + earDistanceX, originY - earDistanceY);
  pop();

  // ear right
  push();
  translate(originX + headSide + earDistanceX, originY + earDistanceY);
  rotate(15);
  ellipse(0, 0, earSizeX, earSizeY);
  rotate(-15);
  translate(originX - headSide - earDistanceX, originY - earDistanceY);
  pop();

  let neckWidth = random(20, 30) * rm;
  let neckLength = random(230, 240) * rm;

  // neck left
  line(originX - headSide + neckWidth, originY, originX - headSide + neckWidth, originY + neckLength);

  // neck right
  line(originX + headSide - neckWidth, originY, originX + headSide - neckWidth, originY + neckLength);


  let shoulderHeight = random(190, 210) * rm;
  let shoulderWidth = random(250, 270) * rm;
  let shoulderBottom = 300 * rm;

  // shoulder left
  x1 = originX + headSide;
  y1 = originY + headSide;
  x2 = originX - headSide + neckWidth;
  y2 = originY + shoulderHeight;
  x3 = originX - shoulderWidth;
  y3 = originY + shoulderBottom;
  x4 = originX - shoulderWidth * 2;
  y4 = originY + shoulderBottom * 2;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // shoulder right
  x1 = originX - headSide;
  y1 = originY + headSide;
  x2 = originX + headSide - neckWidth;
  y2 = originY + shoulderHeight;
  x3 = originX + shoulderWidth;
  y3 = originY + shoulderBottom;
  x4 = originX + shoulderWidth * 2;
  y4 = originY + shoulderBottom * 2;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // face fill
  stroke(255);

  beginShape();
  vertex(originX, originY + headBottom);
  vertex(originX + headSide, originY);
  vertex(originX, originY - headTop);
  vertex(originX - headSide, originY);
  endShape(CLOSE);

  stroke(0, 0, 0);

  // head top left
  x1 = originX - headSide + 200 * rm;
  y1 = originY + 400 * rm;
  x2 = originX - headSide;
  y2 = originY;
  x3 = originX;
  y3 = originY - headTop;
  x4 = originX + 300 * rm;
  y4 = originY - headTop + 150 * rm;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // head top right
  x1 = originX + headSide - 200 * rm;
  y1 = originY + 400 * rm;
  x2 = originX + headSide;
  y2 = originY;
  x3 = originX;
  y3 = originY - headTop;
  x4 = originX - 300 * rm;
  y4 = originY - headTop + 150 * rm;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // head bottom left
  x1 = originX + headCheek;
  y1 = originY;
  x2 = originX - headSide;
  y2 = originY;
  x3 = originX;
  y3 = originY + headBottom;
  x4 = originX + headJaw;
  y4 = originY;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // head bottom right
  x1 = originX - headCheek;
  y1 = originY;
  x2 = originX + headSide;
  y2 = originY;
  x3 = originX;
  y3 = originY + headBottom;
  x4 = originX - headJaw;
  y4 = originY;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  strokeWeight(strokeW);

  // eyes
  let eyeHeight = random(-10, 10) * rm;
  let innerEyeHeight = random(-5, 5) * rm;
  let outerEyeHeight = random(-5, 5) * rm;
  let innerEyeWidth = random(20, 30) * rm;
  let outerEyeWidth = random(50, 60) * rm;
  let eyeOpening = random(60, 100) * rm;

  // eye up left
  x1 = originX - 60 * rm;
  y1 = originY + eyeHeight + eyeOpening;
  x2 = originX - outerEyeWidth;
  y2 = originY + eyeHeight + outerEyeHeight;
  x3 = originX - innerEyeWidth;
  y3 = originY + eyeHeight + innerEyeHeight;
  x4 = originX - 10 * rm;
  y4 = originY + eyeHeight + eyeOpening;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // eye up right
  x1 = originX + 60 * rm;
  y1 = originY + eyeHeight + eyeOpening;
  x2 = originX + outerEyeWidth;
  y2 = originY + eyeHeight + outerEyeHeight;
  x3 = originX + innerEyeWidth;
  y3 = originY + eyeHeight + innerEyeHeight;
  x4 = originX + 10 * rm;
  y4 = originY + eyeHeight + eyeOpening;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // eye bottom left
  x1 = originX - 60 * rm;
  y1 = originY + eyeHeight - 60 * rm;
  x2 = originX - outerEyeWidth;
  y2 = originY + eyeHeight + outerEyeHeight;
  x3 = originX - innerEyeWidth;
  y3 = originY + eyeHeight + innerEyeHeight;
  x4 = originX - 10 * rm;
  y4 = originY + eyeHeight - 60 * rm;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // eye bottom right
  x1 = originX + 60 * rm;
  y1 = originY + eyeHeight - 60 * rm;
  x2 = originX + outerEyeWidth;
  y2 = originY + eyeHeight + outerEyeHeight;
  x3 = originX + innerEyeWidth;
  y3 = originY + eyeHeight + innerEyeHeight;
  x4 = originX + 10 * rm;
  y4 = originY + eyeHeight - 60 * rm;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);


  fill(0, 0, 0);

  let pupilSize = random(5, 10) * rm;
  let pupilPos = random(5, 20) * rm;

  // pupil left
  ellipse(originX - outerEyeWidth + pupilPos, originY + eyeHeight + (outerEyeHeight + innerEyeHeight) / 2, pupilSize);

  // pupil right
  ellipse(originX + innerEyeWidth + pupilPos, originY + eyeHeight + (outerEyeHeight + innerEyeHeight) / 2, pupilSize);


  fill(255, 255, 255);
  stroke(255);

  let leftBrowHeight1 = random(5, 30) * rm;
  let leftBrowHeight2 = random(5, 30) * rm;
  let leftBrowTilt1 = random(-60, 60) * rm;
  let leftBrowTilt2 = random(-60, 60) * rm;

  let rightBrowHeight1 = random(5, 30) * rm;
  let rightBrowHeight2 = random(5, 30) * rm;
  let rightBrowTilt1 = random(-60, 60) * rm;
  let rightBrowTilt2 = random(-60, 60) * rm;

  // left brow fill
  if (leftBrowTilt1 <= 0 || leftBrowTilt2 <= 0) {
    x1 = originX - 60 * rm;
    y1 = originY + leftBrowHeight1 + 200 * rm;
    x2 = originX - 60 * rm;
    y2 = originY - leftBrowHeight1;
    x3 = originX - 10 * rm;
    y3 = originY - leftBrowHeight2;
    x4 = originX - 10 * rm;
    y4 = originY + leftBrowHeight2 + 200 * rm;
    curve(x1, y1, x2, y2, x3, y3, x4, y4);
  }

  // right brow fill
  if (rightBrowTilt1 <= 0 || rightBrowTilt2 <= 0) {
    x1 = originX + 60 * rm;
    y1 = originY + rightBrowHeight1 + 200 * rm;
    x2 = originX + 60 * rm;
    y2 = originY - rightBrowHeight1;
    x3 = originX + 10 * rm;
    y3 = originY - rightBrowHeight2;
    x4 = originX + 10 * rm;
    y4 = originY + rightBrowHeight2 + 200 * rm;
    curve(x1, y1, x2, y2, x3, y3, x4, y4);
  }

  noFill();
  stroke(0);

  // brow left
  strokeWeight(random(2, 10) * rm);

  x1 = originX - 60 * rm;
  y1 = originY + leftBrowHeight1 + leftBrowTilt1;
  x2 = originX - 60 * rm;
  y2 = originY - leftBrowHeight1;
  x3 = originX - 10 * rm;
  y3 = originY - leftBrowHeight2;
  x4 = originX - 10 * rm;
  y4 = originY + leftBrowHeight2 + leftBrowTilt2;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // brow right

  x1 = originX + 60 * rm;
  y1 = originY + rightBrowHeight1 + rightBrowTilt1;
  x2 = originX + 60 * rm;
  y2 = originY - rightBrowHeight1;
  x3 = originX + 10 * rm;
  y3 = originY - rightBrowHeight2;
  x4 = originX + 10 * rm;
  y4 = originY + rightBrowHeight2 + rightBrowTilt2;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  strokeWeight(strokeW);

  // nose
  let noseSize = random(30, 90) * rm;
  let noseLength = random(100, 200) * rm;
  let noseTilt = random(0, 100) * rm;

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
  x1 = originX + 30 * rm;
  y1 = originY + noseSize;
  x2 = originX - 10 * rm;
  y2 = originY + noseSize;
  x3 = originX - 10 * rm;
  y3 = originY + noseSize - 10 * rm;
  x4 = originX + 10 * rm;
  y4 = originY + noseSize - 10 * rm;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // mouth
  let mouthHeight1 = random(noseSize + 5 * rm, 110 * rm);
  let mouthHeight2 = random(noseSize + 5 * rm, 110 * rm);
  let mouthWidth = random(20, 50) * rm;

  x1 = originX - 150 * rm;
  y1 = originY;
  x2 = originX - mouthWidth;
  y2 = originY + mouthHeight1;
  x3 = originX + mouthWidth;
  y3 = originY + mouthHeight2;
  x4 = originX + 150 * rm;
  y4 = originY;
  curve(x1, y1, x2, y2, x3, y3, x4, y4);


  strokeWeight(strokeW - 0.2 * rm);

  // lower lip
  let lipHeight = max(mouthHeight1, mouthHeight2) + 20 * rm;
  let lipWidth = random(10, 20) * rm;

  if (random() < 0.8) {
    x1 = originX - 30 * rm;
    y1 = originY + lipHeight - 30 * rm;
    x2 = originX - lipWidth;
    y2 = originY + lipHeight;
    x3 = originX + lipWidth;
    y3 = originY + lipHeight;
    x4 = originX + 30 * rm;
    y4 = originY + lipHeight - 30 * rm;
    curve(x1, y1, x2, y2, x3, y3, x4, y4);
  }

  if (random() < 0.5) {
    // mouthSide left
    x1 = originX - 30 * rm;
    y1 = originY + lipHeight - 30 * rm;
    x2 = originX - mouthWidth;
    y2 = originY + mouthHeight1 + 5 * rm;
    x3 = originX - mouthWidth;
    y3 = originY + mouthHeight1 - 5 * rm;
    x4 = originX + 30 * rm;
    y4 = originY + lipHeight - 30 * rm;
    curve(x1, y1, x2, y2, x3, y3, x4, y4);

    // mouthSide right
    x1 = originX + 30 * rm;
    y1 = originY + lipHeight - 30 * rm;
    x2 = originX + mouthWidth;
    y2 = originY + mouthHeight2 + 5 * rm;
    x3 = originX + mouthWidth;
    y3 = originY + mouthHeight2 - 5 * rm;
    x4 = originX - 30 * rm;
    y4 = originY + lipHeight - 30 * rm;
    curve(x1, y1, x2, y2, x3, y3, x4, y4);
  }

  if (random() < 0.5) {
    // upper lip
    let upperLipHeight = (mouthHeight1 + mouthHeight2) / 2;
    let upperLipWidth = random(5, 5) * rm;

    x1 = originX - 30 * rm;
    y1 = originY + upperLipHeight - 30 * rm;
    x2 = originX - upperLipWidth;
    y2 = originY + upperLipHeight;
    x3 = originX + upperLipWidth;
    y3 = originY + upperLipHeight;
    x4 = originX + 30 * rm;
    y4 = originY + upperLipHeight - 30 * rm;
    curve(x1, y1, x2, y2, x3, y3, x4, y4);

    line(x2, y2, x2, originY + noseSize + 5 * rm);
  }

  if (random() < 0.5) {
    // eye bag left
    x1 = originX - 60 * rm;
    y1 = originY - 60 * rm;
    x2 = originX - outerEyeWidth;
    y2 = originY + eyeHeight + 10 * rm;
    x3 = originX - innerEyeWidth;
    y3 = originY + eyeHeight + 10 * rm;
    x4 = originX - 10 * rm;
    y4 = originY - 60 * rm;
    curve(x1, y1, x2, y2, x3, y3, x4, y4);

    // eye bag right
    x1 = originX + 60 * rm;
    y1 = originY - 60 * rm;
    x2 = originX + outerEyeWidth;
    y2 = originY + eyeHeight + 10 * rm;
    x3 = originX + innerEyeWidth;
    y3 = originY + eyeHeight + 10 * rm;
    x4 = originX + 10 * rm;
    y4 = originY - 60 * rm;
    curve(x1, y1, x2, y2, x3, y3, x4, y4);
  }

  if (random() < 0.5) {
    // cheek left
    x1 = originX - 80 * rm;
    y1 = originY + noseSize;
    x2 = originX - 60 * rm;
    y2 = originY + noseSize + 20 * rm;
    x3 = originX - 80 * rm;
    y3 = originY + noseSize - 10 * rm;
    x4 = originX - 150 * rm;
    y4 = originY + noseSize - 10 * rm;
    curve(x1, y1, x2, y2, x3, y3, x4, y4);

    // cheek right
    x1 = originX + 80 * rm;
    y1 = originY + noseSize;
    x2 = originX + 60 * rm;
    y2 = originY + noseSize + 20 * rm;
    x3 = originX + 80 * rm;
    y3 = originY + noseSize - 10 * rm;
    x4 = originX + 150 * rm;
    y4 = originY + noseSize - 10 * rm;
    curve(x1, y1, x2, y2, x3, y3, x4, y4);
  }


}