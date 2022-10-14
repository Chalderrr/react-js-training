import React, { useState } from 'react';

import AddUser from './AddUser';

const UserForm = (props) => {
    return (
        <div>
            <p>This is the user form</p>
            <label>Username</label>
            <input type="text" name="name" />
            <label>Age</label>
            <input type="text" name="age" />
            <AddUser />
        </div>
    );
};

export default UserForm;
