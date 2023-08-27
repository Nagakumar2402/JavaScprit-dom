let str = "JavaScript is a great language";
let str_length = str.length;
let str_charAt = str.charAt(0);
let str_charAtCode = str.charCodeAt(0);
let str_indexOf = str.indexOf("S");
let str_lastIndexOf = str.lastIndexOf("e");
let str_search = str.search(/is/);
let str_match = str.match(/e/g); //g global search.With out it take 1st occurrence
let str_replace = str.replace("JavaScript", "TypeScript");
let str_subStr = str.substr(0, 10);
let str_subString = str.substring(10, -10);
let str_slice = str.slice(10, -10); //not working on negative
let str_includes = str.includes("is");
let str_repeat = str.slice(0, 10).repeat(2);

console.table([
  {
    str_replace,
    str_subStr,
    str_subString,
    str_slice,
    str_includes,
    str_repeat,
  },
]);
console.table([
  {
    str_length,
    str_charAt,
    str_charAtCode,
    str_indexOf,
    str_lastIndexOf,
    str_search,
    str_match,
  },
]);
