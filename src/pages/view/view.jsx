import React, { useEffect, useState } from "react";
import Input from "../../components/common/input/input.component";
import Item from "../../components/common/item/item.component";
import Spinner from "../../core/spinner/spinner";
import './view.css';

/**
* @type {Array<{
    * name: string;
    * description: string;
    * Ingredients: string[];
    * price: number;
    * categories: string;
    * img: string;
    * }>}
    */
const initialItems = [];

const View = () => {
    const [menuItems, setMeuItems] = useState(initialItems);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const getMenuItems = () => {
        setLoading(true);
        setTimeout(() => {
            const items = JSON.parse(localStorage.categoriesArray || '[]');
            setMeuItems(items);
            setLoading(false);
        }, 1000);
    };
    useEffect(() => {
        getMenuItems();
    }, []);

    const filteredItems = menuItems.filter((item) => {
        let match = true;
        const check = str => str.toLowerCase().includes(search.toLowerCase().trim());
        match = (
            check(item.name) ||
            check(item.description) ||
            item.Ingredients.some(ingredient => check(ingredient))
        );

        return match;
    });


    return (
        <div className="div-view">
            <h1>
                Menu Items
            </h1>
            <Input
                value={search}
                placeholder={'Search'}
                onChange={e => setSearch(e.target.value)}
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
                                        return <Item item={item} key={item.name + index} />;
                                    })
                                : <div className="empty">The is no any meal</div>

                        }
                    </div>
            }

        </div>
    );

};

export default View;