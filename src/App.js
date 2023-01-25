import { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
    const [cartIsShown, setCardIsShown] = useState(false);

    const showCartHandler = () => {
        setCardIsShown(true);
    };

    const hideCartHandler = () => {
        setCardIsShown(false);
    };

    return (
        <Fragment>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </Fragment>
    );
}

export default App;
