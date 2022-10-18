import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card className="bg-white shadow-md rounded-lg p-4 my-8 mx-auto max-w-2xl w-[90%]">
            <form onSubmit={addUserHandler}>
                <label htmlFor="username" className="block mb-2 font-bold">
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    name="name"
                    className="block w-full border border-[#cccccc] focus:border-[#4f005f] mb-3"
                />
                <label htmlFor="age" className="block mb-2 font-bold">
                    Age (Years)
                </label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    className="block w-full border border-[#cccccc] focus:border-[#4f005f] mb-3"
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
    );
};

export default AddUser;
