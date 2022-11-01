import "./styles.css";
import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(1);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}

export default function App() {
  /* Each MyButton Component has it's own seperate 
  / counter */
  return (
    <div>
      <h1>Hello</h1>
      <MyButton /> c
      <br />
      <MyButton />
    </div>
  );
}
