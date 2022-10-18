import React from 'react';

const Card = (props) => {
    // return <div className={`${props.className}`}>{props.children}</div>;
    return (
        <div className="bg-white shadow-md rounded-lg p-4 my-8 mx-auto max-w-2xl w-[90%]">
            {props.children}
        </div>
    );
};

export default Card;
