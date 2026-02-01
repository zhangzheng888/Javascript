/*
Up until now you have been adding properties to the prototype individually:
*/

function Bird(name) {
  this.name = name;
}

Bird.prototype.numLegs = 2;

/*
This becomes tedious after more than a few properties.

*/

Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}