//Define contract
//Focus on the shape of value. 

interface IErrorMessage {
    message : string ;
};


let messagePrinter =  (errorMessage : IErrorMessage ): void => {
    console.log(errorMessage.message)
};

messagePrinter({message : "Hello World"});
let input = {m : "Hello World", unwantedProperty : "useless"};
//messagePrinter(input); // Throw compile time error not assignable to parameter of type IErrorMessage 
//Sending additonal properties 
let input2  = {message : "Hello World", unwantedProperty : "useless"};
messagePrinter(input2);//We cannot send the object directly 
//Excess property checks
//Need to do 

// Optional Parameters 

interface PersonDetails {
    firstName : string,
    middleName? : string , 
    lastName : string 
};


let showPersonDetails = (personDetails  : PersonDetails) : void => {
    console.log(`Full Name is ${personDetails.firstName} ${personDetails.middleName ? personDetails.middleName : ""} ${personDetails.lastName}`)
};
showPersonDetails({firstName: "Rinesh", lastName: "Kumar"});
showPersonDetails({firstName: "Rinesh", middleName : "D" , lastName: "Kumar"});

//read only properties 
//readonly is used for properties 
//const is used for variables.
interface ImmutableData {
    readonly firstData : string 
}

let immutableDataVariable : ImmutableData = {firstData : "Test"};
//immutableDataVariable.firstData = "Other Data ";// Throw error as first data is readonly property
//Read only array 
let someArray : Array<number> = [1,2,3,4];
let readOnlyArray : ReadonlyArray<number> = someArray;
//readOnlyArray[2] = 10 ; // Will throw error saying read only array only permits reading 

let anotherArray = readOnlyArray as number[] ;// using type assertion 
console.log(`Lenght of array = ${anotherArray.length}`);
anotherArray[1] = 10 ;
console.log(`changed value = ${anotherArray[1]}`); // Value changed 
console.log(`Value in readonly array = ${readOnlyArray[1]}`);// Value changed 

//function types 
//Shape of a functon 

interface IAdditionFunction{
    (firstNumber : number, secondNumber : number ) : number
}

let addNumber : IAdditionFunction = (firstNumber : number, secondNumber : number ) : number=> {
    return firstNumber + secondNumber
}

let result2 : number = addNumber(10,20);
console.log(`Sum of  numbers in ${result2}`);

//indexable types 
//Shape of a type which can be iterated 

interface StringArray {
    [index:number]: string;
}
let stringArray : StringArray = ["a","b"];
console.log(`string indexible type data ${stringArray[0]}`)

//Class Type 

interface ClockInterface {
    currentTime : Date,
    setTime(d:Date):void,
    showTime():void
}

class Clock implements ClockInterface{
    currentTime: Date;
    setTime(d: Date): void {
        this.currentTime=d;
    }
    showTime():void{
            console.log(this.currentTime)
    }
}

let clock = new Clock();
clock.setTime(new Date());
clock.showTime();

// extending interfaces 

interface IShape {
    color : string  
}

interface ISquare extends IShape{
    sideLength : number,
    showArea() : void

}

let square  = {} as ISquare;
square.sideLength=10;
square.color = "Red";

class Square implements ISquare{
    showArea(): void {
        console.log(this.sideLength * this.sideLength)
    }
    sideLength: number;
    color: string;

}

let sq: Square = new Square();
sq.color = "Orange";
sq.sideLength = 25 ; 
sq.showArea();
