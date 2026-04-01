/*
When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

Here's an example:
*/

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor;