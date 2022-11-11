import { React, useState } from "react";

function Counter() {
  const [count, inccount] = useState(0);
  const add = () => {
    console.log("Hello World");
    inccount(count + 1);
  };
  const subtract = () => {
    console.log("Hello World");
    if (count > 0) {
      inccount(count - 1);
    }
  };

  return (
    <div>
      <h1> {count} </h1>
      <button onClick={add}>button</button>
      <button onClick={subtract}>Decrement</button>
    </div>
  );
}

export default Counter;
