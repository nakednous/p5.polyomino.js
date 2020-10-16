const ROWS = 20;
const COLS = 10;
const LENGTH = 20;
var a = 'a';
var b = 'b';
var c = 'c';
var d = 'd';
var e = 'e';
var f = 'f';
var g = 'g';
var polyomino;

function setup() {
  createCanvas(COLS * LENGTH, ROWS * LENGTH);
  polyomino = createPolyomino([[a, b, 0],
                               [0, c, d],
                               [0, e, 0]
                              ]);
}

function draw() {
  background('#060621');
  drawPolyomino(polyomino, 2, 4, LENGTH, 2, 'magenta');
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