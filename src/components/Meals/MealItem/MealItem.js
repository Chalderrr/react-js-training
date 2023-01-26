import { useContext } from 'react';

import classes from './Mealitem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
    // useContext hook to access the CartContext
    const cartCtx = useContext(CartContext);

    // format the price as a string with a £ symbol and 2 decimal places
    const price = `£${props.price.toFixed(2)}`;

    // function that adds the meal to the cart using the addItem function from the CartContext
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
            </div>
        </li>
    );
};

export default MealItem;
