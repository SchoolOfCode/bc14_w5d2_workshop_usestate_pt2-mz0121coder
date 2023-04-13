import React from "react";

export default function Input({ text, handleChange }) {
  return <input type="text" value={text} onChange={handleChange} />;
}
