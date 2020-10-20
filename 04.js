let symmetry = 30;
let angle = 360 / symmetry;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(220);
  translate(width / 2, height / 2)
  
  let mx = mouseX - width / 2;
  let my = mouseY - height / 2;
  let pmx = pmouseX - width / 2;
  let pmy = pmouseY - height / 2;
  
  for (let i = 0; i < symmetry; i++) {
    rotate(angle)
    line(mx, my, pmx, pmy)
  }
}