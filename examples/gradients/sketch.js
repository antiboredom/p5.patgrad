let gradient1;
let gradient2;
let gradient3;

function setup() {
  createCanvas(400, 400);

  // create a linear gradient that's angled at 0 radians, and is 200px wide
  gradient1 = createLinearGradient(0, 200);
  // add some colors
  // at 0% make it lightblue, then at 50% make it pink, and at 100% make it magenta
  gradient1.colors(0, "lightblue", 0.5, "pink", 1, "magenta");

  gradient2 = createRadialGradient(0, 100);
  gradient2.colors(0, color(200), 1, color(50));

  // create a conic gradient that starts at angle 0, and whose center point is at 200, 200
  gradient3 = createConicGradient(0, 200, 200);

  // fill the gradient with some random colors!
  for (let i = 0; i < 5; i++) {
    let position = i / 5;
    let c = color(random(255), random(255), random(255));
    // calling gradient3.colors() will add the color to the gradient
    // alternatively you can pass an array to the colors function
    gradient3.colors(position, c);
  }
}

function draw() {
  // set the background to gradient3
  backgroundGradient(gradient3);

  noStroke();

  // you must always call fillGradient OUTSIDE push and pop
  fillGradient(gradient1);
  strokeGradient(gradient2);
  strokeWeight(20);

  // you must always translate to apply the gradient properly
  // maybe I can figure out a way to fix this??? Or maybe I can't!
  push();
  translate(100, 100);
  rect(0, 0, 200, 200);
  pop();

  fillGradient(gradient2);
  push();
  translate(300, 300);
  ellipse(0, 0, 100, 100);
  pop();
}
