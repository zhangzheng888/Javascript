After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.

For example, let's look at `exampleDog`:

```
const exampleDog = {
  "name": "Bud",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```

Since he's a particularly gifted dog, let's change his name to the string `Air Bud`. Here's how we update his object's `name` property: `exampleDog.name = "Air Bud"`; or `exampleDog["name"] = "Air Bud"`; Now when we evaluate `exampleDog.name`, instead of getting `Bud`, we'll get his new name, `Air Bud`.