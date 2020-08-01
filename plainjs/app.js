import { createElement, createFragment } from "./jsx";
import Button from "./Button";

const UsingFragment = () => (
  <div>
    <p>This is regular paragraph</p>
    <div>
      <Button />
      <p>This is a paragraph in a fragment</p>
      <>
        <p>Hello</p>
      </>
      <ul>
        {[1, 2, 3].map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

document.getElementById("root").appendChild(<UsingFragment name="foo" />);
