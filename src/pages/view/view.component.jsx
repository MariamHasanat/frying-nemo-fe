import MenuItem from './cards/nenu-item/menu-item.component';
import './view.css' ;

const ViewPage = () => {
  return (
    <div className='view'>
      <h1>View Menu Items</h1>
      <div className='items'>
        <MenuItem/>
      </div>
    </div>
  );
};

export default ViewPage;
