//Define contract
//Focus on the shape of value. 
;
var messagePrinter = function (errorMessage) {
    console.log(errorMessage.message);
};
messagePrinter({ message: "Hello World" });
var input = { m: "Hello World", unwantedProperty: "useless" };
//messagePrinter(input); // Throw compile time error not assignable to parameter of type IErrorMessage 
//Sending additonal properties 
var input2 = { message: "Hello World", unwantedProperty: "useless" };
messagePrinter(input2); //We cannot send the object directly 
;
var showPersonDetails = function (personDetails) {
    console.log("Full Name is " + personDetails.firstName + " " + (personDetails.middleName ? personDetails.middleName : "") + " " + personDetails.lastName);
};
showPersonDetails({ firstName: "Rinesh", lastName: "Kumar" });
showPersonDetails({ firstName: "Rinesh", middleName: "D", lastName: "Kumar" });
var immutableDataVariable = { firstData: "Test" };
//immutableDataVariable.firstData = "Other Data ";// Throw error as first data is readonly property
//Read only array 
var someArray = [1, 2, 3, 4];
var readOnlyArray = someArray;
//readOnlyArray[2] = 10 ; // Will throw error saying read only array only permits reading 
var anotherArray = readOnlyArray; // using type assertion 
console.log("Lenght of array = " + anotherArray.length);
anotherArray[1] = 10;
console.log("changed value = " + anotherArray[1]); // Value changed 
console.log("Value in readonly array = " + readOnlyArray[1]); // Value changed 
var addNumber = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};
var result = addNumber(10, 20);
console.log("Sum of  numbers in " + result);
var stringArray = ["a", "b"];
console.log("string indexible type data " + stringArray[0]);
var Clock = /** @class */ (function () {
    function Clock() {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    Clock.prototype.showTime = function () {
        console.log(this.currentTime);
    };
    return Clock;
}());
var clock = new Clock();
clock.setTime(new Date());
clock.showTime();
var square = {};
square.sideLength = 10;
square.color = "Red";
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.showArea = function () {
        console.log(this.sideLength * this.sideLength);
    };
    return Square;
}());
var sq = new Square();
sq.color = "Orange";
sq.sideLength = 25;
sq.showArea();
