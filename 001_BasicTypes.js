//Boolean 
var isNumber;
//Numbers 
var decimalNumber = 10.00;
var binaryNumber = 8;
var octalNumber = 466;
var hexaNumber = 0xf00d;
//Strings
var stringVariable = "Test String";
stringVariable = "Test String 2 ";
//template string
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
console.log(sentence);
//Array 
var numberArray1 = [1, 2, 3, 4, 5];
var numberArray2 = [6, 7, 8, 9, 10];
//of in for loop returns data
for (var _i = 0, numberArray1_1 = numberArray1; _i < numberArray1_1.length; _i++) {
    var i = numberArray1_1[_i];
    console.log(i);
}
for (var key in numberArray2) {
    if (numberArray2.hasOwnProperty(key)) {
        var element = numberArray2[key];
        console.log(key + " " + element);
    }
}
//Tuples 
var tupleVariable;
tupleVariable = ["Rinesh", 10];
//Accessing name from tuple 
console.log(tupleVariable[0]);
console.log(tupleVariable[1]);
