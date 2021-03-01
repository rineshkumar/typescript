//Union Types - Create a type with common member from constituent types 


interface Type1 {
    commonMethod():void
}

interface Type2{
    commonMethod():void;
}

let getType = () : Type1|Type2 =>{
    

    type CommonMemberType = Type1 | Type2;

    let commonMemberType : CommonMemberType = {
        commonMethod : () => {console.log("Message from a union type ")}
    }
    return commonMemberType

}

let a = getType();

console.log(a.commonMethod());

//Interstection Types 
// Create a type with all members from constituent types. 
interface ICommonInterface
{
    commonMessage : string 
}

interface ISomeOtherInterface{
    specificMessage : string
}

type SomeType = ISomeOtherInterface & ICommonInterface;


let someType : SomeType = {
    commonMessage : "Common Message ",
    specificMessage : "Specific Message "
}

console.log(someType.commonMessage);
console.log(someType.specificMessage);

