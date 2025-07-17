function sum(a,b){
    return a+b
}
const ans = sum(1,2)
console.log(ans);

// Arrow functions 
const arrowSum = (a,b)=>{
    return a+b
}
const answer =arrowSum(2,3)
console.log(answer);

//Map
// 📖 Meaning:
// map() is used to change or transform every item in an array and returns a new array.

// 🔧 Format:

// array.map(item => {
//   return modifiedItem;
// });
// 🍎 Example: Double Each Number

// const numbers = [1, 2, 3];
// const doubled = numbers.map(num => num * 2);
// // [2, 4, 6]
// console.log(doubled);

// 🧠 What happened?
// map() took each number.
// Multiplied it by 2.
// Returned a new array.

// Simple 
const input =[1,2,3,4,5];
const newArray =[];
for(let i=0;i<input.length;i++){
    newArray.push(input[i]*2);
}
console.log(newArray);

// using Map 
const array =[1,2,3,4,5];
function transform(i){
    return i*2;
}
const output = array.map(transform);
console.log(output);

// Filter 
//  What is filter()?
// 📖 Meaning:
// filter() is used to pick only the items you want from an array.

array.filter(item => {
  return condition; // true or false
});
// 🍌 Example: Keep Only Even Numbers

const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
// [2, 4]
console.log(evens);
// 🧠 What happened?
// filter() checks each number.
// Keeps it only if it’s even.

// 🌈 Step 5: Combine Both map() + filter() + arrow functions
// Example: Square only the even numbers

const number = [1, 2, 3, 4, 5, 6];

const evenSquares = number
  .filter(num => num % 2 === 0)    // [2, 4, 6]
  .map(num => num * num);         // [4, 16, 36]

console.log(evenSquares);
