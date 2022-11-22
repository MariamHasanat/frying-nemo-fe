import React from 'react';
import './view-item.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../../components/view/item/item.component';
import { getItem } from '../../services/some-functions';
import Spinner from '../../components/core/spinner/spinner';
import { getCartQuantity } from '../../util/cart';
import { useContext } from 'react';
import { CartContext } from '../../components/providers/cart-provider.component';

const ViewItemPage = () => {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState();
    const cartContext = useContext(CartContext);
    useEffect(() => {
        setLoading(true);
        const tempItem = getItem(params.id);
        setItem(tempItem);
        setLoading(false);

    }, [params.id]);

    return (
        <div className='view-item-page'>
            <h1>View Item Page</h1>
            {
                loading && item !== null
                    ? <Spinner />
                    : <Item
                        cart={cartContext.cart}
                        item={item}
                        cartQuantity={getCartQuantity(item.id, cartContext.cart)}
                    />
            }
        </div>
    );
};

export default ViewItemPage;