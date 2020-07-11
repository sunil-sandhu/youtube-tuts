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

// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
// This gives us some more customizability than the includes() function. Here we can pass in a more specific condition, similar to how we did with the filter() function earlier
// of course the difference here is that, instead of returning the matching content like the filter() function does, the some() function simply returns a boolean value of true or false as soon as it passes the criteria given to it.
const includesArticles = response.some((obj) => obj.format === "article");

// Then maybe we'll use that for some conditional statement, such as
if (includesArticles) {
  // do something
} else {
  // do something else
}
