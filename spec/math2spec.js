const mathUtils=require("../src/Math2")

describe("tests for math2 ", () => {
    it("should return 4 ", () => {
        let actual = mathUtils.addNumbers(10,20);
        expect(actual).toEqual(30);
        
    });
});



