// constante //

const fs = require('fs')
const path = require('path')

// .ex01 //

function duplicate(filename) {
    fs.createReadStream(filename).pipe(fs.createWriteStream(path.parse(filename).name + '.copy' + path.parse(filename).ext))
}

// .ex02 //

function transform(filename, re, fn) {
    fs.readFile(filename, 'utf-8', function() {
        
    }
}

// function export //

module.exports = { duplicate, transform }