
import React from "react";
import './with-borders.css'
/**
 * 
 * @param {{children: React.ReactNode; }} props 
 * @returns 
 */


const WithBorders = (props) => {
  return (
    <div className="with-borders">
      {props.children}
    </div>
  )
}

export default WithBorders;