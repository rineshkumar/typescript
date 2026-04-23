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

### JavaScript const and Objects ###

After an object is assigned to a variable, it **cannot be reassigned** another object

const person = { age: 20 };  
person.age = 30; // OK  
console.log(person.age); // 30  

person = { age: 40 }; // TypeError  

### Using Object.freeze() ###
For making value of the object immutable

const person = Object.freeze({age: 20});  
person.age = 30; // TypeError

### const with arrays ###

Cannot be reassigned 

const colors = ['red'];  
colors.push('green');  
console.log(colors); // ["red", "green"]  

colors.pop();  
colors.pop();  
console.log(colors); // []  

colors = []; // TypeError  

### const in for loop ###

If we dont want to modify the value of an element from an iterable object (arrays, sets, maps) we can use const 

let scores = [75, 80, 95];  
for (const score of scores) {  
    console.log(score);  
}  






