import React, { useRef, useState } from 'react';

import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);

    // Use ref for direct access to the input element
    const amountInputRef = useRef();

    // Submit event handler for the form
    const submitHandler = (event) => {
        event.preventDefault();

        // Get the entered value from the input element
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        // Validate that the entered value is not empty and between 1 and 5
        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            // If invalid, update the state and return
            setAmountIsValid(false);
            return;
        }

        // If valid, call the parent component's onAddToCart function
        // and pass the amount as an argument
        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
};

export default MealItemForm;
