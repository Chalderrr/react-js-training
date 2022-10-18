import React from 'react';
import Card from '../UI/Card';

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card className="bg-white shadow-md rounded-lg p-4 my-8 mx-auto max-w-2xl w-[90%]">
            <form onSubmit={addUserHandler}>
                <label htmlFor="username" className="block mb-3 font-bold">
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    name="name"
                    className="block w-full border border-[#cccccc] focus:border-[#4f005f] mb-3"
                />
                <label htmlFor="age" className="block mb-3 font-bold">
                    Age (Years)
                </label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    className="block w-full border border-[#cccccc] focus:border-[#4f005f] mb-3"
                />
                <button type="submit">Add User</button>
            </form>
        </Card>
    );
};

export default AddUser;
