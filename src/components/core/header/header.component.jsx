import { useContext } from 'react';
import { UserContext } from '../../../App';
import './header.css'
import logo from './images/logo.png'
import Timer from './timer/timer.component'

const Header = () => {
  const {user} = useContext(UserContext)
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
        {user && <div className='user-info'>
          <img src="https://www.nicepng.com/png/full/137-1379898_anonymous-headshot-icon-user-png.png" alt="User Image" />
          <p>{user.fullName}</p>
        </div>}
        {user && <a href='/login' className='logout' onClick={() => sessionStorage.clear()}>Logout</a>}
      </div>
    </div>
  )
}

export default Header;