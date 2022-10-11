import './header.css';

const Header = (props) => {
    return (
        <header className='header'>
            <div className='left'>
                <img src='./images/nemoInHeader.png' alt="nemo image" />
                <h2>
                    Frying Nemo
                </h2>
            </div>
            <div className='right'>
                <button onClick={() => props.onNavigate("add")}>Add</button>
                <button onClick={() => props.onNavigate("view")}>view</button>
            </div>
        </header>
    );
};
export default Header;