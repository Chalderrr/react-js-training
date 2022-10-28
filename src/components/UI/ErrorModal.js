import React from 'react';

import Button from './Button';

const ErrorModal = (props) => {
    return (
        <div>
            <div
                className="fixed top-0 left-0 w-full h-screen z-10 bg-[rgba(0,0,0,0.75)]"
                onClick={props.onReset}
            />
            <div className="bg-white shadow-md rounded-lg mx-auto max-w-2xl w-[90%] fixed top-[30vh] left-1/2 -translate-x-1/2 w-[80%] z-[100] overflow-hidden">
                <header className="bg-[#4f005f] p-8">
                    <h2 className="text-white m-0 text-xl font-bold uppercase">
                        {props.title}
                    </h2>
                </header>
                <div className="p-8">
                    <p>{props.message}</p>
                </div>
                <footer className="flex justify-end p-8">
                    <Button
                        type="button"
                        className="border border-[#4f005f] text-white bg-[#4f005f] py-1 px-4 hover:bg-[#741188] hover:border-[#741188]"
                        onClick={props.onReset}
                    >
                        Okay
                    </Button>
                </footer>
            </div>
        </div>
    );
};

export default ErrorModal;
