import './ExpenseFilter.css';
import { useState } from 'react';

const ExpenseFilter = (props) => {
    const [enteredYear, setEnteredYear] = useState('');

    const filterChangeHandler = (event) => {
        props.onChangeExpenseFilter(event.target.value);
        setEnteredYear(event.target.value);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select name="" id="" onChange={filterChangeHandler}>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;
