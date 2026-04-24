# Ecma Script

**Version ES6 / 2015**

[Reference Tutorial](https://www.javascripttutorial.net/es6/)

## let : block scoped variable

let x = 10;  
if (x == 10) {  
    let x = 20;  
    console.log(x); // 20:  reference x inside the block  
}  
console.log(x); // 10: reference at the begining of the script  

## const : Declaring constants

**const CONSTANT_NAME = value;**

variables declared by the const keyword *can’t be reassigned*
you **need to initialize** the value to the variable

### JavaScript const and Objects

After an object is assigned to a variable, it **cannot be reassigned** another object

const person = { age: 20 };  
person.age = 30; // OK  
console.log(person.age); // 30  

person = { age: 40 }; // TypeError  

### Using Object.freeze()

For making value of the object immutable

const person = Object.freeze({age: 20});  
person.age = 30; // TypeError

### const with arrays

Cannot be reassigned 

const colors = ['red'];  
colors.push('green');  
console.log(colors); // ["red", "green"]  

colors.pop();  
colors.pop();  
console.log(colors); // []  

colors = []; // TypeError  

### const in for loop

If we dont want to modify the value of an element from an iterable object (arrays, sets, maps) we can use const 

let scores = [75, 80, 95];  
for (const score of scores) {  
    console.log(score);  
}  

## Default function parameters

function say(message='Hi') {  
    console.log(message);  
}  

say(); // 'Hi'  
say(undefined); // 'Hi'  
say('Hello'); // 'Hello'  

if there was no default parameter we would do this 

> message = typeof message !== 'undefined' ? message : 'Hi';

let taxRate = () => 0.1;  
let getPrice = function( price, tax = price * taxRate() ) {  
    return price + tax;  
}  

let fullPrice = getPrice(100);  
console.log(fullPrice); // 110  

### The arguments object

arguments object inside the function is the **number of actual arguments that you pass to the function**

function add(x, y = 1, z = 2) {  
    console.log( arguments.length );  
    return x + y + z;  
}  

add(10); // 1  
add(10, 20); // 2  
add(10, 20, 30); // 3  

## Rest parameters

**gather parameters and put them all in an array**
has a prefix of three dots (...)
must appear at the end of the argument list

function fn(a,b,...args) {  
   //...  
}  

fn(1, 2, 3, "A", "B", "C");
args will be [3,'A','B','C']

fn(1,2);
args will be []

> function sum(...args) {  
>   return args  
>     .filter(function (e) {  
>       return typeof e === 'number';  
>     })  
>     .reduce(function (prev, curr) {  
>       return prev + curr;  
>     });  
> }  

## Spread Operator

**spreads out elements of an iterable object.**

const odd = [1,3,5];
const combined = [2,4,6, ...odd];
console.log(combined);

[ 2, 4, 6, 1, 3, 5 ]

### difference between spread and rest operator

spread operator (...) unpacks the elements of an iterable object.  
rest parameter (...) packs the elements into an array.  

pread operator can be anywhere  
rest parameters must be the last arguments of a function.  

const spreadCombined = [...odd, 2,4,6];  
const spreadCombined = [2,...odd, 4,6];  

### using spread with function

> function compare(a, b) { 
> return a - b; 
> } 

let result = compare(...[1, 2]);  
console.log(result); // -1 

1,2 will be taken from array and assigned to a,b  

### using spread with array push

let rivers = ['Nile', 'Ganges', 'Yangte'];  
let moreRivers = ['Danube', 'Amazon'];  
rivers.push(...moreRivers);   

### using spread with arrays

#### Appending one array elements to another

let initialChars = ['A', 'B'];  
let chars = [...initialChars, 'C', 'D'];  
console.log(chars); // ["A", "B", "C", "D"]  

#### Concatenating arrays to new array

let numbers = [1, 2];  
let moreNumbers = [3, 4];  
let allNumbers = [...numbers, ...moreNumbers];  
console.log(allNumbers); // [1, 2, 3, 4]  

#### Copying array

let scores = [80, 70, 90];  
let copiedScores = [...scores];//Shallow copy  
console.log(copiedScores); // [80, 70, 90]  

### spread operator and strings

#### Spreading to a character array

let chars = ['A', ...'BC', 'D'];  
console.log(chars); // ["A", "B", "C", "D"]  

## Object literal

**for creating objects in JavaScript**

Before ES6  

> function createMachine(name, status) {  
> return {  
>     name: name,  
>     status: status  
> };  
> }  

From ES6  

> function createMachine(name, status) {  
> return {  
>     name,  
>     status  
> };  
> }  

### creating objects with initialization

let name = 'Computer', status = 'On';  

let machine = {  
   name,  
   status  
};  

### Computed property name

These are propery names which change in the same type  
use [] to use computed property names 

Before ES6

let name = 'machine name';  
let machine = {  
    [name]: 'server',//Property name is machine name  
    'machine hours': 10000  
};  

console.log(machine[name]); // server  
console.log(machine['machine hours']); // 10000  

In ES6

In ES6, the computed property name is a part of the object literal syntax

let prefix = 'machine';  
let machine = {  
    [prefix + ' name']: 'server',//Computed property  
    [prefix + ' hours']: 10000//Computed property  
};  

console.log(machine['machine name']); // server  
console.log(machine['machine hours']); // 10000  

### Concise method syntax

**Before ESG**
function was defined as follows  

let server = {  
	name: "Server",  
	restart: function () {//function keyword was used  
		console.log("The" + this.name + " is restarting...");  
	}  
};  

**In ES6**

: function is removed  

let server = {  
    name: 'Server',  
    restart() {//: function removed  
        console.log("The" + this.name + " is restarting...");  
    }  
};  

## for…of Loop

**iterates over an iterable object**

e.g.  Array, Map, String, Set  

for (variable of iterable) {  
   // ...  
}  

### Iterating over arrays

let scores = [80, 90, 70];  

for (let score of scores) {  
    score = score + 5;  
    console.log(score);  
}  

#### access the index of the array elements inside the loop

use entries()  

let colors = ['Red', 'Green', 'Blue'];  

for (const [index, color] of colors.entries()) {  
    console.log(`${color} is at index ${index}`);  
}  

### object destructuring in for…of

 const ratings = [  
    {user: 'John',score: 3},  
    {user: 'Jane',score: 4},  
    {user: 'David',score: 5},  
    {user: 'Peter',score: 2},  
];  

let sum = 0;  
for (const {score} of ratings) {  
    sum += score;  
}  

console.log(`Total scores: ${sum}`); // 14  

use **{propertyName}** for **object destructuring**

### using for..of with string

let str = 'abc';  
for (let c of str) {  
    console.log(c);  
}  

### using for..of with map

let colors = new Map();  

colors.set('red', '#ff0000');  
colors.set('green', '#00ff00');  
colors.set('blue', '#0000ff');  

for (let color of colors) {  
    console.log(color);  
}  

output  

[ 'red', '#ff0000' ]  
[ 'green', '#00ff00' ]  
[ 'blue', '#0000ff' ]  

### for..of with sets

> let nums = new Set([1, 2, 3]);  
> for (let num of nums) {  
>     console.log(num);  
> }  

