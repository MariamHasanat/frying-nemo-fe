const getCartQuantity = (id, cart) => {
    const newCartItem = cart.find((carItem) => {
        return (carItem.item.id === id);
    });
    if (newCartItem) {
        return newCartItem.quantity;
    }
    else {
        return 0;
    }
};

export {
    getCartQuantity,
};