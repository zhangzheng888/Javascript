/*
Modify the function checkObj to test if the object passed to the function parameter obj contains the specific 
property passed to the function parameter checkProp. If the property passed to checkProp is found on obj, 
return that property's value. If not, return Not Found.
*/

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

/*
The syntax ${obj.checkProp} is used for template literals in JavaScript, which allows you to embed expressions 
inside string literals. However, in this case, you want to access a property of an object dynamically.

When you use obj.checkProp, JavaScript looks for a property named checkProp on the object obj, which likely doesn't exist. 
Instead, you need to use bracket notation obj[checkProp] to access the property whose name is stored in the variable checkProp.
*/

let obj = { name: "Alice", age: 25 };
let checkProp = "name";

console.log(obj.checkProp); // undefined, because there's no property named "checkProp"
console.log(obj[checkProp]); // "Alice", because checkProp is "name" and obj["name"] is "Alice"