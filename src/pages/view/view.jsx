import React, { useEffect, useState } from "react";
import Input from "../../components/common/input/input.component";
import Item from "../../components/common/item/item.component";
import Spinner from "../../core/spinner/spinner";
import './view.css';

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
const initialItems = [];
const View = (props) => {
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
        return item.name.toLowerCase().includes(search.toLowerCase().trim());
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

                            filteredItems
                                .map((item, index) => {
                                    return <Item item={item} key={item.name + index} />;
                                })
                        }
                    </div>
            }

        </div>
    );

};

export default View;