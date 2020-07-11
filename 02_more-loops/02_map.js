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

// Map provides an easy way to loop through an array and pull out a specific piece from each item inside.
// Here we have three objects. Therefore, we loop through each object and grab the href value.
// This, along with all of the upcoming loops we will be showing do not mutate the original array, but rather create a new one.
// Therefore, we create a variable here and assign the result of our map function to it.
const urls = response.map((obj) => obj.href);

// show urls response array