import React, { useState } from "react";
import ReactDOM from "react-dom";

function Toggle(props) {
  const [toggleButton, setToggleButton] = useState(true);
  const [toggleColor, setToggleColor] = useState(false);

  const handleClick = () => {
    setToggleButton(!toggleButton);
    setToggleColor(!toggleColor);
  };

  return (
    <button
      style={
        toggleColor ? { backgroundColor: "red" } : { backgroundColor: "green" }
      }
      onClick={handleClick}
    >
      {toggleButton ? "ON" : "OFF"}
    </button>
  );
}

ReactDOM.render(<Toggle />, document.getElementById("root"));

/*
React Button Toggle
We provided some simple React template code. Your goal is to modify the component so that you can properly toggle the button to switch between an ON state and an OFF state. When the button is on and it is clicked, it turns off and the text within it changes from ON to OFF and vice versa. Make use of component state for this challenge.

You are free to add classes and styles, but make sure you leave the element ID's as they are. Submit your code once it is complete and our system will validate your output.
*/
