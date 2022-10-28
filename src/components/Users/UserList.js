import React from 'react';
import Card from '../UI/Card';

const UserList = (props) => {
    return (
        <Card>
            <ul>
                {props.users.map((user) => (
                    <li
                        className="border border-gray-300 py-2 px-4"
                        key={user.id}
                    >
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UserList;
