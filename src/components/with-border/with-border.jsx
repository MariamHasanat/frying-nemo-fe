import React from "react";
import './withBorder.css';
const WithBorder = props => {

  return(
    <div className="border">
      {props.children}
    </div>
  );
};
export default WithBorder;