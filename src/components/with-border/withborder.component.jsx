import './withborder.css';
import React from 'react';

/**
 * 
 * @param {(children: React.ReactNode;)} props 
 * @returns
 */

const Withborder = props =>(
  <div className='withborder'>
    {props.children}
  </div>
)
export default Withborder;