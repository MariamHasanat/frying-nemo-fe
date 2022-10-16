import './view.css';
import Item from './item/item.component';
const ViewPage = (props) => {
  return (
    <div className="view-page">
      <h1>View Menu Items</h1>
      <Item />
    </div>
  );
};

export default ViewPage;
