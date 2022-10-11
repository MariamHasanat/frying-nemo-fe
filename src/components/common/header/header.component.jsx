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
                <nav>

                    <button
                        onClick={() => props.onNavigate("add")}
                        className={props.currentPage === 'add' ? 'current' : ''}
                    >
                        Add
                    </button>
                    <button
                        onClick={() => props.onNavigate("view")}
                        className={props.currentPage === 'view' ? 'current' : ''}
                    >
                        view
                    </button>
                </nav>
            </div>
        </header>
    );
};
export default Header;