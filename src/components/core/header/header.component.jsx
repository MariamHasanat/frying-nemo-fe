import React from 'react';
import './header.css';

/**
 * 
 * @param {React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {text:string;}} props 
 * @returns 
 */

const Header = (props) => {
  return (
    <div>
      <div className='header'>
        <img src={props.img} alt='logo' width={props.width} />
        {props.text ? <span>{props.text}</span> : null}
      
      </div>
      <hr/>
    </div>
  );
};
export default Header;