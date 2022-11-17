
/** the reduces function
    * @param {Array<{
 *    item:{
 *     id: string;
 *     name: string;
 *     image: string;
 *     description: string;
 *     price: number;
 *     category: string;
 *     ingredients: string[];
 *      }
 *     quantity: number; 
 *   }>} cart 
 * @param {{
 *  type:string;
 *  item:{
 *     id: string;
 *     name: string;
 *     image: string;
 *     description: string;
 *     price: number;
 *     category: string;
 *     ingredients: string[];
 *      }
 * }} action 
 */
const reduce = (cart, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...cart, action.item];
        case "DELETE_ITEM":
            return cart.filter(item => item.item.id !== action.item.id);
        case "INCREMENT_QUANTITY":
            let found = false;
            const newCart1 = cart.map(cartElement => {
                if (cartElement.item.id === action.item.id) {
                    found = true;
                    return { ...cartElement, quantity: cartElement.quantity + 1 };
                }
                else
                    return cartElement;
            });
            if (!found)
                return [...cart, action.item];
            else
                return newCart1;
        case "DECREMENT_QUANTITY":
            let shouldDelete = false;
            const newCart2 = cart.map(cartElement => {
                if (cartElement.item.id === action.item.id) {
                    shouldDelete |= (cartElement.quantity === 1);
                    return { ...cartElement, quantity: cartElement.quantity - 1 };
                }
                else
                    return cartElement;
            });
            if (shouldDelete)
                return cart.filter(cartElement => cartElement.item.id !== action.item.id);
            else
                return newCart2;
        default:
            return cart;
    }
};

export {
    reduce,
};