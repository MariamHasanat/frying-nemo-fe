import React from "react";
import './with-border.css';

const WithBorder = (props) =>{
  return(
  <div className="with-borders">
  {props.children}
</div>
)
  
}

export default WithBorder;