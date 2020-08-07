// just like how React needs to be present inside of components, the createElement/createFragment functions need to be present
import { createElement } from "../../jsx";
import { setState } from "../../state";

const Counter = () => {
  function mutation(el) {
    el.innerText = parseInt(el.innerText, 10) + 1;
  }
  return (
    <div>
      <button onClick={() => setState("counter", mutation)}>increase counter</button>
      <p>
        Current count: <span id="counter">0</span>
      </p>
    </div>
  );
};

export default Counter;
