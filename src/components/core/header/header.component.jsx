import './header.css'
import logo from './images/logo.png'
import Timer from './timer/timer.component'

const Header = () => {
  const pathname = window.location.pathname.replace('/', '');
  return (
    <div className='page-header'>
      <div className='logo'>
        <img src={logo} alt="Logo" />
        <p>FRYING NEMO</p>
        <Timer></Timer>
      </div>
      <div className='btns'>
        <a href='/add' className={pathname == 'add' ? `selected` : undefined}>Add</a>
        <a href='/view' className={pathname.includes('view') ? `selected` : undefined}>View</a>
      </div>
    </div>
  )
}

export default Header;