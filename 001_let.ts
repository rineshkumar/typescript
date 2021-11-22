const isDone : boolean = false;
const decimalNumber : number = 10 ; 
//const bigNumber  : bigint = 100n;
const binaryNumber : number = 0b100;
const octalNumber : number = 0o777;
const hexaNumber : number = 0xabcd;

const simpleString : string = "Hello World";
const interpolatedString : string = `${simpleString} to rinesh`;

const numberArray : number[] = [1,2,3,4,5];
const NumberArray2 :Array<number> = [1,2,3,4,5]

const tupleVariable : [number,string] = [100, "Rinesh"];

enum Color { RED,BLUE,GREEN}
const greenColor : Color = Color.GREEN;
const redColor : string = Color[0];


let unknownVariable : unknown = "Hello";
unknownVariable = 10 ; 
unknownVariable = false ; 

declare function sayHello(): any;