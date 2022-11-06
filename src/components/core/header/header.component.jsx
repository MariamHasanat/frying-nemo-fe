import './header.css';
import nemo from '../../../images/nemo.png'
import { Link, useNavigate, useLocation, NavLink } from 'react-router-dom';
const Header = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div>
            <div className='header'>
                {/* <img src={props.img} alt='logo' width={props.width} /> */}
                <img src={nemo} alt='logo' width={100} onClick={() => navigate('/')} />  {/* go to home page when clicking on logo */}
                {props.text ? <span>{props.text}</span> : null}
                <span>
                    <Link to="/add" className={location.pathname === '/add'? 'active nemo-button': 'nemo-button'}>add</Link>
                    <NavLink to="/view" className={(location.pathname === '/view' || location.pathname === '/view/' )? 'active nemo-button': 'nemo-button'}>view</NavLink>
                </span>
            </div>
            <hr />
        </div>
    );
};
export default Header;