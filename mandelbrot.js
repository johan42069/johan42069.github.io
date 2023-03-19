class Complex {
  // (same code as before)
}

function mandelbrot(c, maxIter) {
  // (same code as before)
}

function drawMandelbrot(xmin, xmax, ymin, ymax, maxIter, canvas) {
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;

  // (rest of the code as before)
}

function resizeCanvas() {
  const canvas = document.getElementById('mandelbrotCanvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawMandelbrot(xmin, xmax, ymin, ymax, maxIter, canvas);
}

let xmin = -2;
let xmax = 1;
let ymin = -1.5;
let ymax = 1.5;
const maxIterInput = document.getElementById('iterations');
let maxIter = parseInt(maxIterInput.value, 10);
const canvas = document.getElementById('mandelbrotCanvas');
const resetButton = document.getElementById('reset');

resizeCanvas();

window.addEventListener('resize', resizeCanvas);

canvas.addEventListener('click', (event) => {
  // (same code as before)
});

maxIterInput.addEventListener('change', () => {
  // (same code as before)
});

resetButton.addEventListener('click', () => {
  xmin = -2;
  xmax = 1;
  ymin = -1.5;
  ymax = 1.5;
  resizeCanvas();
});

// ... (resten av koden forblir uendret)

function initialize() {
  resizeCanvas();
  drawMandelbrot(xmin, xmax, ymin, ymax, maxIter, canvas);
}

// Eksporter initialize-funksjonen for å kunne kalle den fra HTML-filen
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initialize };
}
