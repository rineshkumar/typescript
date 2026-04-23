# Ecma Script

**Version ES6 / 2015**

[Reference Tutorial](https://www.javascripttutorial.net/es6/)

**let : block scoped variable**
>let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x); // 20:  reference x inside the block
}
console.log(x); // 10: reference at the begining of the script

