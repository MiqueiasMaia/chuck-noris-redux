import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getJoke } from "./store/actions/joke.action";

function App() {
  const jokeReducer = useSelector((state) => state.jokeReducer);

  const dispatch = useDispatch();

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
      <div className="joke-container">
        <button onClick={() => dispatch(getJoke())}>
          Get Joke
        </button>
        <h1>{jokeReducer.joke}</h1>
      </div>
    </>
  );
}

export default App;
