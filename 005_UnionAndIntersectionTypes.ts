//Union Types - Value which can be of multiple types/
// only common members can be accessed 


interface Type1 {
    commonMethod():void
}

interface Type2{
    commonMethod():void;
}

let getType = (choice : number) : Type1|Type2 =>{
    let type1Obbject : Type1;
    let type2Object : Type2;
    return (choice%2 == 0 ? type1Obbject :  type2Object);
}

let a = getType(1);

//a.commonMethod();

//Interstection Types 
// All the members in both the interfaces.
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

