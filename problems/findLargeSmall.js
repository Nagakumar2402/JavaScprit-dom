const numbers = [15, 62, 31, 8, 9, 1, 99];
let findSmallestNumber = (arr) => {
  let smallNum = Number.POSITIVE_INFINITY;
  for (const num of arr) {
    if (num < smallNum) {
      smallNum = num;
    }
  }
  return smallNum;
};
const smallNum = findSmallestNumber(numbers);
console.log(smallNum);

//simplify this

let smallestNumber = (arr) => {
  return arr.reduce((acc, curr) => {
    return Math.min(acc, curr);
  });
};
const smNum = smallestNumber(numbers);
console.log(smNum);

let findBiggestNumber = (arr) => {
  let bigNum = Number.NEGATIVE_INFINITY;
  for (const num of arr) {
    if (num > bigNum) {
      bigNum = num;
    }
  }
  return bigNum;
};
const bigNumber = findBiggestNumber(numbers);
console.log(bigNumber);

//simplify this

// let BiggestNumber = (arr) => {
//   return arr.reduce((acc, curr) => {
//     return Math.max(acc, curr);
//   });
// };
// const bigNum = BiggestNumber(numbers);
// console.log(bigNum);
let BiggestNumber = (arr) => arr.reduce((acc, curr) => Math.max(acc, curr));
console.log(BiggestNumber(numbers));

let sum = () => [1, 2, 3, 4, 5].reduce((acc, curr) => acc + curr, 0);
console.log(sum());

let words = () => ["naga", " ", "reddy"].reduce((acc, curr) => acc + curr, "");
console.log(words());

const problems = "";
