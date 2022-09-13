// Variables declaration
let video;
let canvas;
let step_row, step_col;

let zoomFactor = 1;
let secondAlpha = 0;

// Setup the sketch
function setup() {

  //translate(width / -2, height / -2);

  // Width and height of rows and columns in our grid
  step_row = 10;
  step_col = 10;

  // We do not handle high density screen  
  pixelDensity(1);

  blendMode(ADD);

  // Create the canvas that will hold the main sketch
  // We use instance mode
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5Container");

  // Camera input
  // Keep this lowres
  var constraints = {
    video: {
      width: 250,
      height: 250
      // frameRate: { ideal: 10, max: 15 }       
    },
    audio: false
  };
  video = createCapture(constraints);
}

// Main draw loop
function draw() {
  zoomFactor = zoomFactor * 1.005;
  secondAlpha += 1;
  if (zoomFactor > 25) {
    zoomFactor = 1;
    secondAlpha = 0;
  }

  translate(width / 2, height / 2);
  scale(zoomFactor);
  //console.log(zoomFactor);


  // Draw the background 
  background(255);
  // Load the pixels from the webcam into an array called `pixels`
  video.loadPixels();

  /*for (let i = 0; i < 9; i++) {
    video.get(0, 0, 250, 250)
  }*/

  // Draw the pixels
  let s = 6;
  let x = /*width / 2*/0 - (video.width * s) / 2;
  let y = /*height / 2*/0 - (video.height * s) / 2;
  drawPixels(video.pixels, x, y, s, video.get(0, 0, 250, 250), 255);

  s = 0.24;
  x = /*width / 2*/0 - (video.width * s) / 2;
  y = /*height / 2*/0 - (video.height * s) / 2;
  drawPixels(video.pixels, x, y, s, video.get(0, 0, 250, 250), 255);

}

// Draw pixels function
// See also -> https://p5js.org/examples/dom-video-pixels.html
function drawPixels(pixels, x, y, s, img, alpha) {
  push();
  //tint(255, alpha)
  translate(x, y);
  scale(s);
  // We iterate through all the elements of the array
  for (let i = 0; i < pixels.length; i += 4) {
    // We calculate the x and y associated with a pixel
    let x = (i / 4) % video.width;
    let y = floor((i / 4) / video.width);
    // if x and why are on a column or row
    if (x % step_col == 0 && y % step_row == 0) {
      // assign r,g,b,a colors 
      let r = pixels[i];
      let g = pixels[i + 1];
      let b = pixels[i + 2];
      let a = alpha;//pixels[i + 3];
      // Use the color from a pixel to draw a rectangle
      fill(r, g, b, a);
      noStroke();
      // We can change some parameters here
      let w = step_col * 2;
      let h = step_row * 2;
      //rectMode(CENTER);

      //tint(255, alpha)
      image(img, x, y, w / 2, h / 2);
      //noTint();
      blendMode(MULTIPLY);
      rect(x, y, w / 2, h / 2);
      blendMode(BLEND);
    }
  }
  pop();
}

// This function listen to the keys pressed on the keyboard
/*function keyPressed() {
  // Left / right arrows control the number of columns
  if (keyCode === LEFT_ARROW) step_col = (step_col > 0) ? step_col - 1 : 0;
  if (keyCode === RIGHT_ARROW) step_col = (step_col < 20) ? step_col + 1 : 20;
  // up / down arrows control the number of rows
  if (keyCode === UP_ARROW) step_row = (step_row > 0) ? step_row - 1 : 0;
  if (keyCode === DOWN_ARROW) step_row = (step_row < 20) ? step_row + 1 : 20;
  // Save image
  if (key == 's' || key == 'S') saveImg(width, height);
}

// Save Image
function saveImg(w, h) {
  let img = get(width / 2 - w / 2, height / 2 - h / 2, w, h);
  let file_name = Date.now().toString() + ".jpg";
  save(img, file_name);
}*/

// Resize the canvas when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
