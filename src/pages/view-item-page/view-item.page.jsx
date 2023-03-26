import React from 'react';
import './view-item.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Item from '../../components/view/item/item.component';
import { fetchItem } from '../../services/items.service.js';
import Spinner from '../../components/core/spinner/spinner';
import { getCartQuantity } from '../../util/cart';
import { useContext } from 'react';
import { CartContext } from '../../components/providers/cart-provider.component';

const ViewItemPage = () => {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [currentItem, setCurrentItem] = useState();
    const cartContext = useContext(CartContext);

    useEffect(() => {
        setLoading(true);
        fetchItem(params._id)
            .then((item) => {
                if (item === null)
                    navigate("/404", { replace: true });
                else
                    setCurrentItem(item);
                setLoading(false);
            });
    }, []);

    return (
        <div className='view-item-page'>
            <h1>View Item Page</h1>
            {
                loading || currentItem === null
                    ? <Spinner />
                    : <Item
                        cart={cartContext.cart}
                        item={currentItem}
                        cartQuantity={getCartQuantity(currentItem._id, cartContext.cart)}
                    />
            }
        </div>
    );
};

export default ViewItemPage;