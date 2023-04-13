import React from "react";

export default function Item(props) {
  return (
    <p style={{ fontSize: `${props.fontSize}`, fontFamily: `${props.font}` }}>
      {props.text}
    </p>
  );
}
