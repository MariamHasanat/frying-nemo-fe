import './card.css'
import Counter from '../counter/counter.component'
import burger from './images/burger.jpg'
import { useState } from 'react';

const Card = ({itemName, itemCategory, itemPrice, itemDescription, itemIngredients, image, i}) => {
  const [counter, setCounter] = useState(0);

  const incCounter = () => {
    if (counter >= 100) return;
    setCounter(counter + 1)
  }

  const decCounter = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  }

  return (
    <div className='card-wrapper' onLoad={(e) => {setTimeout(() => {
      e.target.offsetParent.style.opacity = 1
    }, 50*i);}}>
      <img src={image} alt="" />
      <div className='info'>
      <p className='itemName'>{itemName}</p>
      <p className='itemCategory'>{itemCategory}</p>
      <p className='itemDescription'>{itemDescription}</p>
      <p className='itemIngredients'>{itemIngredients}</p>
      <div className='priceInfo'>
        <p className='itemPrice'>{itemPrice}$</p>
        <Counter counter={counter} incCounter={incCounter} decCounter={decCounter}/>
      </div>
      </div>
    </div>
  )
}

export default Card;