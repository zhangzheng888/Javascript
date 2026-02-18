/*
All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.
*/

function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;

/*
Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype 
is Object.prototype:
*/

Object.prototype.isPrototypeOf(Bird.prototype);

// How is this useful? You may recall the hasOwnProperty method from a previous challenge:

let duck = new Bird("Donald");
duck.hasOwnProperty("name");