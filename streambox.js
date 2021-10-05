// constante //

const fs = require('fs')
const path = require('path')

// .ex01 //

function duplicate(filename) {
    fs.createReadStream(filename).pipe(fs.createWriteStream(path.parse(filename).name + '.copy' + path.parse(filename).ext))
}

// function export //

module.exports = { duplicate }