import './not-found.css';
import image from './images/404.png';
import { useEffect, useState } from 'react';

const NotFoundPage = () => {
  return (
    <div className='not-found-page'>
      <img src={image} alt="" />
      <p className='msg1'>Page not found!</p>
      <p className='msg2'>You're in the wrong place</p>
    </div>
  );
};

export default NotFoundPage;