import React, { Suspense, StrictMode } from "react";
import "./App.css";
import Jokes from "./components/jokes";
import Loading from "./components/loading";

import {
  unstable_scheduleCallback,
  unstable_IdlePriority,
  unstable_LowPriority,
  unstable_NormalPriority,
  unstable_UserBlockingPriority,
  unstable_ImmediatePriority
} from "scheduler";

// const Jokes = React.lazy(() => import("./components/jokes"));

const App: React.FC = () => {
  const [displayJokes, setDisplayJokes] = React.useState(false);

  return (
    <StrictMode>
      <div>
        <Suspense fallback={<Loading />}>
          <label>
            <input
              type="checkbox"
              checked={displayJokes}
              onChange={() => {
                unstable_scheduleCallback(unstable_ImmediatePriority, () => {
                  setDisplayJokes(!displayJokes);
                });
              }}
            />
            Display jokes
          </label>
          {displayJokes && <Jokes url="/api/jon-skeet.json" />}
        </Suspense>
      </div>
    </StrictMode>
  );
};

export default App;
