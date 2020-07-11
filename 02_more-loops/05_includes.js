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

// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// So let's imagine that we just want to find out whether our response contains any content that was made in 2020.
// We could write the following:
const hasContentMadeIn2020 = response.map((obj) => obj.year).includes(2020);

// Then maybe we'll use that for some conditional statement, such as
if (hasContentMadeIn2020) {
  // do something
} else {
  // do something else
}
