import React from "react";
import "./with-border.css";
/**
 * 
 * @param {{children: React.ReactNode;}} props 
 * @returns
 */
const WithBorder = (props )=>
{
  return(
  <div className="withBorder">
    {props.children}
  </div>)
}
export default WithBorder;