//Boolean 
let isNumber : false ;
//Numbers 
let decimalNumber : number = 10.00;
let binaryNumber : number = 0b1000;
let octalNumber : number = 0o722;
let hexaNumber : number = 0xf00d;

//Strings
let stringVariable : string = "Test String";
stringVariable = "Test String 2 ";

//template string
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;

console.log(sentence);


//Array 
let numberArray1: number[] = [1,2,3,4,5]
let numberArray2: Array<number> = [6,7,8,9,10]
// for...of loop return value 
for (const i of numberArray1) {
    console.log(i);
} 
// for .. in return key 
for (const key in numberArray2) {
    if (numberArray2.hasOwnProperty(key)) { //hasOwnProperty is a method in Object to check if object has the property 
        const element = numberArray2[key];
        console.log(key +" "+element)
    }
}

//Tuples 
let tupleVariable : [string, number];
tupleVariable = ["Rinesh",10];
//Accessing name from tuple 
console.log(tupleVariable[0]);
console.log(tupleVariable[1]);

