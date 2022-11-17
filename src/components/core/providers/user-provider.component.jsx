import React, { useReducer, useState } from "react";

export const UserContext = React.createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));

  const updateUser = (user) => {
    setUser(user);
    sessionStorage.setItem("user", JSON.stringify(user));
  };

  const initialState = [];

  const reducer = (cart, action) => {
    switch (action.type) {
      case `INCREMENT`: {
        let found = false;
        let newCart = cart.map((cartItem) => {
          if (cartItem.item.id == action.item.id) {
            found = true;
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          } else return cartItem;
        });
        const newItem = { item: action.item, quantity: action.quantity };
        if (!found) {
          console.log('ct', newCart)
          console.log('add new card', [...newCart, newItem])
          newCart = [...newCart, newItem];
        }
        return newCart;
      }
      case `DECREMENT`: {
        let newCart = cart.map((cartItem) => {
          if (cartItem.item.id == action.item.id) return { ...cartItem, quantity: cartItem.quantity - 1 }
          else return cartItem;
        });
        newCart = newCart.filter(cartItem => cartItem.quantity != 0)
        return newCart;
      }
      default:
        throw new Error();
    }
  };

  const [cart, dispatch] = useReducer(reducer, initialState);
  console.log(`cart:`, cart);

  return (
    <UserContext.Provider value={{ user, setUser: updateUser, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
