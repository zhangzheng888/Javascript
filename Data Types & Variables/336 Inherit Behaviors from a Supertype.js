/*
In the previous challenge, you created a supertype called Animal that defined behaviors shared by all animals:
*/

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};