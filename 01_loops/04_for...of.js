let response = [
  {
    author: "Sunil Sandhu",
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

// 4. for...of

// The for...of statement creates a loop Iterating over iterable data structures (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
// here 'val' becomes the object at its index position, rather than the index position
for (val of response) {
  addKeyToObject("author", val);
}

// it is worth bearing in mind that this cannot be used with regular objects, like the ones you will most often be using in JavaScript.
// it can only be used with data structures that are iterable. However, our next loop is designed specifically for use with objects.

// for of loops are also useful whenever you need to handle asynchronous tasks, something which a traditional for loop cannot handle, nor can higher order functions such as forEach.
// therefore, if you needed to handle data asychronously, you could write an async function like this:
async function addKeys() {
  for await (val of response) {
    addKeyToObject("author", val);
  }
}
// and attach the await keyword to the for...of loop
