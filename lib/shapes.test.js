const { Shape, Triangle, Circle, Square } = require('./shapes')

describe('Shape', () => {
    describe('Triangle', () => {
        it('should create an SVG of a Triangle with a fill color of Green', () => {
            const shape = new Triangle();
            const color = shape.render("Green")
            
            expect(color).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="Green" />`)
        })
    })
    describe('Circle', () => {
        it('should create an SVG of a Circle with a fill color of Blue', () => {
            const shape = new Circle();
            const color = shape.render("Blue")
            
            expect(color).toEqual(`<circle cx="150" cy="100" r="80" fill="Blue" />`)
        })
    })
    describe('Square', () => {
        it('should create an SVG of a Square with a fill color of Red', () => {
            const shape = new Square();
            const color = shape.render("Red")
            
            expect(color).toEqual(`<rect width="200" height="200" fill="Red" />`)
        })
    })
})