import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';

const emailReducer = (state, action) => {
    // Check the state action.type is equal to 'USER_INPUT'
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.includes('@') };
    }

    // Check the state action.type is equal to 'INPUT_BLUR'
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.includes('@') };
    }

    return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.trim().length > 6 };
    }

    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 6 };
    }

    return { value: '', isValid: false };
};

const Login = (props) => {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: false,
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: false,
    });

    const authCtx = useContext(AuthContext);

    // Use alias variables to be used in useEffect,
    // prevents unnecessary useEffect execution
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    useEffect(() => {
        // Assign setTimeout to a function that can be returned with a clearTimeout();
        // This prevents the useEffect from endlessly running the setFormIsValid handler when the state is updated
        // Which in turn reduces a large amount of HTTP requests
        const identifier = setTimeout(() => {
            console.log('Checking for validity!');
        }, 500);
        setFormIsValid(emailIsValid && passwordIsValid);

        return () => {
            console.log('clearing...');
            clearTimeout(identifier);
        };
    }, [emailIsValid, passwordIsValid]); // Set dependency functions that need re-evaluating, if they change, then the useEffect will re-run

    const emailChangeHandler = (event) => {
        // setEnteredEmail(event.target.value);
        // Run reducer dispatch to return an object with a type and a value in this case 'USER_INPUT' and event.target.value
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

        // setFormIsValid(
        //     event.target.value.includes('@') &&
        //         // enteredPassword.trim().length > 6
        //         passwordState.isValid
        // );
    };

    const passwordChangeHandler = (event) => {
        // setEnteredPassword(event.target.value);
        // Run reducer dispatch to return an object with a type and a value in this case 'USER_INPUT' and event.target.value
        dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

        // setFormIsValid(
        //     emailState.isValid && event.target.value.trim().length > 6
        // );
    };

    const validateEmailHandler = () => {
        // setEmailIsValid(emailState.isValid);
        // Run reducer dispatch to return an object with a type, in this case 'INPUT_BLUR'
        dispatchEmail({ type: 'INPUT_BLUR' });
    };

    const validatePasswordHandler = () => {
        // setPasswordIsValid(enteredPassword.trim().length > 6);
        // Run reducer dispatch to return an object with a type, in this case 'INPUT_BLUR'
        dispatchPassword({ type: 'INPUT_BLUR' });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        authCtx.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${
                        emailState.isValid === false ? classes.invalid : ''
                    }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        passwordState.isValid === false ? classes.invalid : ''
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button
                        type="submit"
                        className={classes.btn}
                        disabled={!formIsValid}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
