We can also delete properties from objects like this:

`delete airBud.bark;`

Example:

```
const airBud = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete airBud.bark;
```

After the last line shown above, `airBud` looks like:

```
{
  "name": "Bud",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
```