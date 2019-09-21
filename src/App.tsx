import React from "react";
import "./App.css";
import Clock from "./components/clock";
import Jokes from "./components/jokes";

const App: React.FC = () => {
  const [displayJokes, setDisplayJokes] = React.useState(true);

  return (
    <div>
      <Clock />
      <div>
        <label>
          <input
            type="checkbox"
            checked={displayJokes}
            onChange={() => setDisplayJokes(!displayJokes)}
          />
          Display jokes
        </label>
      </div>
      {displayJokes && <Jokes url="/api/jon-skeet.json" />}
    </div>
  );
};

export default App;
