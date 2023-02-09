const fs = require('fs');
const { resolve } = require('path');

const fileReadCallback = (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
}

fs.readFile(resolve(__dirname, 'notes.txt'), 'utf8', fileReadCallback);