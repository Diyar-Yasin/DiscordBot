const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
// Gives you the exact URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname
// The difference between this and Host is that hostname does not get the port
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized Query
console.log(myUrl.search);

// Params Object
console.log(myUrl.searchParams);

// Add Param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through Params
// Gives us each key-value pair
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));