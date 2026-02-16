/*
All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.
*/

function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;