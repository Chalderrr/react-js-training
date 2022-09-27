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

    let expenseContent = <p className="no-expense-found">No expenses found</p>;

    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={enteredYear}
                    onChangeExpenseFilter={onChangeExpenseFilterHandler}
                />
                {expenseContent}
            </Card>
        </div>
    );
};

export default Expenses;
