import React, { useContext } from "react";
import './view.css';
import Spinner from "../../components/core/spinner/spinner";
import FilterBar from "../../components/view/filter-bar/filter-bar.component";
import Item from "../../components/view/item/item.component";
import { getCartQuantity } from "../../util/cart";
import { CartContext } from "../../components/providers/cart-provider.component";
import useGetItems from "../../hooks/get-items/get-items.hook";

const View = () => {
    const { loading, menuItems } = useGetItems();
    const cartContext = useContext(CartContext);

    return (
        <div className="div-view">
            <h1>
                Menu Items
            </h1>
            <FilterBar
            // setMin={setMin}
            // setMax={setMax}
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

                            (menuItems.length > 0)
                                ? menuItems
                                    .map((item, index) => {
                                        return <Item
                                            item={item}
                                            key={item.name + index}
                                            cartQuantity={getCartQuantity(item._id, cartContext.cart)}
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