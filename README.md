# p5.polyomino.js

[p5.js](https://p5js.org/) library to create, draw and handle [polyominos](https://en.wikipedia.org/wiki/Polyomino).

## Polyomino p5.js functions

A polyomino is created from a 2D _shape_ array which may contain any combination of [p5 colors](https://p5js.org/reference/#/p5.Color), chars and [emojis](https://emojipedia.org/), using the `createPolyomino` command:

```js
const ROWS = 20;
const COLS = 10;
const LENGTH = 20;
var a = '🙈'
var b = '👽';
var c = '🤔';
var d = '#b58900';
var e = '#770811';
var f = 'f'
var g = 'g'
var h = 'h'
var polyomino;

function setup() {
  createCanvas(COLS * LENGTH, ROWS * LENGTH);
  polyomino = createPolyomino([[a, b,        0],
                               [0, c, color(d)],
                               [0, 0, color(e)],
                               [f, g, h]
                              ]);
}
```

Use `drawPolyomino(polyomino, row, col, LENGTH = 10, outlineWeight = 2, outline = '#e9783d')` to draw the polyomino:

```js
function draw() {
  background('#060621');
  drawPolyomino(polyomino, 2, 4, LENGTH, 2, 'green');
}
```

See [this example](https://github.com/nakednous/p5.polyomino.js/blob/master/examples/mixed/sketch.js).

## Polyomino methods

Use the `reflect()` and `rotate()` polyomino methods to transform it:

```js
function keyPressed() {
  if (keyCode === UP_ARROW) {
    polyomino.reflect();
  } else if (keyCode === DOWN_ARROW) {
    polyomino.rotate();
  }
}
```

Use the polyomino `shape` property ro set /get the polyomino shape array. For instance `console.log(polyomino.shape)` will write to the console the polyomino shape array.

Use the polyomino `update(memory2D, x, y)` to check `memory2D` collisions. 




