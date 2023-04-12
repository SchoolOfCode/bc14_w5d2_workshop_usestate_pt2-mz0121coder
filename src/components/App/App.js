import React from "react";
import "./App.css";
import { useState } from "react";
import Input from "../Input/index.js";
import Item from "../Item/index.js";
/* NOTES FOR REFERENCE 
In the App component, text state and handleChange function are passed as props to Input component using text and handleChange attributes. text state is also passed as a prop to Item component using text attribute.

In the Input component, text and handleChange are received as props and are used to set the value and onChange attributes of the input element respectively.

In the Item component, text is received as a prop and is used to display the text inside the li element.*/
function App() {
  const [text, setText] = useState("");
  function handleChange(event) {
    setText(event.target.value);
  }
  return (
    <div className="App">
      <h1>JSX will go here!</h1>
      <Input text={text} handleChange={handleChange} />
      <Item text={text} fontSize="2em" font="Monaco" />
      <Item text={text} fontSize="2em" font="Rockwell Extra Bold" />
      <Item text={text} fontSize="2em" font="Brush Script MT" />
    </div>
  );
}

export default App;
