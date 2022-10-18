import '.././item/item.css';

/**
 * 
 * @param {{
 * data:{
 * name: string;
 * description: string;
 * price: number;
 * image:string;
 * category: string;
 * ingredients: string[];
 * }
 * }} props 
 * 
 */

const Items = (props) => {
  return (
    <div className="item-page">
      <div className='image'>
        <img src={props.data.image} alt="pizza hut" />
      </div>
      <div className="details">
        <h2>{props.data.name}</h2>
        <p>{props.data.description}</p>
        <p className="ingredients">{props.data.ingredients}</p>

      </div>
      <div className="price">
        <h3>{props.data.price}</h3>
      </div>
    </div>
  );
};

export default Items;
