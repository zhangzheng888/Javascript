/*
In previous lessons, you learned that an object can inherit its behavior (methods) from another object by 
referencing its prototype object:
*/

ChildObject.prototype = Object.create(ParentObject.prototype);

/*
Then the ChildObject received its own methods by chaining them onto its prototype:
*/

ChildObject.prototype.methodName = function() {...};

