import './view.css';
import Card from '../../components/view/common/card/card.component';

const ViewPage = (props) => {
  return (
    <div className='view-page'>
      <div>
        <Card itemName='Double Cheese Potato Burger' itemCategory='Burger' itemPrice='5.99'/>
      </div>
    </div>
  );
};

export default ViewPage;