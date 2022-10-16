import { useState } from 'react';
import ItemCard from '../../components/item-card/item-card.component';
import './view.css';

const getMenu = () => JSON.parse(localStorage.getItem('menu') || '[]');

const ViewPage = (props) => {
    const [menu] = useState(getMenu);
    return (
        <div className='view-page'>
            <h1>view items</h1>
            <div className="main">
                {menu.map((item, index) => {
                    return <ItemCard {...item} key={item + index}/>
                })}
            </div>
        </div>
    );
};

export default ViewPage;