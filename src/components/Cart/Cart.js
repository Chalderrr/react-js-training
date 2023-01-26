import { useContext } from 'react';

import classes from './Cart.module.css';

import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    //totalAmount variable holds the total amount of all items in the cart
    const totalAmount = `£${cartCtx.totalAmount.toFixed(2)}`;
    // hasItems variable holds a boolean indicating whether the cart has any items or not
    const hasItems = cartCtx.items.length > 0;

    //remove item from cart
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };
    //add item to cart
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    //generating list of cart items
    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
            {cartCtx.items.length === 0 && <p>The cart is empty!</p>}
        </ul>
    );
    //rendering modal with cart items and total amount
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes['button--alt']}
                    onClick={props.onClose}
                >
                    Close
                </button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;
