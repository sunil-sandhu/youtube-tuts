let response = [
  {
    format: "article",
    href:
      "https://medium.com/javascript-in-plain-english/what-is-hoisting-in-javascript-a63c1b2267a1",
    medium: "JavaScript in Plain English",
    title: "What is Hoisting in JavaScript?",
    year: 2018,
  },
  {
    format: "podcast",
    href: "https://devchat.tv/views-on-vue/vov-054-nuxt-with-sunil-sandhu/",
    medium: "Views On Vue",
    title: "VoV 054: Nuxt with Sunil Sandhu",
    year: 2019,
  },
  {
    format: "video",
    href: "https://www.youtube.com/watch?v=dnNF8szmxXg",
    medium: "London Web Performance",
    title: "I created the exact same app in React and Vue. Here are the differences.",
    year: 2020,
  },
];

function addKeyToObject(key, obj) {
  if (obj.format === "article") {
    obj[key] = "Sunil Sandhu";
  }
}

// forEach is a useful replacement for things such as the for-loop, when we know that we want to iterate over each item in an array
// internally it takes care of initializing a variable and incrementing it.

// 1. forEach
response.forEach(function (obj) {
  addKeyToObject("author", obj);
});

// 1. forEach (as an arrow function)
response.forEach((obj) => {
  addKeyToObject("author", obj);
});

// 1. forEach (as a one-liner)
response.forEach((obj) => addKeyToObject("author", obj));

// we couldn't use the one-liner if our forEach needed to handle multiple operations, such as this for example:

// 1. forEach (as an arrow function)
response.forEach((obj) => {
  console.log(obj);
  addKeyToObject("author", obj);
});

console.log(response);
