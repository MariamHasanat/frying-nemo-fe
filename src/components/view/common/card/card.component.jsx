import './card.css'
import Counter from '../counter/counter.component'
import burger from './images/burger.jpg'

const Card = ({itemName, itemCategory, itemPrice}) => {
  return (
    <div className='card-wrapper'>
      <img src={burger} alt="" />
      <div className='info'>
      <p className='itemName'>{itemName}</p>
      <p className='itemCategory'>{itemCategory}</p>
      <div className='priceInfo'>
        <p className='itemPrice'>{itemPrice}$</p>
        <Counter/>
      </div>
      </div>
    </div>
  )
}

export default Card;