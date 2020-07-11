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

// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// The key difference between the every() function and the some() function is that the some() function will return true as long as it finds at least one match from the values given to it.
// The every() function will only return true if every value given to it returns a match.
// Therefore, the following will return false.
const everyObjectIsAnArticle = response.every((obj) => obj.format === "article");
// but if we changed the format of every object inside of response to "article", it would then return true
