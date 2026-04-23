# Ecma Script

**Version ES6 / 2015**

[Reference Tutorial](https://www.javascripttutorial.net/es6/)

## let : block scoped variable ##

let x = 10;  
if (x == 10) {    
    let x = 20;    
    console.log(x); // 20:  reference x inside the block    
}    
console.log(x); // 10: reference at the begining of the script  

## const : Declaring constants ##

**const CONSTANT_NAME = value;**

variables declared by the const keyword *can’t be reassigned*
you **need to initialize** the value to the variable

### JavaScript const and Objects ###

const keyword ensures that once an object is assigned to a variable, another object cannot be assigned to it. 

const person = { age: 20 };  
person.age = 30; // OK  
console.log(person.age); // 30  

person = { age: 40 }; // TypeError  
