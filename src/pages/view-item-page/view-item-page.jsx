import React from 'react';
import './view-item-page.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../../components/view/item/item.component';
import { getItem } from '../../services/some-functions';
import Spinner from '../../core/spinner/spinner';
/**
 * @type {Array<{
 * name: string;
 * description: string;
 * ingredients: string[];
 * price: number;
 * category: string;
 * image: string;
 * }>}
 */
const ViewItemPage = () => {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState();
    useEffect(() => {
        setLoading(true);
        const tempItem = getItem(params.id);
        if (params.id) {
            setItem(tempItem);
            setLoading(false);
        }
    }, [params.id]);
    
    return (
        <div className='view-item-page'>
            <h1>View Item Page</h1>
            {
                loading
                    ? <Spinner />
                    : <Item item={item} />
            }
        </div>
    );
};

export default ViewItemPage;