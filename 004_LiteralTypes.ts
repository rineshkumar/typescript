//"Hello string is a string " but string is not "Hello string"
//literal types - string , number, boolean 
const constantValue  = "Test  ";
//constantValue = "Test 2 ";//Not allowed 
let changingValue = "test "
changingValue = "test 2 "//allowed

//String literal types and union types 
type state = "not started" | "Doing" | "Done"

//let currentState : state = "SomeOtherState"; // Throws compile time error.
let currentState : state = "Done";

//Numeric literal type 
type evenNumber = 2 | 4 | 6 |8 | 10 ;

//let someNumber : evenNumber = 5 ; // Will throw compile time error 
let someNumber : evenNumber = 10 ; 

// Boolen literal type 
interface IValidationSuccess {
    isValid : true ,
    reason : null
}

interface IValidationFailed {
    isValid : false, 
    reason : string    
}

type validationResult = IValidationSuccess | IValidationFailed

//let someValidationResult : validationResult = {isValid : true , test : 10}; // Will throw error 
let someValidationResult : validationResult = {isValid : false , reason : "Test"};


