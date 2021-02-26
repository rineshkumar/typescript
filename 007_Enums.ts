enum SimpleEnum{
    A,
    B,
    C,
    D
}

let simpleEnum : SimpleEnum = SimpleEnum.A;
console.log(simpleEnum)
simpleEnum = SimpleEnum.B;
console.log(simpleEnum)
// When assigning values all values should be assigned 
enum NumericEnum{
    A = 5,
    B 
}

let numericEnum : NumericEnum = NumericEnum.A;
console.log(numericEnum)
numericEnum = NumericEnum.B
console.log(numericEnum) // numericEnum value with be empty 

enum StringEnum{
    A = "AA",
    B = "BB"
}


console.log(StringEnum.A)