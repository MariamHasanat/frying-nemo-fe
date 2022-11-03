import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterBar from "../../components/view/filter-bar/filter-bar.component";
import Item from "../../components/view/item/item.component";
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
    const [params, setParam] = useSearchParams();

    const searchParFromURL = params.get('searchTerms') || '';
    const categoriesFromURL = params.getAll('categories') || [];

    useEffect(() => {
        getMenuItems();
    }, []);
    /**
     * 
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
        if(categoriesFromURL.length > 0)
            match &= (categoriesFromURL.includes(item.categories));

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