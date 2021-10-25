let shapes = [];

function setup() {
  createCanvas(500, 500);
  let w = width;
  for (let i = 0; i < 20; i++) {
    let buffer = createGraphics(5, 5);
    buffer.pixelDensity(1);
    buffer.background(255);
    buffer.stroke(0);
    buffer.strokeWeight(1);
    buffer.line(random(5), random(5), random(5), random(5));
    buffer.ellipse(0, 0, random(5), random(5));

    shapes.push({
      pattern: createPattern(buffer),
      w: w,
      speed: random(100, 1000),
    });
    w -= 25;
  }
}

function draw() {
  backgroundPattern(shapes[0].pattern);

  for (let s of shapes) {
    fillPattern(s.pattern);
    noStroke();
    push();
    translate(width / 2, height / 2);
    rotate(frameCount / s.speed);
    ellipse(0, 0, s.w, s.w);
    pop();
  }
}
