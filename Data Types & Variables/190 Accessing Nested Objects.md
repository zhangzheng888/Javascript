The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

Here is a nested object:

```
const exampleStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

exampleStorage.cabinet["top drawer"].folder2;
exampleStorage.desk.drawer;
```


`exampleStorage.cabinet["top drawer"].folder2` would be the string `secrets`, and `exampleStorage.desk.drawer` would be the string `stapler`.