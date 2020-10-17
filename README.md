# p5.polyomino.js

[p5.js](https://p5js.org/) library to create, draw and handle [polyominos](https://en.wikipedia.org/wiki/Polyomino).

## Polyomino p5.js functions

A polyomino is created from a 2D _shape_ array which may contain any combination of [p5 colors](https://p5js.org/reference/#/p5.Color), chars and [emojis](https://emojipedia.org/), using the `createPolyomino` command:

```js
const ROWS = 20;
const COLS = 10;
const LENGTH = 20;
var polyomino;

function setup() {
  createCanvas(COLS * LENGTH, ROWS * LENGTH);
  polyomino = createPolyomino([[color('cyan'), '👽',             0    ],
                               [0,             '🤔',            '🙈' ],
                               [0,             color('#770811'), 0   ],
                               ['g',           'o',             'l'  ]
                              ]);
}
```

Use `drawPolyomino(polyomino, row, col)` to draw the polyomino:

```js
function draw() {
  background('#060621');
  // the last three params are optional and they set the polyomino
  // length, strokeWeight and stroke visual properties
  drawPolyomino(polyomino, 2, 4, LENGTH, 2, 'green');
}
```

See [this example](https://github.com/nakednous/p5.polyomino.js/blob/master/examples/glyphs/sketch.js).

## Polyomino methods

The `reflect()` and `rotate()` transforms the polyomino.

```js
function keyPressed() {
  if (keyCode === UP_ARROW) {
    polyomino.reflect();
  } else if (keyCode === DOWN_ARROW) {
    polyomino.rotate();
  }
}
```

See the same above [example](https://github.com/nakednous/p5.polyomino.js/blob/master/examples/glyphs/sketch.js).

The `shape` property to set (get) the polyomino shape array.

The `update(memory2D, x, y)` method checks collisions against the `memory2D` array, without modifying it. It throws 'No row' and 'Out-of-bounds' memory2D reading exceptions and returns a `{ buffer, memoryHitCounter }` object literal, where `buffer` is a copy of the `memory2D` array after adding the polyomino at position `(x, y)` and `memoryHitCounter` counts the `memory2D` number of cells hit by the polyomino.