// /**
//  * TODO:
//  * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
//  * menggunakan teknik readable stream dan writable stream.
//  */
//
// const fs = require('fs');
//
// const writeableStream = fs.createWriteStream('./stream/output.txt');
//
// writeableStream.write('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n');
// writeableStream.write('do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n');
// writeableStream.write('Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n');
// writeableStream.write('Duis aute irure dolor in\n');
// writeableStream.write('in reprehenderit\n');
// writeableStream.write('in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n');
// writeableStream.write('Excepteur sint occaecat cupidatat non proident, sunt.\n');
// writeableStream.end('in culpa qui officia deserunt mollit anim id est laborum.\n');
//


const fs = require('fs');
const { resolve } = require('path');

const readableStream = fs.createReadStream(resolve(__dirname, 'input.txt'), {
    highWaterMark: 15,
});

const writableStream = fs.createWriteStream(resolve(__dirname, 'output.txt'));

readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`);
    } catch (error) {
        // catch the error when the chunk cannot be read.
    }
});

readableStream.on('end', () => {
    writableStream.end();
});