// Original pixelated camera code: https://codepen.io/gu-ma/pen/LggyKa

let video;
let canvas;
let step_row, step_col;

// Animation zoom factor
let zoomFactor = 1;
let secondAlpha = 0;

// Setup the sketch
function setup() {

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
  // Increasing zoom every frame
  zoomFactor = zoomFactor * 1.005;
  secondAlpha += 1;
  // Resetting zoom factor, looping the animation
  if (zoomFactor > 25) {
    zoomFactor = 1;
    secondAlpha = 0;
  }

  // Scaling whole canvas depending on zoom factor
  translate(width / 2, height / 2);
  scale(zoomFactor);

  // Draw the background 
  background(255);
  // Load the pixels from the webcam into an array called `pixels`
  video.loadPixels();

  // Draw the pixels
  let s = 6;
  let x = 0 - (video.width * s) / 2;
  let y = 0 - (video.height * s) / 2;
  drawPixels(video.pixels, x, y, s, video.get(0, 0, 250, 250), 255);

  // Second, smaller version to zoom into
  s = 0.24;
  x = 0 - (video.width * s) / 2;
  y = 0 - (video.height * s) / 2;
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
      let a = alpha;
      // Use the color from a pixel to draw a rectangle
      fill(r, g, b, a);
      noStroke();
      // We can change some parameters here
      let w = step_col * 2;
      let h = step_row * 2;
      //rectMode(CENTER);

      // Drawing current frame of camera feed, multiplying the color with the RGB values determined earlier
      image(img, x, y, w / 2, h / 2);
      blendMode(MULTIPLY);
      rect(x, y, w / 2, h / 2);
      blendMode(BLEND);
    }
  }
  pop();
}

// Resize the canvas when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
