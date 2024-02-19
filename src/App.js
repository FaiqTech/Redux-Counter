// App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions/Actions";
import "./App.css";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="App">
      <h1>Redux Counter</h1>
      <div className="count-container">
        <p className="count-text">Count: {count}</p>
        <div className="button-container">
          <button className="increment-button" onClick={handleIncrement}>
            Increment
          </button>
          <button className="decrement-button" onClick={handleDecrement}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
