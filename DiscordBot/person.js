/* const person = {
	name: 'John Doe',
	age: 30
};

module.exports = person; */

// Module Wrapper Function, this is wrapped around the entire .js file and allows
// us to use the below functions as module.whatever
// (function (exports, require, module, __filename, __dirname){

// })
// Example:
// console.log(__dirname, __filename);

class Person{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	greeting(){
		console.log(`My name is ${this.name} and I am ${this.age}`)
	}
}

module.exports = Person;

console.log('this is a test');