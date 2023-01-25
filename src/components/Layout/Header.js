import { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpeg';

import classes from './header.module.css';

const Header = (props) => {
    return (
        <Fragment>
            <header>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div>
                <img src={mealsImage} alt="Some meal image" />
            </div>
        </Fragment>
    );
};

export default Header;
