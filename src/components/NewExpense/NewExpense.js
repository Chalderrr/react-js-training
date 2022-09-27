import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [hideForm, setHideForm] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setHideForm(false);
    };

    const handleFormVisibility = () => {
        setHideForm(true);
    };

    const stopEditingHandler = () => {
        setHideForm(false);
    };

    return (
        <div className="new-expense">
            {!hideForm && (
                <button onClick={handleFormVisibility}>Add New Expense</button>
            )}
            {hideForm && (
                <ExpenseForm
                    onSaveExpenseData={onSaveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
