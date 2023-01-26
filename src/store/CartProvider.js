import { useState, useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    // Check if the action type is 'ADD_CART_ITEM'
    if (action.type === 'ADD_CART_ITEM') {
        // Calculate the updated total amount by adding the price of the item multiplied by its amount to the current total amount
        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;

        // Find the index of the existing item in the cart with the same id as the one being added
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        // Get the existing item from the cart
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        // If the item already exists in the cart, update its amount
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            // If the item does not already exist in the cart, add it to the items array
            updatedItems = state.items.concat(action.item);
        }

        // Return the updated state with the updated items and total amount
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    // Check if the action type is 'REMOVE_CART_ITEM'
    if (action.type === 'REMOVE_CART_ITEM') {
        // Find the index of the existing item in the cart with the same id as the one being removed
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );

        // Get the existing item from the cart
        const existingItem = state.items[existingCartItemIndex];

        // Calculate the updated total amount by subtracting the price of the item from the current total amount
        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;

        // If the item amount is 1, remove it from the items array
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
            // If the item amount is greater than 1, decrement its amount by 1
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        // Return the updated state with the updated items and total amount
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    // If the action type is not 'ADD_CART_ITEM' or 'REMOVE_CART_ITEM', return the default cart state
    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD_CART_ITEM', item: item });
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE_CART_ITEM', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
