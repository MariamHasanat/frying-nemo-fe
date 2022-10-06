import './header.css'
import logo from './images/logo.png'

const Header = () => {
  return (
    <div class='header'>
      <img src={logo} alt="Logo" />
      <p>MY RESTURANT</p>
      <hr />
    </div>
  )
}

export default Header;