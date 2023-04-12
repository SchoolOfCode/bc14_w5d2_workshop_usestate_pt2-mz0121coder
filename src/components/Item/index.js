import React from "react";

export default function Item(props) {
  return (
    <li style={{ fontSize: `${props.fontSize}`, fontFamily: `${props.font}` }}>
      {props.text}
    </li>
  );
}
