# PatGrad.p5

PatGrad.p5.js a relatively easy way to add patterns and gradients to your p5.js sketches. Read below for brief examples, or see the [examples]() folder.

## Installation

[Download the library]() and add the script tag to your index.html file, after you load in p5:

```html
<script src="p5.patgrad.js"></script>
```

## Patterns

You can create repeating patterns from images or from p5Graphics objects using the `createPattern()` function, and then use them to fill shapes with `fillPattern()`, or stroke shapes with `strokePattern()`.

### Image patterns

To use with images, just load an image and then create a new pattern with `createPattern(img)`.

```javascript
let pattern;
let img;

function preload() {
  img = loadImage("pattern.png");
}

function setup() {
  createCanvas(500, 500);
  pattern = createPattern(img);
}

function draw() {
  background(255);

  fillPattern(pattern);
  ellipse(0, 0, 200, 200);
}
```

### Graphics patterns

You can also create a p5 Graphics object and use that for your pattern.

```javascript
let pattern;

function setup() {
  createCanvas(500, 500);
  let buffer = createGraphics(5, 5);
  buffer.background(255);
  buffer.line(0, 0, 5, 5);
  pattern = createPattern(buffer);
}

function draw() {
  background(255);

  fillPattern(pattern);
  rect(0, 0, 200, 200);
}
```

## Gradients

Use the `createLinearGradient()`, `createRadialGradient()`, or `createConicGradient()` to make gradients, set their colors with the `colors()` function, and then apply them to shapes with `fillGradient()`.

```javascript
let gradient;

function setup() {
  createCanvas(400, 400);
  // create a linear gradient that's angled at 0 radians, and is 200px wide
  gradient = createLinearGradient(0, 200);
  // add some colors
  // at 0% make it lightblue, then at 50% make it pink, and at 100% make it magenta
  gradient.colors(0, "lightblue", 0.5, "pink", 1, "magenta");
}

function draw() {
  background(255);

  fillGradient(gradient);
  rect(0, 0, 200, 200);
}
```

## Caveats

Because of the (perhaps strange) way that the canvas api deals with gradients and patterns, you **must** use `translate()` to position your shapes if they are not located at `(0, 0)`. You also have to call the `fillPattern` and `fillGradient` functions _outside_ of `push` and `pop`. For example, to use a pattern in a shape that follows the mouse:

```javascript
function draw() {
  background(255);

  fillPattern(pattern);

  push();
  translate(mouseX, mouseY);
  rect(0, 0, 200, 200);
  pop();
}
```

## Functions

### `createPattern(patternElement, repeat)`

Creates a pattern, and return a pattern object.

`patternElement`: can either be an image, p5Graphics object, video, or a canvas.

`repeat`: determines how the pattern is repeated. Can either be `"repeat"` (default), `"no-repeat"`, `"repeat-x"` or `"repeat-y"`.

---

### `fillPattern(pattern)`

Sets the fill style to your pattern. Just like the `fill()` function.

---

### `strokePattern(pattern)`

Sets the stroke style to your pattern. Just like the `stroke()` function.

---

### `backgroundPattern(pattern)`

Sets the background to your pattern.

---

### `createLinearGradient(angle, width)`

Creates a linear gradient and returns a gradient object.

`angle`: the angle of the gradient (by default 0, in radians)

`width`: how wide the gradient should be.

---

### `createRadialGradient(innerRadius, outerRadius, x, y)`

Creates a radial gradient and returns a gradient object.

`innerRadius`: the inner radius of the gradient

`outerRadius`: the outer radius of the gradient

`x`: the x position of the gradient (optional)

`y`: the y position of the gradient (optional)

---

### `createConicGradient(angle, x, y)`

Creates a conic gradient and returns a gradient object.

`angle`: the start angle of the gradient

`x`: the x position of the gradient

`y`: the y position of the gradient

---

### `Gradient.colors(position1, color1, position2, color2...)`

Fills a gradient with colors. Takes any number of position (a number from 0 to 1) and color values. You can also call the function multiple times to continue to add colors.

`position`: where the color should start. Must be a number between 0 and 1 where 0 represents 0% and 1 represents 100%.

`color`: a color to start at the position you've selected. Can be a p5 color (using the `color()` function), or anything that's recognizable as a css color (a hex value, a color name, etc).

Example:

```javascript
let gradient = createLinearGradient(0, 100);

// this works
gradient.colors(0, 'red', 1, 'blue')

// so does this
gradient.colors(0, 'red', 0.5, 'blue', 0.75, 'orange', 1, 'magenta`)

// so does this
gradient.colors(0, color(255, 0, 0), 1, color(255, 255, 0));
```

---

### `fillGradient(gradient)`

Sets the fill style to your gradient. Just like the `fill()` function.

---

### `strokeGradient(gradient)`

Sets the stroke style to your gradient. Just like the `stroke()` function.

---

### `backgroundGradient(gradient)`

Sets the background to your gradient.

---
