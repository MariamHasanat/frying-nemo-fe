import React, { useEffect, useState, useContext } from "react";
import './view.css';
import { useSearchParams } from "react-router-dom";
import Spinner from "../../components/core/spinner/spinner";
import FilterBar from "../../components/view/filter-bar/filter-bar.component";
import Item from "../../components/view/item/item.component";
import { fetchItems } from "../../services/items.service";
import { getCartQuantity } from "../../util/cart";
import { CartContext } from "../../components/providers/cart-provider.component";

/**
* @type {Array<{
* id:string;
* name: string;
* description: string;
* Ingredients: string[];
* price: number;
* category: string;
* img: string;
* }>}
*/
const initialItems = [];

const View = () => {
    const [menuItems, setMeuItems] = useState(initialItems);
    const [loading, setLoading] = useState(true);
    const [params, setParam] = useSearchParams();
    const [min, setMin] = useState(null);
    const [max, setMax] = useState(null);
    const cartContext = useContext(CartContext);
    const searchParFromURL = params.get('searchTerms') || '';
    const categoriesFromURL = params.getAll('categories') || [];

    const getMenuItems = async () => {
        setLoading(true);
        const items = await fetchItems();
        setMeuItems(items);
        setLoading(false);
    };

    useEffect(() => {
        getMenuItems(); 
    }, []);

    /**
     * @param {string} name 
     * @param {string | string[]} value 
     */
    const useParam = (name, value) => {
        const newParam = new URLSearchParams(params);
        newParam.delete(name);

        if (Array.isArray(value)) {
            if (value.length > 0) {

                value.forEach(item => {
                    newParam.append(name, item);
                });
            }
        }
        else
            newParam.set(name, value);

        setParam(newParam);
    };


    const filteredItems = menuItems.filter((item) => {
        let match = true;
        const check = str => str.toLowerCase().includes(searchParFromURL.toLowerCase().trim());
        match = (
            check(item.name) ||
            check(item.description) ||
            item.ingredients.some(ingredient => check(ingredient))
        );
        if (categoriesFromURL.length > 0)
            match &= (categoriesFromURL.includes(item.category));
        if (min !== null && min !== '')
            match &= (item.price >= min);
        if (max !== null && max !== '')
            match &= (item.price <= max);
        return match;
    });

    return (
        <div className="div-view">
            <h1>
                Menu Items
            </h1>
            <FilterBar
                useParam={useParam}
                params={params}
                setParam={setParam}
                searchParFromURL={searchParFromURL}
                categoriesFromURL={categoriesFromURL}
                setMin={setMin}
                setMax={setMax}
            />
            {
                loading
                    ?
                    <div style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}>
                        <Spinner />
                    </div>
                    :
                    <div className="items">
                        {

                            (filteredItems.length > 0)
                                ? filteredItems
                                    .map((item, index) => {
                                        return <Item
                                            item={item}
                                            key={item.name + index}
                                            cartQuantity={getCartQuantity(item.id, cartContext.cart)}
                                        />;
                                    })
                                : <div className="empty">The is no any meal</div>

                        }
                    </div>
            }

        </div>
    );

};

export default View;