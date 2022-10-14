import React from "react";


export default function GeneralImage(props) {
  const style = {
    width: props.width,
    height: props.height,
    borderRadius: props.borderRadius,
    margin: props.margin,
    padding: props.padding,
  };

  return (
    <div style={style}>
      <img style={{ borderRadius: '10px', backgroundColor: "#FFFFFF" }} width={'100%'} src={props.urlImage} alt={props.alt} />
    </div>
  );
}