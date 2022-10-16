import './header.css';

const Handel = (props) => {
  return (
    <div className='handel-group'>
      <img className='img' src='./fish.png' />
      <h1>Seafood Restaurant</h1>
      <div>
        <div><button className={props.currentPage === ('add') ? 'curent' : ''} onClick={() => props.onNavigate('add')} >Add</button></div>
        <div><button className={props.currentPage === ('view') ? 'curent' : ''} onClick={() => props.onNavigate('view')}>View</button></div>
      </div>
    </div>
  );
};

export default Handel; 