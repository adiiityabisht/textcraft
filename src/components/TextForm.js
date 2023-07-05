import React, { useState } from "react";


export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase", "success");

  };
  const handleNewLineClick = () => {
    let newText = text.replace(/\. /g, ".\n");
    setText(newText);
    props.showAlert("newLine Added", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);

    props.showAlert("Text has been copied", "success");
  };

  const handleCapsClick = () => {
    let newText = text.replace(/.+?[\.\?\!](\s|$)/g, function (a) {
      return a.charAt(0).toUpperCase() + a.slice(1);
    });
    setText(newText);
    props.showAlert("Added caps to first letters", "success");
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h1
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor:
                props.mode === "light" ? "white" : "rgb(63 69 75)",
              color: props.mode === "light" ? "black" : "white",
            }}
            value={text}
            onChange={handleOnchange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          upperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          lowerCase
        </button>
        <button className="btn btn-primary mx" onClick={handleNewLineClick}>
          newLine
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCapsClick}>
          caps
        </button>
        <button className="btn btn-primary mx" onClick={handleCopy}>
          copy
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          You have entered {text.split(" ").length-1} words and {text.length}{" "}
          characters
        </p>
      </div>
    </>
  );
}
