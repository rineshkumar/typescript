/**
 * Types 
 * boolean, number, string 
 * array, tuple 
 * enum
 * unknown, any 
 * never 
 */
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
let anyVariable : any ; 
//both allowed 
// anyVariable.length; 
// anyVariable.sayHi();

declare function noReturns():void ; 

let u : undefined = undefined;
let n : null = null ; 

declare function noReturn() : never ; 

declare function objectInput(o:Object) : void; 

let someValue : unknown = "Hello World";
let someValueLength : number = (someValue as string).length;
someValueLength = (<string>someValue).length;

interface IPerson { // structure 
    firstName : string,
    birthDay : Date,
    numberOfSiblings : number,
    readonly isMarried : boolean, // used for properties. 
    optionalProperty? : string, // not compulsory 

}
//const used for variables.
const person : IPerson = {birthDay : new Date(), firstName : "Rinesh", numberOfSiblings : 1 , isMarried : true}

//function with name 
function sum(a:number,b:number) : number{
    return a+b;
}
//function without name : anonymous
let functionWoName = function(a : number , b : number ){
    return a + b ; 
}
//declaring function type 
let addFunction : (a : number , b : number ) => number = (a : number ,b : number ) => a + b ; 
let productFunction : (a : number , b : number ) => number = (a:number, b : number ) => a * b ;
let addNumbers = (a: number, b : number) : number=>{
    return a + b ; 
}
//function with optional parameters
let functionWithOptionalParameters = (a : number , b? : number) => {
    return !!b ? a + b : a  ; 
}
//function with default parameters 
let functionWithDefaultParameters = (a : number , b : number = 10) => a + b ;
//function with rest parameters
let functionWithRestParameters = (...numbers : Array<number>) => {
    let sum : number = 0 ; 
    numbers.forEach(element => {
        sum+= element
    });
}
// on the fly type 
let ontheFlyObject : { firstName : string , dob : Date } = {dob : new Date(),firstName : "Rinesh"};
//union type - string 
type TrafficSignal = "Red" | "yellow" | "Green";
let signal : TrafficSignal = "Red";
//union type - number 
type DiceNumber = 1 | 2 | 3 | 4 | 5 | 6 ;
let diceNumber : DiceNumber = 6 ;

//union type : mixed 
type MixedType = boolean | string | number;
let mixedType  : MixedType = true;

//uniontype : interfaces
interface TwoWheeler{
    twoWheelerMethod()  : void ;
    goFroward() : void ;
}
interface FourWheeler {
    fourWheelerMethod() : void ; 
    goFroward() : void ;
}

let vehicle : TwoWheeler | FourWheeler  = {goFroward : ()=>{},fourWheelerMethod : ()=>{} , twoWheelerMethod : ()=>{}}; 
vehicle.goFroward();
// not allowed as not common in both interfaces 
//vehicle.fourWheelerMethod();
//vehicle.twoWheelerMethod();

//intersecion type : interfaces
let vehicle2 : TwoWheeler & FourWheeler = {fourWheelerMethod : ()=>{},goFroward:()=>{},twoWheelerMethod:()=>{}}
//all allowed
vehicle2.fourWheelerMethod();
vehicle2.twoWheelerMethod();
vehicle2.goFroward();

//class
class MyClass{
    constructor(public myproperty:string){}
    public myFunction = ()=>{};
}

let myClass : MyClass = new    MyClass("Test");


class BaseClass{
    constructor(public baseProperty : String){}
}
class DerivedClass extends BaseClass{
    constructor(public baseProperty : string , public derivedProperty : string){
        super(baseProperty)

    }
    get derivedPropertyy() : string{
        return this.derivedProperty;
    }
}

let derivedObject : DerivedClass = new DerivedClass("Base " , "Derived");
//derivedObject.derivedProperty
//derivedObject.baseProperty

//enum 
enum Directions{
    EAST,
    WEST,
    NORTH,
    SOUTH
}
//Generic functions
let genericEchoFunction = <T>(input : T ) => input  
genericEchoFunction<string>("Rinesh");
///Generic Class 
class Stack<T>{
    private items : Array<T> = new Array<T>();
    public push(item : T) : void {
        this.items.push(item);
    }
    public pop() : T | undefined{
        return this.items.pop();
    }
}

let stringStack : Stack<string> = new   Stack<string>();
stringStack.push("Hello ");
stringStack.pop();
let numberStack : Stack<number> = new Stack<number>();
numberStack.push(10);
numberStack.pop();
//generic interface
interface genericEchoInterface<T>{
    (input : T) : T
}
let echoStringImpl : genericEchoInterface<string> = (input : string ) => input;

