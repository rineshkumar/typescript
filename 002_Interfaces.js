//Define contract
//Focus on the shape of value. 
;
var messagePrinter = function (errorMessage) {
    console.log(errorMessage.message);
};
messagePrinter({ message: "Hello World" });
//messagePrinter({m : "H"}); // Throw compile time error not assignable to parameter of type IErrorMessage 
//Sending additonal properties 
var input = { message: "Hello World", unwantedProperty: "useless" };
messagePrinter(input);
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
