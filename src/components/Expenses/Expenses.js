import React, { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;
