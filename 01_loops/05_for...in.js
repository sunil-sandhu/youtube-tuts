let response = {
  "001": {
    format: "article",
    href:
      "https://medium.com/javascript-in-plain-english/what-is-hoisting-in-javascript-a63c1b2267a1",
    medium: "JavaScript in Plain English",
    title: "What is Hoisting in JavaScript?",
    year: 2018,
  },
  "002": {
    format: "podcast",
    href: "https://devchat.tv/views-on-vue/vov-054-nuxt-with-sunil-sandhu/",
    medium: "Views On Vue",
    title: "VoV 054: Nuxt with Sunil Sandhu",
    year: 2019,
  },
  "003": {
    format: "video",
    href: "https://www.youtube.com/watch?v=dnNF8szmxXg",
    medium: "London Web Performance",
    title: "I created the exact same app in React and Vue. Here are the differences.",
    year: 2020,
  },
};

function addKeyToObject(key, obj) {
  if (obj.format === "article") {
    obj[key] = "Sunil Sandhu";
  }
}

// 5. for...in
// this is useful for iterating through objects
// here it returns the keys, so in our case, each key will be "001", "002", and "003"
// bear in mind that we are using a slightly different response variable here.
// This one happens to be an object of objects, rather than an array of objects like we saw earlier.
// It's not uncommon to make API requests that return an object of objects,
// so I wanted to show you a way that you could handle these without having to convert it into an array

for (key in response) {
  addKeyToObject("author", response[key]);
}

// useful resources:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
