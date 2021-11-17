import React from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <div>
      <Navbar title="UtilText" aboutText="About" />
      <div className="container my-3">
        <TextForm heading="Enter text to analyse" />
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
