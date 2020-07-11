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

// 3. do...while
let i = 0;

do {
  addKeyToObject("author", response[i]);
  i++;
} while (i < response.length);

console.log(response);

// the key difference between a while loop and a do while loop is the order in which the condition is checked.
// in a while loop, the condition will be checked first, then if that statement in true, it will execute.
// in a do while loop, there will be an execution first, then a check to see if the statement is still true.
