import React, { useEffect, useState } from "react";
import Item from "../../components/common/item/item.component";
import Spinner from "../../core/spinner/spinner";
import './view.css';
const View = (props) => {
    const [menuItems, setMeuItems] = useState([]);
    const [loading, setLoading] = useState(true);
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
    return (
        <div className="div-view">
            <h1>
                View Page
            </h1>
            {
                loading
                    ?
                    <div style={{ marginTop :"100px",display: "flex", justifyContent: "center" }}>
                        <Spinner />
                    </div>
                    :
                    <div className="items">
                        {
                            menuItems.map((item, index) => {
                                return <Item item={item} key={item.name + index} />;
                            })
                        }
                    </div>
            }

        </div>
    );

};

export default View;