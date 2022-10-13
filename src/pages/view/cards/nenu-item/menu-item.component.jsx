import React from 'react' ;
import './menu-item.css' ;

const MenuItem = () => {
  const items = JSON.parse (localStorage.getItem ('menuItems')) ;
  return (
    <div >
      {
        items.map ((item , index) => {return(
          <div key={index} className='menuitem'>
            <span>Name : {item.name}</span>
            <span>Price : {item.price}</span>
            <span>Description : {item.discription}</span>
            <span>Its a : {item.catigorie}</span>
            <div>Ingredients : {item.ingredients.map ((ingredient , idx) => {return(<span key={index + idx}>{ingredient}</span>);})}</div>
          </div>
        );})
      }
    </div>
  )
}

export default MenuItem ;