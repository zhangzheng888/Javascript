/*
The Bird and Dog constructors from the last challenge worked well. However, notice that all Birds 
that are created with the Bird constructor are automatically named Albert, are blue in color, and have two legs. 
What if you want birds with different values for name and color? It's possible to change the properties of each bird 
manually but that would be a lot of work:
*/

let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";

/*
A better way to handle this is to design your constructor to accept parameters. This way, you can pass in 
different values to give each bird a unique name and color. Here's how you can modify the Bird constructor to 
accept name and color parameters:
*/

function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

/*
Then pass in the values as arguments to define each unique bird into the Bird constructor: let cardinal = new Bird("Bruce", "red"); 
This gives a new instance of Bird with name and color properties set to Bruce and red, respectively. The numLegs property is still 
set to 2. The cardinal has these properties:
*/

cardinal.name
cardinal.color
cardinal.numLegs

/*
The constructor is more flexible. It's now possible to define the properties for each Bird at the time it is created, 
which is one way that JavaScript constructors are so useful. They group objects together based on shared characteristics 
and behavior and define a blueprint that automates their creation.

Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. 
Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.
*/

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Buddy", "white");
