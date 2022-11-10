import React from 'react'
import './with-borders.css'

const WithBorders = (props) => {
  return (
    <div className='with-borders'>
      {props.children}
    </div>
  )
}

export default WithBorders
