function setup() {
  
  createCanvas(500,500)
  
  for (let x = width; x > 0; x = x - 10) {
    rect(0, 0, x)
  }
  
}
