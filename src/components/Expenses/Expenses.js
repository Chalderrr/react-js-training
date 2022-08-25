import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
    const [enteredYear, setEnteredYear] = useState('2020');

    const onChangeExpenseFilterHandler = (selectedYear) => {
        setEnteredYear(selectedYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={enteredYear}
                    onChangeExpenseFilter={onChangeExpenseFilterHandler}
                />
                {props.expenses.map((expense) => (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
};

export default Expenses;
