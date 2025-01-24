You can add new properties to existing JavaScript objects the same way you would modify them.

Here's how we would add a bark property to `exampleDog`:

`exampleDog.bark = "bow-wow"`;

or

`exampleDog["bark"] = "bow-wow"`;
Now when we evaluate `exampleDog.bark`, we'll get his bark, `bow-wow`.

Example:

```
const exampleDog = {
  "name": "Bud",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

exampleDog.bark = "bow-wow";
```
