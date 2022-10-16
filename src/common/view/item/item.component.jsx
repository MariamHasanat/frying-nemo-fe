import '.././item/item.css';

/**
 * 
 * @param {{
 * data:{
 * name: string;
 * description: string;
 * price: number;
 * category: string;
 * ingredients: string[];
 * }
 * }} props 
 * 
 */

const Items = (props) => {
  return (
    <div className="item-page">
      <div>
        <img src="https://th.bing.com/th/id/R.1f2833b08b926e8ea9807cb7f6ce2b2f?rik=JOGqAAN8Ff04FQ&pid=ImgRaw&r=0" alt="pizza hut" />
      </div>
      <div className="details">
        <h2>{props.data.name}</h2>
        <p>{props.data.description}</p>
        <p className="ingredients">{props.data.ingredients}</p>

      </div>
      <div className="price">
        <h2>{props.data.price}</h2>
      </div>
    </div>
  );
};

export default Items;
