const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

function main() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "text",
                message: "Please input up to three characters:",
                validate: value => value.length <= 3,
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter the text color keyword or hexadecimal number:',
            },
            {
                type: 'list',
                name: 'shapeType',
                message: 'Choose a shape for the logo:',
                choices: ['Triangle', 'Circle', 'Square'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter the shape color keyword or hexadecimal number:',
            },
        ])
        .then(data => {
            let shape;
            switch(data.shapeType) {
                case 'Triangle':
                    shape = new Triangle(data.shapeColor, data.textColor, data.text)
                    var html = shape.makeLogo()
                    fs.writeFile("logo.svg", html, (err) => err ? console.log(err) : console.log("File written"))
                        break;

                case 'Circle':
                    shape = new Circle(data.shapeColor, data.textColor, data.text);
                    var html = shape.makeLogo()
                    fs.writeFile("logo.svg", html, (err) => err ? console.log(err) : console.log("File written"))
                    break;

                case 'Square':
                    shape = new Square(data.shapeColor, data.textColor, data.text);
                    var html = shape.makeLogo()
                    fs.writeFile("logo.svg", html, (err) => err ? console.log(err) : console.log("File written"))
                    break;
                default:
                    console.error('Wrong Shape Type')
                    return;
            }
        })
        .then(() => {
            console.log("Created logo.svg")
        })
}

main()