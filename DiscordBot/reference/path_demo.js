// This gives you the path module, which does not need a path since it comes
// directly with node.js
// https://nodejs.org/dist/latest-v14.x/docs/api/path.html
const path = require('path');

// Base file name
// If you wrap __filename in this function it will give you just the file name
//	without the directory.
console.log(path.basename(__filename));

// Directory name
// Wrapping __filename in this function will give you just the directory without the
//	file name.
console.log(path.dirname(__filename));

// File extension
// Gives the extension of the file
console.log(path.extname(__filename));

// Create path object
// This creates an object containing different elements such as root, dir, base,
// etc. 
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

// Concatenate paths
// This creates a directory by combining the below. It can be useful because it
//	automatically puts in the forward/backslash needed (since it differs b/w mac
//	and windows).
console.log(path.join(__dirname, 'test', 'hello.html'));