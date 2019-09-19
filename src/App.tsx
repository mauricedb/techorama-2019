import React from "react";
import "./App.css";
import Jokes from "./components/jokes";

const App: React.FC = () => {
  const [displayJokes, setDisplayJokes] = React.useState(true);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={displayJokes}
          onChange={() => setDisplayJokes(!displayJokes)}
        />
        Display jokes
      </label>
      {displayJokes && <Jokes url="/api/jon-skeet.json" />}
    </div>
  );
};

export default App;
