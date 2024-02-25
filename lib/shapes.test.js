const { Shape, Triangle, Circle, Square } = require('./shapes')

describe('Shape', () => {
    // First 3 tests are variants of example test from challenge
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
    //last tests the makeLogo part of class
    describe('Triangle', () => {
        it('should create a logo SVG for a Triangle with specified properties', () => {
            const shape = new Triangle("Green", "Black", "MyTriangleText");
            const logo = shape.makeLogo();
            
            expect(logo).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="Green" />
            <text x="50%" y="50%" fill="Black" text-anchor="middle" alignment-baseline="middle">MyTriangleText</text>`);
        });
    });
})