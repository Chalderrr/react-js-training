import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
    const onChangeExpenseFilterHandler = (enteredFilterData) => {
        console.log(enteredFilterData);
    };

    return (
        <div className="expenses">
            <ExpenseFilter
                onChangeExpenseFilter={onChangeExpenseFilterHandler}
            />
            <Card>
                <ExpenseItem
                    title={props.expenses[0].title}
                    amount={props.expenses[0].amount}
                    date={props.expenses[0].date}
                />
                <ExpenseItem
                    title={props.expenses[1].title}
                    amount={props.expenses[1].amount}
                    date={props.expenses[1].date}
                />
                <ExpenseItem
                    title={props.expenses[2].title}
                    amount={props.expenses[2].amount}
                    date={props.expenses[2].date}
                />
            </Card>
        </div>
    );
};

export default Expenses;
