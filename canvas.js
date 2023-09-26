import Rectangle from './Rectangle.js'

export function setup(element) {
    const width = 800
    const height = 600
    const canvas = element.querySelector('#test')
    const context = canvas.getContext('2d')
    canvas.width = width
    canvas.height = height

    const rectangle = new Rectangle(1, 0, 200, 200, 'red')

    window.addEventListener('keydown', (event) => {
        if (event.key === '+') {
            rectangle.increaseSpeed();
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === '-') {
            rectangle.decreaseSpeed();
        }
    });

    function step() {
        context.clearRect(0, 0, width, height)
        rectangle.update(canvas)
        rectangle.draw(context)
        requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
}