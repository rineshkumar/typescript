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


## Spread Operator ##
**spreads out elements of an iterable object.**

const odd = [1,3,5];
const combined = [2,4,6, ...odd];
console.log(combined);

[ 2, 4, 6, 1, 3, 5 ]

### difference between spread and rest operator ###

spread operator (...) unpacks the elements of an iterable object.
rest parameter (...) packs the elements into an array.


