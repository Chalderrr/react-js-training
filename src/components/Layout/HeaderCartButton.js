import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    // get the items from the context
    const { items } = cartCtx;

    // calculate the total number of items in the cart
    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    // build the classname for the button
    const btnClasses = `${classes.button} ${
        btnIsHighlighted ? classes.bump : ''
    }`;

    // useEffect to handle the button highlight
    useEffect(() => {
        // if there are no items in the cart, exit the function
        if (cartCtx.items.length === 0) {
            return;
        }
        // set the button as highlighted
        setBtnIsHighlighted(true);

        // set a timeout to remove the highlight after 300ms
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        // cleanup function to clear the timeout
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    // return the button element
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
