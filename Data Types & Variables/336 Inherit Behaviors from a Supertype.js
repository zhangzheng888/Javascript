/*
In the previous challenge, you created a supertype called Animal that defined behaviors shared by all animals:
*/

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

/*
This and the next challenge will cover how to reuse the methods of Animal inside Bird and Dog without defining them again. 
It uses a technique called inheritance. This challenge covers the first step: make an instance of the supertype (or parent). 
You already know one way to create an instance of Animal using the new operator:
*/

let animal = new Animal();