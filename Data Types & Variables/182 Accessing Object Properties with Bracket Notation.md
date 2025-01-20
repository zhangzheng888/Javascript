The second way to access the properties of an object is bracket notation (`[]`). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

However, you can still use bracket notation on object properties without spaces.

Here is a sample of using bracket notation to read an object's property:

```
const exampleObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

exampleObj["Space Name"];
exampleObj['More Space'];
exampleObj["NoSpace"];
```

`exampleObj["Space Name"]` would be the string `Kirk`, `exampleObj['More Space']` would be the string `Spock`, and `exampleObj["NoSpace"]` would be the string `USS Enterprise`.

Note that property names with spaces in them must be in quotes (single or double).