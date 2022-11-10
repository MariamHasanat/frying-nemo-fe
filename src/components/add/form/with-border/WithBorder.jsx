import React from 'react'
import './withborder.css'
const WithBorder = (props) => {
  return (
    <div className="show-border">
     {props.children}
    </div>
  )
}

export default WithBorder