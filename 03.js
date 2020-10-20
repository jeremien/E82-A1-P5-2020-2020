// https://unsplash.com/

let img;

function preload () {
  img = loadImage('image.jpg')
}

function setup() {
  createCanvas(500, 500)
}

function draw() {
  for (let x = 0; x < width; x = x + 100) {
    for (let y = 0; y < height; y = y + 100) {
      copy(img, 100, 100, 200, 200, x, y, 100, 100)  
    }
  }
}