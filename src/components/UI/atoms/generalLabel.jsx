import React from "react";
import parse from "html-react-parser";

export default function GeneralLabel(props) {
  const style = {
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    color: props.color,
    margin: props.margin,
    padding: props.padding,
  };
  return (
    <div style={style}>
      <span>
        {props.title === undefined
          ? ''
          : props.title + ": " + props.text}
      </span>
      <span>{props.title === undefined ? parse(`${props.text}`) : ''}</span>
    </div>
  );
}
