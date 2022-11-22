import React from 'react';
import './view-item.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../../components/view/item/item.component';
import { getItem } from '../../services/some-functions';
import Spinner from '../../components/core/spinner/spinner';
import { getCartQuantity } from '../../util/cart';


/**
 * 
 * @param {{
 *      dispatch: React.Dispatch<{
 *          type: string;
 *          item: {
*           id: string;
*           name: string;
*           image: string;
*           description: string;
*           price: number;
*           category: string;
*           ingredients: string[];
*           };
*       }>
*       cart: Array<{
*           quantity: number;
*           item: {
*               id: string;
*               name: string;
*               image: string;
*               description: string;
*               price: number;
*               category: string;
*               ingredients: string[];
*           }>;
 * }} props 
 * @returns 
 */
const ViewItemPage = (props) => {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState();
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
                        dispatch={props.dispatch}
                        cart={props.cart}
                        item={item}
                        cartQuantity={getCartQuantity(item.id, props.cart)}
                    />
            }
        </div>
    );
};

export default ViewItemPage;