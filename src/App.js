import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <Button variant="primary" onClick={incrementCounter}>
        Increment
      </Button>{" "}
      <Button variant="secondary" onClick={decrementCounter}>
        Decrement
      </Button>{" "}
    </div>
  );
}

export default App;
