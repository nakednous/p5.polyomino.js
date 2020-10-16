const ROWS = 20;
const COLS = 10;
const LENGTH = 20;
var tableau;
var enablePolyominoDrawing = true;

var H;

(() => {
  tableau = Array(ROWS);
  for (let i = 0; i < tableau.length; i++) {
    tableau[i] = Array(COLS);
    for (let j = 0; j < tableau[i].length; j++) {
      tableau[i][j] = 0;
    }
  }
})()

function setup() {
  createCanvas(COLS * LENGTH, ROWS * LENGTH);
  var a = color('#ff007d');
  var b = color('#229b32');
  var c = color('#007acc');
  var d = color('#b58900');
  var e = color('#770811');
  var f = color('#f40202');
  var g = color('#fdf6e3');
  H = createPolyomino([[a, b, 0, 0, b, a],
  [c, d, 0, 0, d, c],
  [e, f, a, b, e, f],
  [a, e, b, a, e, a],
  [g, d, 0, 0, d, g],
  [c, f, 0, 0, f, c],
  ]);
}

function draw() {
  background('#060621');
  drawTableau();
  if (enablePolyominoDrawing) {
    drawPolyomino(H, 2, 4, LENGTH, 2, 'blue');
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    H.reflect();
  } else if (keyCode === DOWN_ARROW) {
    H.rotate();
  }
  if (key === 'd') {
    enablePolyominoDrawing = !enablePolyominoDrawing;
  }
}

function drawTableau() {
  for (let i = 0; i < tableau.length; i++) {
    for (let j = 0; j < tableau[i].length; j++) {
      if (tableau[i][j] !== 0) {
        push();
        translate(j * LENGTH, i * LENGTH);
        fill(tableau[i][j]);
        rect(0, 0, LENGTH, LENGTH);
        pop();
      }
    }
  }
}

function update(polyomino, row, col) {
  return polyomino.update(tableau, row, col);
}

function printTableau(entire = false) {
  printMatrix(tableau, entire);
}

function printMatrix(matrix, entire = false) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== 0 || entire) {
        console.log(i, j, matrix[i][j]);
      }
    }
  }
}

function clearTableau() {
  for (let i = 0; i < tableau.length; i++) {
    for (let j = 0; j < tableau[i].length; j++) {
      tableau[i][j] = 0;
    }
  }
}

function debugPolyomino(polyomino) {
  console.log(polyomino.shape);
}