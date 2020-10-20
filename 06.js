let left, right;

function setup() {
  createCanvas(400, 400);
  left = createGraphics(width / 2, height)
  right = createGraphics(width / 2, height)
  frameRate(10)
}

function draw() {
  left.background('blue');
  left.textSize(250)
  left.textAlign(RIGHT, CENTER)
  let l = String.fromCharCode(int(random(200)))
  left.text(l, width / 2, height / 2)
  
  right.background('red')
  right.textSize(250)
  right.textAlign(RIGHT, CENTER)
  let r = String.fromCharCode(int(random(5)))
  right.text(r, width / 2, width / 2)
  
  image(left, 0, 0)
  image(right, width/2, 0)
}