import './card.css';

const Card = (props) => {
    return (
        <div className='myCard'>
            {props.children}
        </div>
    )

};
export default Card;