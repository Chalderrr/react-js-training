import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    // This component renders a div with the class "input", a label and an input element.
    return (
        <div className={classes.input}>
            {/* The label's "htmlFor" attribute is set to the id of the input element, and the label text is set to the "label" prop */}
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* The input element is created with the spread operator to apply all properties in the "input" prop and a "ref" attribute is added to the input element */}
            <input ref={ref} {...props.input} />
        </div>
    );
});

export default Input;
