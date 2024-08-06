//JavaScript is synchronous.
//Execute the code block in orger after hoisting.
//hoisting: var, function declaration
console.log(1);
setTimeout (() => console.log(2), 1000);
console.log(3);