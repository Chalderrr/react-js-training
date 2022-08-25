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

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === enteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={enteredYear}
                    onChangeExpenseFilter={onChangeExpenseFilterHandler}
                />
                {/*If we have no expenses render a string else render expenses*/}
                {filteredExpenses.length === 0 ? (
                    <p>No expenses found.</p>
                ) : (
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))
                )}
            </Card>
        </div>
    );
};

export default Expenses;
