import "./styles.css";
import { useState } from "react";

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}

export default function App() {
  /* Each MyButton Component doesn't have it's own seperate 
  / counter */ 
  const [count, setCount] = useState(1);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Hello</h1>
      <MyButton count={count} onClick={handleClick} />
      <br />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
