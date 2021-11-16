import React from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <div>
      <Navbar title="UtilText" aboutText="About" />
      <div className="container">
        <TextForm heading="Enter text to analyse" />
      </div>
    </div>
  );
}

export default App;
