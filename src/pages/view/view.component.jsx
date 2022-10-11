import Item from './item/item.component';
import './view.css';

const ViewPage = (props) => {
  return (
    <div className="view-page">
      <h1>View Menu Items</h1>
      <Item />
    </div>
  );
};

export default ViewPage;