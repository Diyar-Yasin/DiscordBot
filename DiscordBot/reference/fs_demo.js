const fs = require('fs');
const path = require('path');

// Create folder
// Syntax note: you dont need to write function you can just say
// (err) => {}; and since you have 1 parameter the parantheses are useless too:
// err => {};
// Original: function(err){ };
/*fs.mkdir(path.join(__dirname, '/test'), {}, err => {
if (err) throw err;
console.log('Folder created...');
});

//  You can use a function called open to create a file, if you want to create + write to a file 
//	immediately the write function will auto create a file for you.

// Create and write to file
// Note: write OVERWRITES what is in a file, you want to append file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!', err => {
if (err) throw err;
console.log('File written to...');
});

// Append file
fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Cool beans!', err => {
    if (err) throw err;
    console.log('File appended to...');
});
*/
// Read File
//It is reading from hello.txt and the char type is utf8 (without that you will just get a raw buffer instead of the data we want)
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Rename File
// The first parameter is the original file location + old name and the second is the new name and location
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'yeehaw.txt'), (err) => {
    if (err) throw err;
    console.log('File renamed...');
});