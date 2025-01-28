/*
Convert the switch statement into an object called lookup. 

function phoneticLookup(val) {
  let result = "";

  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  return result;
}

Use it to look up val and assign the associated string to the result variable.


*/

// Setup
function phoneticLookup(val) {
    let result = "";
  
    const lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank",
      "": undefined
    };
  
    result = lookup[val];
  
    return result;
  }

// "Adams"
phoneticLookup("alpha");
// "Boston"
phoneticLookup("bravo");
// "Chicago"
phoneticLookup("charlie");
// "Denver"
phoneticLookup("delta");
// "Easy"
phoneticLookup("echo");
// "Frank"
phoneticLookup("foxtrot");
// undefined
phoneticLookup("");