import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (
            enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            setError({
                title: 'Invalid input',
                message: 'Please make sure username and age not empty',
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age',
            });

            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        if (event.target.value.length > 0) {
            setEnteredUsername(event.target.value);
        }
    };

    const ageChangeHandler = (event) => {
        if (event.target.value.length > 0) {
            setEnteredAge(event.target.value);
        }
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onReset={errorHandler}
                />
            )}
            <Card>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username" className="block mb-2 font-bold">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="name"
                        value={enteredUsername}
                        className="block w-full border border-[#cccccc] focus:border-[#4f005f] mb-3"
                        onChange={usernameChangeHandler}
                    />
                    <label htmlFor="age" className="block mb-2 font-bold">
                        Age (Years)
                    </label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={enteredAge}
                        className="block w-full border border-[#cccccc] focus:border-[#4f005f] mb-3"
                        onChange={ageChangeHandler}
                    />
                    <Button
                        type="submit"
                        className="border border-[#4f005f] text-white bg-[#4f005f] py-1 px-4 hover:bg-[#741188] hover:border-[#741188]"
                        onClick={props.onClick}
                    >
                        Add User
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
