import React from 'react';
import Card from '../UI/Card';

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card className="bg-white">
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="name" />
                <label htmlFor="age">Age (Years)</label>
                <input type="number" id="age" name="age" />
                <button type="submit">Add User</button>
            </form>
        </Card>
    );
};

export default AddUser;
