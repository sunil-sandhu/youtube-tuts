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

// Filter provides an easy way to loop through an array, provide some form of condition, and filter any items that do not match that condition
const articles = response.filter((obj) => obj.format === "article");
// The condition statements work exactly the same as they do outside of these higher order functions.
// For example, if we wanted to grab all of the items that are not articles, we could simply change it from using the "strict equals" operator to the "is not strict equal", like so:
const notArticles = response.filter((obj) => obj.format !== "article");
// We can also use loose equality checks (== and !=) as well if we wanted to.
