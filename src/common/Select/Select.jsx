import React from 'react'
import './select.css'

const Select = (props) => {
  const { label, ...optionProps } = props;
  return (
   
       label ? (
          <label>
            <span>{label}</span>
            &nbsp;
            {optionProps.required && <span>*</span>}
          </label>) : null
      
     <select {...optionProps}/>
    
  )
}

export default Select