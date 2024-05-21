import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  updateName,
} from "./store/actions/counter.action";

function App() {
  const counterReducer = useSelector((state) => state.counterReducer);

  const [componentState, setComponentState] = useState({ name: "" });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setComponentState({
      ...componentState,
      [name]: value,
    });
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> Nome: {counterReducer.name}</h1>
      <h1> Contador: {counterReducer.count}</h1>

      <div className="container">
      <div className="card">
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div className="card">
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <div className="card">
        <button onClick={() => dispatch(reset())}> Reset</button>
      </div>
      </div>
      <div className="container_two">
        <input
          type="text"
          name="name"
          value={componentState.name}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={() => dispatch(updateName(componentState.name))}>
          {" "}
          Alterar Nome
        </button>
      </div>
    </>
  );
}

export default App;
