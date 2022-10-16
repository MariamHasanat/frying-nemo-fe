import './viewContainerStyle.css';
import './item/item.jsx'

const ViewPage = (props) => {
  return (
    <div className='view-container'>
      <h1 className='h1'>View Menu Items</h1>
      <Item />
    </div>
  );
};

export default ViewPage;