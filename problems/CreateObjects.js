//! literals
const names = {
  name: "naga kumar",
  age: 30,
  isStudent: false,
};
//! constructor

const car = new Object();
car.name = "Thor";
car.modal = 2021;
car.capacity = 6;

console.log(names);
console.log(car);

//! object Prototype
// The Object.create() static method creates a new object,
//  using an existing object as the prototype of the newly created object.
const user = Object.create(names);
user.lastName = "reddy";
user.rank = 22;
console.log(user);
