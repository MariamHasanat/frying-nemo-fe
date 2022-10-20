import './not-found.css';
import image from './images/404.png';
import { useEffect, useState } from 'react';

const NotFoundPage = () => {
  return (
    <div className='not-found-page'>
      <img src={image} alt="" />
    </div>
  );
};

export default NotFoundPage;