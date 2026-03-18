/*
In the previous challenge you saw the first step for inheriting behavior from the supertype (or parent) Animal: making a new 
instance of Animal.

This challenge covers the next step: set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.
*/

Bird.prototype = Object.create(Animal.prototype);