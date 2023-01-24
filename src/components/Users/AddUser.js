import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        // If both username and age have length equaling zero, set the setError sate to the passed object
        if (
            enteredName.trim().length === 0 ||
            enteredUserAge.trim().length === 0
        ) {
            setError({
                title: 'Invalid input',
                message: 'Please make sure username and age not empty',
            });
            return;
        }

        // If the age is less than 1, set the setError state to the passed object
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age',
            });

            return;
        }

        // pass enteredUsername and enteredAge to the onAddUser callback
        props.onAddUser(enteredName, enteredUserAge);

        // This is generally bad but it is allowed in this context, we shouldn't reset values with Refs
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {/*Checking the error exists and is not null before rendering it*/}
            {error && (
                // This does not get rendered inside Wrapper component, it now renders in specified React.Fragments
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
                        className="block w-full border border-[#cccccc] focus:border-[#4f005f] mb-3"
                        ref={nameInputRef}
                    />
                    <label htmlFor="age" className="block mb-2 font-bold">
                        Age (Years)
                    </label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        className="block w-full border border-[#cccccc] focus:border-[#4f005f] mb-3"
                        ref={ageInputRef}
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
        </Wrapper>
    );
};

export default AddUser;
