import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Item from "../../components/view/filter-bar/item/item.component";
import FilterBar from "../../components/view/filter-bar/filter-bar.component";
import Spinner from "../../core/spinner/spinner";
import './view.css';
import { CATEGORIES } from "../../data/constants";

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
    const [params, setParam] = useSearchParams();

    const searchParFromURL = params.get('searchTerms') || '';
    const categoryParFromURL = params.get('category') || '';

    useEffect(() => {
        getMenuItems();
    }, []);

    const getMenuItems = () => {
        setLoading(true);
        setTimeout(() => {
            const items = JSON.parse(localStorage.categoriesArray || '[]');
            setMeuItems(items);
            setLoading(false);
        }, 100);
    };

    const filteredItems = menuItems.filter((item) => {
        let match = true;
        const check = str => str.toLowerCase().includes(searchParFromURL.toLowerCase().trim());
        match = (
            check(item.name) ||
            check(item.description) ||
            item.Ingredients.some(ingredient => check(ingredient))
        );
        if (categoryParFromURL && categoryParFromURL !== 'All') {
            match = match && (CATEGORIES.includes(categoryParFromURL));
        }

        return match;
    });

    return (
        <div className="div-view">
            <h1>
                Menu Items
            </h1>
            <FilterBar
                params={params}
                setParam={setParam}
                searchParFromURL={searchParFromURL}
                categoryParFromURL={categoryParFromURL}
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