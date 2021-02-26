//Partial is for patching 
interface FullObject {
    firstProperty: string
    secondProperty: string
}

let updateFullObject = (fullObject: FullObject, partialObject: Partial<FullObject>): FullObject => {
    return { ...fullObject, ...partialObject }
}

let fullObject: FullObject = { firstProperty: "Rinesh", secondProperty: "Kr" };

let updatedFullObject = updateFullObject(fullObject, { secondProperty: "Kumar" });

console.log(updatedFullObject.secondProperty);


///------------------------------------------------
//Require - Enforces that all properties should be available 

interface OptionalProperties {
    firstProperty?: string;
    secondProperty?: string;
}


let objectWithOptionalProperties: OptionalProperties = {
    firstProperty: "Rinesh"
}


// const requiredObject2: Required<OptionalProperties> =  { // Will throw error as secondProperty is commented
//     firstProperty : "Rinesh",
//     //secondProperty : "Kumar"
// };


//Readonly - Making properties read only 

let fullObject2: FullObject = { firstProperty: "Rinesh", secondProperty: "Kumar" };
let fullObjectReadOnly: Readonly<FullObject> = fullObject2;
//fullObjectReadOnly.firstProperty="Readonly ";//Will throw error. 

//Record for key and values.


type ObjectType = "first" | "second" | "third";

let fullObjects: Record<ObjectType, FullObject> = {
    first: { firstProperty: "first", secondProperty: "" },
    second: { firstProperty: "second", secondProperty: "" },
    third: { firstProperty: "third", secondProperty: "" }

}

// Pick<Type,"P1|P2|..">Creating a new type by existing type by picking properties. 

//let halfObject: Pick<FullObject, "firstProperty"> = { secondProperty: "Rinesh" };//error as second property not in new type 
let halfObject: Pick<FullObject, "firstProperty"> = { firstProperty: "Rinesh" };
//Omit<Type,"P1|P2|...">
//let halfObject2 : Omit<FullObject,"firstProperty"> = {firstProperty : "Rinesh"}//Error : firstProperty removed in new type 
let halfObject2 : Omit<FullObject,"firstProperty"> = {secondProperty : "Rinesh"}

