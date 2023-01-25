import { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpeg';

import classes from './header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Some meal image" />
            </div>
        </Fragment>
    );
};

export default Header;
