const fs = require('fs');
const path = require('path');

// Create folder
// Syntax note: you dont need to write function you can just say
// (err) => {}; and since you have 1 parameter the parantheses are useless too:
// err => {};
// Original: function(err){ };
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
if (err) throw err;
console.log('Folder created...');
});

//  You can use a function called open to create a file, if you want to create + write to a file 
//	immediately the write function will auto create a file for you.

// Create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!' {}, err => {
if (err) throw err;
console.log('File written to...');
});