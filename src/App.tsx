import React, { Suspense } from "react";
import "./App.css";
// import Jokes from "./components/jokes";
import Loading from "./components/loading";

const Jokes = React.lazy(() => import("./components/jokes"));

const App: React.FC = () => {
  const [displayJokes, setDisplayJokes] = React.useState(false);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <label>
          <input
            type="checkbox"
            checked={displayJokes}
            onChange={() => setDisplayJokes(!displayJokes)}
          />
          Display jokes
        </label>
        {displayJokes && <Jokes url="/api/jon-skeet.json" />}
      </Suspense>
    </div>
  );
};

export default App;
