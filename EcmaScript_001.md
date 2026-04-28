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

## Octal and Binary Literals in ES6

In ES5 we used   

prefix 0 for octal   

no prefix for decimal   

prefix 0X for hexadecimal  

let a = 051;  
console.log(a); // 41  

in ES6 we use 0o for octal  

 let c = 0o51;  
console.log(c); // 41 

### Binary Literals

in ES6 we use 0b  

let f = 0b111;  
console.log(f); // 7  

## Template Literals

**makes working with a string template easier**

create a template literal by wrapping your text in backticks (`)

> let simple = This is a template literal;

let str = Template literal in ES6;  

console.log(str);// Template literal in ES6  
console.log(str.length); // 23  
console.log(typeof str);// string  

We can use single and double quote without escaping 

let anotherStr = \`Here's a template literal\`;

escape back tick if its there  
let strWithBacktick = \`Template literals use backticks \\\` insead of quotes\`;

### multiline strings ###

OLD WAY -- use string concatenation with join method 

let msg = ['This text',  
         'can',  
         'span multiple lines'].join('\n');  

Using ES6 

let p = \`This text  
can  
span multiple lines\`;  


### Variable and expression substitutions ###

This is done using ${}

let firstName = 'John',  
    lastName = 'Doe';  

let greeting = \`Hi ${firstName}, ${lastName}\`;  
console.log(greeting); // Hi John, Doe  


let price = 8.99,  
    tax = 0.1;  

let netPrice = \`Net Price:$${(price * (1 + tax)).toFixed(2)}\`;  

console.log(netPrice); // netPrice:$9.89  



## ES6 Destructuring Assignment ##

**Allows you to destructure an array into individual variables.**

### Destructuring arrays ###
function getScores() {  
  return [70, 80, 90];  
}  

let [x, y, z] = getScores();destructuring arrays   

console.log({ x, y, z });//Creating an object using variables  

#### Destructuring arrays with Rest parameters ####

function getScores() {  
  return [70, 80, 90, 100];  
}  

let [x, y, ...args] = getScores();  

console.log({ x, y, args });  

#### Destructuring arrays to variables ####

let a, b;  
[a, b] = [10, 20];  

console.log({ a, b });  

#### setting default values ####

function getItems() {  
  return [10, 20];  
}  

let [, , thirdItem = 0] = getItems();  
console.log(thirdItem); // 0  

let a, b;  
[a = 1, b = 2] = [10];  
console.log(a); // 10  
console.log(b); // 2  

in case function getitems returns null , we can use 

let [a,b,c] = getItems() || [];  

### Nested array destructuring ###

function getProfile() {  
    return [  
        'John',  
        'Doe',
        ['Red', 'Green', 'Blue']  
    ];  
}  

let [ 
    firstName, 
    lastName, 
    [ 
        color1, 
        color2, 
        color3 
    ] 
] = getProfile();

console.log(color1, color2, color3);

### Array Destructuring Assignment Applications ###

#### Swapping variables ####

let a = 10,  
    b = 20;  

[a, b] = [b, a];  

console.log(a); // 20  
console.log(b); // 10  

#### Functions that return multiple values ####
function stat(a, b) {  
    return [  
        a + b,  
        (a + b) / 2,  
        a - b  
    ]  
}  

let [sum, average, difference] = stat(20, 10);  
console.log(sum, average, difference); // 30, 15, 10  

## JavaScript Object Destructuring ##

**Assigns properties of an object to individual variables**

let person = {  
    firstName: 'John',  
    lastName: 'Doe'  
};  

let { firstName, lastName } = person;  

console.log(firstName); // 'John'  
console.log(lastName); // 'Doe'  

### Default values ###
let { firstName, lastName, middleName = '', currentAge: age = 18 } = person;  
console.log(middleName); // ''
console.log(age); // 18

### handling null objects ###

if getPerson can return null we can handle as follows 

let { firstName, lastName } = getPerson() || {};  

### Nested object destructuring ###
let employee = {  
    id: 1001,  
    name: {  
        firstName: 'John',  
        lastName: 'Doe'  
    }  
};  

let { 
    name: { 
        firstName, 
        lastName 
    } 
} = employee; 

console.log(firstName); // John  
console.log(lastName); // Doe  
console.log(name); // { firstName: 'John', lastName: 'Doe' }  


### Destructuring function arguments ###

let display = ({firstName, lastName}) => console.log(\`${firstName} ${lastName}\`);  

let person = {  
    firstName: 'John',  
    lastName: 'Doe'  
};  

display(person);  





