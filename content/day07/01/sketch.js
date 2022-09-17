// Original pixelated camera code: https://codepen.io/gu-ma/pen/LggyKa

let video;
let canvas;
let step_row, step_col;

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
      width: 240,
      height: 240
      // frameRate: { ideal: 10, max: 15 }       
    },
    audio: false
  };
  video = createCapture(constraints);
}

// Main draw loop
function draw() {
  
  // Draw the background 
  background(255);
  // Load the pixels from the webcam into an array called `pixels`
  video.loadPixels();

  // Draw the pixels
  let s = 2;
  let x = width / 2 - (video.width * s) / 2;
  let y = height / 2 - (video.height * s) / 2;
  drawPixels(video.pixels, x, y, s, video.get(0,0,250,250));
  
}

// Draw pixels function
// See also -> https://p5js.org/examples/dom-video-pixels.html
function drawPixels(pixels, x, y, s, img) {
  //console.log(img);
  push();
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
        let a = 255;
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
