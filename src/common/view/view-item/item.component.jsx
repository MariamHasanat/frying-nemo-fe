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

const ViewItemPage = (props) => {
  return (
    <div className="view-item-page">
      <h1>Menu item </h1>
    </div>
  );
};

export default ViewItemPage;
