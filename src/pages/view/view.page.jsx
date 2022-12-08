import React, { useEffect, useState, useContext } from "react";
import './view.css';
import Spinner from "../../components/core/spinner/spinner";
import FilterBar from "../../components/view/filter-bar/filter-bar.component";
import Item from "../../components/view/item/item.component";
import { fetchItems } from "../../services/items.service";
import { getCartQuantity } from "../../util/cart";
import { CartContext } from "../../components/providers/cart-provider.component";
import useToggle from "../../hooks/check-box.hook";
import useFilter from "../../hooks/view/filter-items.hook";

/**
* @type {Array<{
* id:string;
* name: string;
* description: string;
* ingredients: string[];
* price: number;
* category: string;
* img: string;
* }>}
*/
const initialItems = [];

const View = () => {
    const [menuItems, setMeuItems] = useState(initialItems);
    const [loading, setLoading] = useState(true);
    const [isTourist, toggleIsTourist] = useToggle(false);
    const cartContext = useContext(CartContext);

    const getMenuItems = async () => {
        setLoading(true);
        const items = await fetchItems();
        setMeuItems(items);
        setLoading(false);
    };

    useEffect(() => {
        getMenuItems();
    }, []);

    const { filteredItems, setMin, setMax } = useFilter(menuItems, isTourist);

    return (
        <div className="div-view">
            <h1>
                Menu Items
            </h1>
            <FilterBar
                isTourist={isTourist}
                toggleIsTourist={toggleIsTourist}
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