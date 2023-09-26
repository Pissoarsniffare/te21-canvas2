export default class Rectangle {
  constructor(x, y, width, height, color) {
    this.x = x
    this.y = y
    this.speed = 5
    this.width = width
    this.height = height
    this.color = color
  }

  update(canvas) {
    if (this.x = this.width > canvas.width || this < 0) {
      this.speed += -1
    }
    this.x += this.speed
  }

  draw(content) {
    context.fillStyle = this.color
    context.fillRect(this.x, this.y, this.width, this.height)
  }
}
