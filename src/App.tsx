import React from "react";
import "./App.css";
import Jokes from "./components/jokes";

const App: React.FC = () => {
  return (
    <div>
      <Jokes url="/api/jon-skeet.json" />
    </div>
  );
};

export default App;
