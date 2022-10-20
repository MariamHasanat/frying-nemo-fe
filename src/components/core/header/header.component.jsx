import './header.css'
import logo from './images/logo.png'
import Timer from './timer/timer.component'

const Header = ({pageId, changeNav}) => {
  return (
    <div class='header'>
      <div className='logo'>
        <img src={logo} alt="Logo" />
        <p>FRYING NEMO</p>
        <Timer></Timer>        
      </div>
      <div className='btns'>
        <button className={pageId == 0 && `selected`} onClick={(() => changeNav(0))}>Add</button>
        <button className={pageId == 1 && `selected`} onClick={(() => changeNav(1))}>View</button>
        <button className={pageId == 2 && `selected`} onClick={(() => changeNav(2))}>404</button>
      </div>
    </div>
  )
}

export default Header;