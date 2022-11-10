import './with-borders.css';

const WithBorders = props => (
    <div className='withBorder'>
        {props.children}
        <p>duplicated</p>
        {props.children}
    </div>
);

export default WithBorders;