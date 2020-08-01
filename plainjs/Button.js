// just like how React needs to be present inside of components, the createElement/createFragment functions need to be present
import { createElement } from "./jsx";

const Button = () => {
  return <button onClick={() => console.log("clicked!")}>Click me!</button>;
};

export default Button;
