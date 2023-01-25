import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './shop/auth-context';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // This will create an infinite loop if the state is updated in the function
    // const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    // if (storedUserLoggedInInformation === '1') {
    //     setIsLoggedIn(true);
    // }

    useEffect(() => {
        const storedUserLoggedInInformation =
            localStorage.getItem('isLoggedIn');
        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.setItem('isLoggedIn', false);
        setIsLoggedIn(false);
    };

    return (
        <React.Fragment>
            <AuthContext.Provider
                value={{
                    isLoggedIn: isLoggedIn,
                }}
            >
                <MainHeader onLogout={logoutHandler} />
                <main>
                    {!isLoggedIn && <Login onLogin={loginHandler} />}
                    {isLoggedIn && <Home onLogout={logoutHandler} />}
                </main>
            </AuthContext.Provider>
        </React.Fragment>
    );
}

export default App;
