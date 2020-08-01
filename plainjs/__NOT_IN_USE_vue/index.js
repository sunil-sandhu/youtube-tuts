const root = document.getElementById("root");

function createElement(tag, attr, children) {
  // create a new div element
  let newDiv = document.createElement(tag);
  if (typeof attr === "object" && attr !== null) {
    // then we have an object of attributes that we want to apply to our element
    for (let [key, value] of Object.entries(attr)) {
      newDiv.setAttribute(key, value);
    }
  }
  if (typeof children === "string") {
    let newContent = document.createTextNode(children);
    newDiv.appendChild(newContent);
    root.appendChild(newDiv);
  } else {
    const lastElement = document.getElementById("root").lastChild;
    console.log(lastElement);
    lastElement.appendChild(newDiv);
  }
  // and give it some content

  // add the text node to the newly created div
}

createElement("div", { class: "bum" }, createElement("h1", {}, "hey!"));
createElement("h2", { class: "erm" }, "cheese?");
