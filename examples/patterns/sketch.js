let imagePattern;
let graphicsPattern;

let img;
let buffer;

function preload() {
  img = loadImage("brick_small.jpg");
}

function setup() {
  createCanvas(500, 500);
  // pixelDensity(1);

  // create an image pattern based on the image we loaded
  imagePattern = createPattern(img);

  // create an empty graphics
  buffer = createGraphics(5, 5);
  // set the pixel density to 1 to make sure it looks as intended
  buffer.pixelDensity(1);
  // draw a diagonal black line
  buffer.background(255);
  buffer.stroke(0);
  buffer.strokeWeight(1);
  buffer.line(0, 0, 5, 5);

  // create a battern based on our graphics object
  graphicsPattern = createPattern(buffer);
}

function draw() {
  // fill the background with our image pattern;
  backgroundPattern(imagePattern);

  // set the fill style to our graphics pattern
  fillPattern(graphicsPattern);

  // use translate to move the shape around
  // if we DON'T do this, the pattern will remain fixed
  push();
  translate(mouseX, mouseY);
  rect(0, 0, 200, 200);
  pop();

  // we'll continue to fill with the pattern until we change the fill style again
  ellipse(100, 100, 100, 100);
}
