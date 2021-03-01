let returnSameNumber = (input : number ) :  number =>
{
    return input
}

console.log(returnSameNumber(10));
//Looing at the signature we can say that its going to take any and return any 
//Consumer of the method will know whats he sending , but will not know what he will get in return . 
//Even though method will not throw error, Consumer will not know how to consume the output and can cause casting issues. 

let returnSameOfAnyType = (input : any ) : any => {
    return input
}

console.log(returnSameOfAnyType(10));
console.log(returnSameOfAnyType("hello"));
console.log(returnSameOfAnyType(true));
console.log(returnSameOfAnyType(null));
console.log(returnSameOfAnyType(undefined));
//any can be assigned to variable of any type 
let numberVariable : number = returnSameOfAnyType(true);
console.log(numberVariable+1); // Will return 2 at run time.
//We should be able to metion type of input and output in the method. 
let returnSameValueOfSpecificType = <T>(input:T) : T => {
    return input;
}

//let strVariable2 : string = returnSameValueOfSpecificType(10); //Type 'number' is not assignable to type 'string' error

interface GenericInterface<T> {
    (input : T ) : T;
}
let numImpl : GenericInterface<number> = (input : number) : number => {return input * input };
let strImpl : GenericInterface<string> = (input : string ) : string => {return input +" "+input}
console.log(numImpl(10));
console.log(strImpl("Rinesh"));

class GenericClass<T>{
    value1 : T ;
    value2 : T ; 
    constructor(firstValue : T, secondValue : T){
        this.value1 = firstValue;
        this.value2 = secondValue;
    }
    ShowDetails = () =>{
        console.log(`First value = ${this.value1} , second value = ${this.value2}`)
    }
}

let genericStringClass : GenericClass<string> = new  GenericClass<string>("Rinesh", "Kumar");
genericStringClass.ShowDetails();

let genericNumericClass : GenericClass<number> = new GenericClass<number>(10,20);
genericNumericClass.ShowDetails();

//Generic Constraints 
let mergeObjects = <U extends object,V extends object>(object1 : U,object2 : V)=> {
    return {...object1,...object2};
}
console.log(mergeObjects({key :10 }, {value : "Rinesh"}));
// console.log(mergeObjects({key :10 },10 )); // Will throw error 

let getValue = <T, K extends keyof T >(input: T , key : K) =>{
    return input[key];
}

let table = {name : "Rinesh"};


console.log(getValue(table,'name'));
