import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <div className="mb-3">
        <h1> {props.heading} </h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary mt-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
      </div>
    </div>
  );
}

export default TextForm;
