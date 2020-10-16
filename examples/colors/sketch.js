const ROWS = 20;
const COLS = 10;
const LENGTH = 20;
var a = '#ff007d';
var b = '#229b32';
var c = '#007acc';
var d = '#b58900';
var e = '#770811';
var f = '#f40202';
var g = '#fdf6e3';
var polyomino;

function setup() {
  createCanvas(COLS * LENGTH, ROWS * LENGTH);
  polyomino = createPolyomino([[color(a), color(b), 0       ],
                               [0,        color(c), color(d)],
                               [0,        color(e), 0       ],
                               [0,        color(f), 0       ],
                               [0,        color(g), 0       ]
                              ]);
}

function draw() {
  background('#060621');
  drawPolyomino(polyomino, 2, 4, LENGTH, 2, 'yellow');
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    polyomino.reflect();
  } else if (keyCode === DOWN_ARROW) {
    polyomino.rotate();
  }
}

function debugPolyomino(polyomino) {
  console.log(polyomino.shape);
}