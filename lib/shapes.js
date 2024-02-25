class Shape {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor
        this.textColor = textColor
        this.text = text
    }
}

class Triangle extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text);
    }

    render(color) {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`
    }

    makeLogo() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
            <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>`;
    }
}

class Circle extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text)
    }

    render(color) {
        return `<circle cx="150" cy="100" r="80" fill="${color}" />`
    }
    
    makeLogo() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
                <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>`;
    }
}

class Square extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text)
    }

    render(color) {
        return `<rect width="200" height="200" fill="${color}" />`
    }
   
    makeLogo() {
        return `<rect width="200" height="200" fill="${this.shapeColor}" />
                <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>`;
    }
}

module.exports = { Shape, Triangle, Circle, Square };