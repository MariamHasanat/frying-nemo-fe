import MenuItem from './cards/nenu-item/menu-item.component';
import './view.css' ;

const ViewPage = (props) => {
  return (
    <div className='view'>
      <h1>View Menu Items</h1>
      <div className='items'>
        <MenuItem value = {props.value}/>
      </div>
    </div>
  );
};

export default ViewPage;
