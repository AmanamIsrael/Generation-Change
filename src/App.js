import React from "react";
import "./styles/Normalize.sass";
import "./styles/App.sass";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div>
      <LandingPage className="dark-bg-gradient" />
    </div>
  );
}

export default App;
