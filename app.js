class Complex {
    constructor(re, im) {
      this.re = re;
      this.im = im;
    }
  
    static add(a, b) {
      return new Complex(a.re + b.re, a.im + b.im);
    }
  
    static multiply(a, b) {
      return new Complex(
        a.re * b.re - a.im * b.im,
        a.re * b.im + a.im * b.re
      );
    }
  
    abs() {
      return Math.sqrt(this.re * this.re + this.im * this.im);
    }
  }
  
  function mandelbrot(c, maxIter) {
    let z = new Complex(0, 0);
    let n = 0;
    while (z.abs() <= 2 && n < maxIter) {
      z = Complex.add(Complex.multiply(z, z), c);
      n++;
    }
    return n;
  }
  
  function drawMandelbrot(xmin, xmax, ymin, ymax, maxIter) {
    const canvas = document.getElementById('mandelbrotCanvas');
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
  
    const imgData = ctx.createImageData(width, height);
  
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        const x = xmin + (xmax - xmin) * i / width;
        const y = ymin + (ymax - ymin) * j / height;
        const c = new Complex(x, y);
        const iter = mandelbrot(c, maxIter);
        const color = iter === maxIter ? 0 : iter;
        const pixelIndex = (i + j * width) * 4;
  
        imgData.data[pixelIndex] = color;
        imgData.data[pixelIndex + 1] = color;
        imgData.data[pixelIndex + 2] = color;
        imgData.data[pixelIndex + 3] = 255;
      }
    }
    ctx.putImageData(imgData, 0, 0);
  }
  
  let xmin = -2;
  let xmax = 1;
  let ymin = -1.5;
  let ymax = 1.5;
  const maxIterInput = document.getElementById('iterations');
  let maxIter = parseInt(maxIterInput.value, 10);
  const canvas = document.getElementById('mandelbrotCanvas');
  const resetButton = document.getElementById('reset');
  
  drawMandelbrot(xmin, xmax, ymin, ymax, maxIter);
  
  canvas.addEventListener('click', (event) => {
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;
    const scaleX = (xmax - xmin) / canvas.width;
    const scaleY = (ymax - ymin) / canvas.height;
  
    const centerX = xmin + x * scaleX;
    const centerY = ymin + y * scaleY;
  
    const zoomFactor = 0.5;
    const newWidth = (xmax - xmin) * zoomFactor;
    const newHeight = (ymax - ymin) * zoomFactor;
  
    xmin = centerX - newWidth / 2;
    xmax = centerX + newWidth / 2;
    ymin = centerY - newHeight / 2;
    ymax = centerY + newHeight / 2;
  
    drawMandelbrot(xmin, xmax, ymin, ymax, maxIter);
  });
  
  maxIterInput.addEventListener('change', () => {
    maxIter = parseInt
  }  )