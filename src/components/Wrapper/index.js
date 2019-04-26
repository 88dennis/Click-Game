import React from "react";
import "./style.css";

function Wrapper(props) {
  return (
  <div className="contain1">
  <div className="wrapper">{props.children}</div>
  </div>
  )
}

export default Wrapper;
