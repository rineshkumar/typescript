//Named function 

function addNumbers(a:number , b: number ) : number {
    return a + b ;
}
console.log(`Sum of numbers  = ${addNumbers(10,20)}`)

//anonymous function 
let subtractNumber = function(a:number , b : number ) : number {
    return a - b ;
}

console.log(`difference of numbers is ${subtractNumber(20,10)}`);

//Arrow functions 
let multiplyNumber = (a : number, b : number ) : number => {
    return a *  b ; 
};

console.log(`Product of numbers is ${multiplyNumber(10,20)}`)

//Optional Parameters 
let getFullName = (firstName : string , lastName? : string ) : string  => {
    return firstName +" "+(lastName ? lastName : "");
};

console.log(`Full Name is ${getFullName("Rinesh")}`);
console.log(`Full Name is ${getFullName("Rinesh","Kumar")}`);
//Rest Parameters 

 let concatenateAllString = (a:string,b:string,...c:string[]) : string => {
     return a + b + c.join(" ");
 }

 console.log(concatenateAllString("This", "is","test","Data"));
 