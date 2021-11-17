import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    setText(text.toLowerCase())
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div className="container">
        <div className="mb-3">
          <h1> {props.heading} </h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
          <button className="btn btn-primary mt-3 mx-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mt-3 mx-1" onClick={handleLowClick}>
            Convert to Lowecase
          </button>
        </div>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters,{" "}
          {0.008 * text.split(" ").length} minutes read{" "}
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default TextForm;
