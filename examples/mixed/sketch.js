const ROWS = 20;
const COLS = 10;
const LENGTH = 20;
// See:
// https://stackoverflow.com/questions/42315883/in-javascript-can-i-store-emojis-in-an-array-as-arrays-element
// https://emojipedia.org/
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

function draw() {
  background('#060621');
  drawPolyomino(polyomino, 2, 4, LENGTH, 2, 'green');
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