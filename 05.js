let xnoise = 0.0;
let i = 0.05;
let x, y;

function setup() {
  createCanvas(500,500)
  noStroke()
  smooth()
  x = width / 2
  y = height / 2
}

function draw() {
  
  let num = int(random(3))
  
  if (num === 1) {
    x = noise(xnoise) * width
  } else if (num === 2) {
    x = noise(xnoise * 2) * width
  } else {
    y = noise(xnoise) * height
  }
  print(x, y)
  xnoise += i
  
  fill('black')
  ellipse(x, y, 5)
}
