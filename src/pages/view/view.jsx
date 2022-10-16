import React, { useState } from "react";
import Item from "../../components/common/item/item.component";
import './view.css';
const View = (props) => {
    let arr = JSON.parse(localStorage.categoriesArray || '[]') ;
    /**
     * @type {[Array, Function]} Loading 
     */
    const [menuItems] = useState(arr);
    return (
        <div className="div-view">
            <h1>
                View Page
            </h1>
            <div className="items">
                {
                    menuItems.map((item, index) => {
                        return <Item item={item} key = {item.name + index} />;
                    })
                }
            </div>
        </div>
    );

};

export default View;