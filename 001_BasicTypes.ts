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

//Enumerations 
enum Color
{
    Violet, 
    Indigo,
    Blue,
    Yellow,
    Orange,
    Red
}

let enumObject : Color = Color.Violet;
//Getting string version of enum member 
let colorName : string = Color[0];
console.log(colorName);
//Any variable 
// We can assign value of any type to any variable. 
//We can assign any variable to any type. 
let anyVariable : any ;
anyVariable= true;
anyVariable = 100;
anyVariable = 0o700;
anyVariable=0xfa00;
anyVariable="Test"
anyVariable=[];
anyVariable={};
anyVariable=null;
anyVariable=undefined;

let someString : string = anyVariable; 


//unknown type. 
//Any variable can be assigned to variable of unknown type. 

let unknownVariable : unknown = "unknown"
unknownVariable= true;
unknownVariable = 100;
unknownVariable = 0o700;
unknownVariable=0xfa00;
unknownVariable="Test"
unknownVariable=[];
unknownVariable={};
unknownVariable=null;
unknownVariable=undefined;
//unknown variables cannot be assigned to variables of other types 
//someString = unknownVariable;
anyVariable= unknownVariable;// Allowed 
unknownVariable=anyVariable; // Allowed
//no operation can be perfomed on unknown variable at run time 
//unknownVariable[0] // Throw error at run time - TypeError: Cannot read property '0' of undefined

// We can check the run time type of unknow variable and perform action .
unknownVariable="Test";
if(typeof unknownVariable === "string"){
    console.log(unknownVariable);
}

console.log(typeof unknownVariable)
//Functon in lambda format 
//let functionName = parameterList : returnType => {functionBody};
//void function with no return values 
let voidFunction = () : void => {
    console.log("Hello from function ")
};

voidFunction();
///Function with return values. 
let functionWithReturn = () : number => {
    return Math.random();
};
let result : number = functionWithReturn();
console.log(result);


// Void varaibles. 
let voidVariable : void = null ; // Allowed when --strictnullchecks flag is not used. 
voidVariable = undefined;

let nullVariable : null = null ; // Allowed only if --strictnullchecks not used 
let undefinedVariable : undefined = undefined; // Allowed only if strictnullcheck not used. 

//null and undefined are subtype of all other types. 
let nullString : string = null ; // allowed only if --strictnullchecks is not used. 

///never type 
let functionWithNeverReturn = () : never => {
    throw Error("Will never return ");
};

//functionWithNeverReturn();

let functionWithInfiniteLoopAndNeverReturn = () : never =>  {
    while (true) {
        
    }
};

//functionWithInfiniteLoopAndNeverReturn();

//non primitive types -- boolean, number, string, bigint,