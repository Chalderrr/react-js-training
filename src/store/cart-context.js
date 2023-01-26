import React from 'react';

const CartContext = React.createContext({
    // Array of items in the cart
    items: [],
    // Total amount of the items in the cart
    totalAmount: 0,
    // Function to add an item to the cart
    addItem: (item) => {},
    // Function to remove an item from the cart
    removeItem: (id) => {},
});
export default CartContext;
