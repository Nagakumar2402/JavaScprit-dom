// string="naga" ,'kumar ' `Naga Kumar reddy`;
// number=22,3.14;
// boolean=true,false;
// null="It’s just a special value which represents “nothing”, “empty” or “value unknown”."
// undefined="undefined is “value is not assigned”."
// BigInt="2^52-1"
// Symbol="unique identifiers"

/*
total
Seven primitive data types:
number for numbers of any kind: integer or floating-point, integers are limited by ±(2^53-1).
bigint for integer numbers of arbitrary length.
string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
symbol for unique identifiers.
And one non-primitive data type:
object for more complex data structures.

*/
typeof undefined; // "undefined"

typeof 0; // "number"

typeof 10n; // "bigint"

typeof true; // "boolean"

typeof "foo"; // "string"

typeof Symbol("id"); // "symbol"

typeof null; // "object"  (2)

console.table([
  typeof undefined,
  typeof 0,
  typeof 10n,
  typeof true,
  typeof "Naga",
  typeof Symbol("id"),
  typeof null,
  typeof ["apple", "ball"],
  typeof { name: "naga" },
  typeof function () {
    console.log("hello");
  },
]);
let myName = "naga";
let newName = myName.charAt(0).toUpperCase() + myName.slice(1);
console.log(newName);
let str = "buy ViAgRA now";
let str1 = str.toLowerCase();
console.log(str1);
if (str1.includes("viagra1")) {
  console.log(true);
} else {
  console.log(false);
}
