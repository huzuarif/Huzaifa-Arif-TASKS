// Tests for equality and inequality with strings
var fruit = 'apple';
console.log("Is fruit equal to 'apple'? I predict True.");
console.log(fruit == 'apple');
console.log("Is fruit not equal to 'banana'? I predict True.");
console.log(fruit != 'banana');
console.log("Is fruit equal to 'Apple'? I predict False.");
console.log(fruit == 'Apple');
console.log("Is fruit not equal to 'Apple'? I predict True.");
console.log(fruit != 'Apple');
// Tests using the lower case function
var text = 'HELLO';
console.log("Is text lowercase 'hello'? I predict False.");
console.log(text.toLowerCase() == 'hello');
console.log("Is text not lowercase 'hello'? I predict True.");
console.log(text.toLowerCase() != 'hello');
// Numerical tests
var num1 = 10;
var num2 = 5;
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);
console.log("Is num1 less than num2? I predict False.");
console.log(num1 < num2);
console.log("Is num1 greater than or equal to num2? I predict True.");
console.log(num1 >= num2);
console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2);
// Tests using "and" and "or" operators
var x = 5;
var y = 10;
var z = 7;
console.log("Is x less than y and z? I predict True.");
console.log(x < y && x < z);
console.log("Is x greater than y or z? I predict False.");
console.log(x > y || x > z);
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.indexOf('banana') !== -1);
console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.indexOf('grape') !== -1);
var vegetables = ['carrot', 'broccoli', 'spinach'];
console.log("Is 'lettuce' not in the vegetables array? I predict True.");
console.log(vegetables.indexOf('lettuce') === -1);
console.log("Is 'carrot' not in the vegetables array? I predict False.");
console.log(vegetables.indexOf('carrot') === -1);
