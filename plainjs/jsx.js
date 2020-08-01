/** @jsx createElement */
/*** @jsxFrag createFragment */

// Useful resource: https://blog.r0b.io/post/using-jsx-without-react/
// Code taken from https://medium.com/better-programming/how-to-use-jsx-without-react-21d23346e5dc

export const createElement = (tag, props, ...children) => {
  if (typeof tag === "function") return tag(props, ...children);
  const element = document.createElement(tag);

  Object.entries(props || {}).forEach(([name, value]) => {
    if (name.startsWith("on") && name.toLowerCase() in window)
      element.addEventListener(name.toLowerCase().substr(2), value);
    else element.setAttribute(name, value.toString());
  });

  children.forEach((child) => {
    appendChild(element, child);
  });

  return element;
};

const appendChild = (parent, child) => {
  if (Array.isArray(child)) child.forEach((nestedChild) => appendChild(parent, nestedChild));
  else parent.appendChild(child.nodeType ? child : document.createTextNode(child));
};

export const createFragment = (props, ...children) => {
  return children;
};
