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

// The find() method can be useful when you're trying to find an object with a particular value.
// You should bear in mind, however, that this will simply find the first match and stop there.
// If you are simply trying to find the first value or know that your content will only have one match, you could use the find() method.
// However, if you're trying to return all of the matching values, it would be better to use filter().
// For example, if I wanted to find the object that had the format of "article", I could write the following:

const articles = response.find((obj) => obj.format === "article");
