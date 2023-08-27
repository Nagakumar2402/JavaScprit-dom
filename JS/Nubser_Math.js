const number = new Number(100);
console.log(number);
console.log(number.toFixed(2));

const largeNum = 1000000;

console.log(largeNum.toLocaleString());
console.log(largeNum.toLocaleString("en-US"));

const num = 123.9824;
console.log(num.toPrecision(3));
console.log(num.toPrecision(5));
console.log(num.toPrecision(6));
console.log(num.toPrecision(8));

//________________ Math _________________________//

console.log(Math.random());
console.log(Math.round(4.5));
console.log(Math.floor(4.5));
console.log(Math.ceil(4.5));
console.log(Math.sqrt(25));
console.log(Math.pow(2, 5));
console.log(Math.abs(-5));
console.log(Math.min(2, 4, 8, 9, 55));
console.log(Math.max(2, 4, 8, 9, 55));

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
