const numberArray : number[] = [1,2,3,4,5];
console.log(numberArray) // [1,2,3,4,5]
numberArray.push(10);
console.log(numberArray) // [1,2,3,4,5,10]
numberArray.pop();
console.log(numberArray) // [1,2,3,4,5]
let slicedArray  = numberArray.slice(0,3);
console.log(slicedArray) // [1,2,3]
console.log(numberArray) // [1,2,3,4,5]
let splicedArray = numberArray.splice(0,3);
console.log(splicedArray) // [1,2,3]
console.log(numberArray) // [4,5]


let unsortedArray : number[] = [5,4,1,2,3];
console.log(unsortedArray.sort());// [1,2,3,4,5]

console.log(unsortedArray.join());// 1,2,3,4,5 -- String 

console.log(unsortedArray.includes(5)); // true 

console.log(numberArray.concat(unsortedArray).sort());//[1, 2, 3, 4,4, 5, 5]

