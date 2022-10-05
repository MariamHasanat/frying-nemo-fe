import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div>
        <img src="images/logo.svg" alt="logo" width={60} />
        <span id='app-title'>Frying Nemo</span>
      </div>
    </div>
  );
};

export default Header;