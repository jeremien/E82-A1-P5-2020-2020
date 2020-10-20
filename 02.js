function setup() {
  createCanvas(500,500)
  background('black')
  stroke('white')
  for (let x = 0; x < width; x = x + 10) {
    for (let y = 0; y < height; y = y + 20) {
      line(0, x, width, x)
      line(y, 0, y, height)
    }
  }
}
