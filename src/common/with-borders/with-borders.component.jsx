import React from "react";
import './with-border.css';


/**
 * @param {{children: React.ReactNode}}props
 * @return
 */

const WithBorder = (props)=>{
    return(
        <div className="border">
        {props.children}
        </div>
    )
};
export default WithBorder;