Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, 
you can use an object to lookup values rather than a `switch` statement or an `if/else` chain. 
This is most useful when you know that your input data is limited to a certain range.

Here is an example of an article object:

```
const article = {
  "title": "Mission-Aligned Teams: The Evolution of the Single-Threaded Ownership Organizational Model Designed for Startups and Scale-ups",
  "link": "https://medium.com/super/mission-aligned-teams-the-evolution-of-the-single-threaded-ownership-organizational-model-13d93523da84",
  "author": "Michael Abramovich",
  "language": "JavaScript",
  "tags": "TECHNOLOGY",
  "createdAt": "June 4, 2024"
};

const articleAuthor = article["author"];
const articleLink = article["link"];

const value = "title";
const valueLookup = article[value];
```

`articleAuthor` is the string `Michael Abramovich`, `articleLink` is the string `https://medium.com/super/mission-aligned-teams-the-evolution-of-the-single-threaded-ownership-organizational-model-13d93523da84`, 
and `valueLookup` is the string `Mission-Aligned Teams: The Evolution of the Single-Threaded Ownership Organizational Model Designed for Startups and Scale-ups`.