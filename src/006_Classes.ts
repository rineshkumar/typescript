//With properties , behaviors , constructors
class SimpleClass{
    message : string;
    constructor(message:string){
        this.message = message;
    }
    showMesssage(){
        console.log(`Hello ${this.message}`)
    }
    showAnonymousMessage = function() {
        console.log("Anonymous function ");
    }
    showArrowMessage = () => {
        console.log("Arrow function ");
    }
}

let sc = new SimpleClass("Rinesh");
sc.showMesssage();
sc.showAnonymousMessage();
sc.showArrowMessage();


//Inheritence 

class SuperClass{
    private superClassProperty : string;
    
    constructor(message : string ){
        this.superClassProperty = message;
    }
    superClassMessage = () =>{
        console.log("Super class property value "+this.superClassProperty)
    }
}

class SubClass extends SuperClass{
    private subClassProperty : string;
    constructor(superClassProperty : string,subClassProperty : string){
        super(superClassProperty);
        this.subClassProperty = subClassProperty;
    }
    subClassMessage = () => {
        console.log("SUb class messsage "+this.subClassProperty)
    }
    superClassMessage = () =>{
        console.log("This is the overloaded superClassMessage function")
    }
}

let subClassObject : SubClass = new SubClass("Super Messsage ", "Sub Message ");

subClassObject.subClassMessage();
subClassObject.superClassMessage();


let superClassObject : SuperClass = subClassObject;

superClassObject.superClassMessage(); //This will still call the over loaded method 

//Protected member behavior 
//Available inside the sub class. 
//Not accessible using a sub class object ex. subclass.superClassProtectedMember
class ClassWithProtectedMember{
    protected protectedMember : string ;
    constructor(message : string){
        this.protectedMember = message;
    }
}

class ClassWithProtectedMemberSubClass extends ClassWithProtectedMember{
    subClassProperty : string;
    constructor(superClassMessage : string , subClassMessage : string){
        super(superClassMessage);
        this.subClassProperty = subClassMessage;
    }
    showAllMessages(){
        ///Protected member is accessible inside the sub class.
        console.log("super class property value"+this.protectedMember);
        console.log("This class property value "+ this.subClassProperty);
    }
}

let obj : ClassWithProtectedMemberSubClass = new  ClassWithProtectedMemberSubClass("Super class message ", "Sub class message ");
obj.showAllMessages();


//Readonly proeprties 
class ClassWithReadOnlyMembers {
    readonly readOnlyMessage : string ;
    readonly readOnlyMessage2 : string = "RO";//Allowed while defining 
    constructor(message : string){
        this.readOnlyMessage = message; // Allowed in constructor
    }
    updateReadOnlyMessage = (message : string ) => {
        //this.readOnlyMessage = message; // Not allowed here
    }
}

let obj2 = new ClassWithReadOnlyMembers("Read only message ");
//obj2.readOnlyMessage = "Test"; // Not allowed this way 

//Encapsulating using private properties and public setters and getters 

class ClassWithAccessors{
    private privateProperty : string ;
    getPrivateProperty = () => {
        return this.privateProperty;
    }
    //Setters can be used for applying custom logic 
    setPrivateProperty= (value : string) => {
        this.privateProperty = value + "_";
        //throw new Error("Error Message ");
    }
}

let obj3 = new ClassWithAccessors();
obj3.setPrivateProperty("Private Value ");
console.error(obj3.getPrivateProperty());


//Abstraction - Exposing only whats necessary


abstract class OneAbstractClass{
    abstract OneAbstractMethod():void;
}

class OneConcreteClass extends OneAbstractClass{
    OneAbstractMethod(): void {
        console.log("Implementation of the abstract method. ");
        //throw new Error("Method not implemented.");
    }

}
//let abstractObject = new OneAbstractClass();//Not allowed 
let obj4 = new OneConcreteClass();
obj4.OneAbstractMethod();


//extending  class in interface 
class SomeClassForExtensionByInterface{
    x  : string ;
    y : string ;
    showMessage = () => {
        console.log("Hello World")
    }
}

class SomeInterface extends SomeClassForExtensionByInterface{
    z : string;
}

let obj5 : SomeInterface = {
    x : "x", 
    y: "y",
    z : "z", 
    showMessage : () => {console.log("Hello")}
};

obj5.showMessage();

