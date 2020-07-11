let response = [
  {
    format: "article",
    href:
      "https://medium.com/javascript-in-plain-english/what-is-hoisting-in-javascript-a63c1b2267a1",
    medium: "JavaScript in Plain English",
    title: "What is Hoisting in JavaScript?",
    year: 2018,
    duration: 5,
  },
  {
    format: "podcast",
    href: "https://devchat.tv/views-on-vue/vov-054-nuxt-with-sunil-sandhu/",
    medium: "Views On Vue",
    title: "VoV 054: Nuxt with Sunil Sandhu",
    year: 2019,
    duration: 60,
  },
  {
    format: "video",
    href: "https://www.youtube.com/watch?v=dnNF8szmxXg",
    medium: "London Web Performance",
    title: "I created the exact same app in React and Vue. Here are the differences.",
    year: 2020,
    duration: 20,
  },
];

// You'll see above that I have added a duration key/value to each object in the response array.
// Reduce can be useful when you want to do things such as obtaining an overall value by cycling through each object and accumulating a particular value.
// Higher order functions can become even more powerful by combining them together.
// You'll see here that we first use the map function to pull out all of the duration values.
// We then use reduce to add each of those values up.
// The reduce function can take up to four different parameters where required. Here we only need to use the first two.
// The first is our accumulator. This is the value that will store our final value and is the one that we will be adding our duration values to.
// The second is the current value. You can see that we are simply adding the currentValue parameter to the accumulator parameter.

const overallDuration = response
  .map((obj) => obj.duration)
  .reduce((accumulator, currentValue) => accumulator + currentValue);

// Now as mentioned, we can provide additional customization and functionality by making use of the additional parameters.
// As we haven't used them here, accumulator actually defaults to the first value and currentValue defaults to the second value.
// Therefore, we can imagine that the following takes place:
// first cycle: 5 + 60 (first value plus second value)
// second cycle: 65 + 20 (accumulated value plus third value)
// end (no third cycle because we didn't use the other parameters)

// if we want to provide an initial value, we'd write our function like so:
const overallDurationWithInitialValue = response
  .map((obj) => obj.duration)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// first cycle: 0 + 5 (initial value plus first value)
// second cycle: 5 + 60 (accumulated value plus second value)
// third cycle: 65 + 20 (accumulated value plus third value)
