import React, { useState } from "react";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});

export const AuthContextProvider = (props) => {

    const [token, setToken] = useState('');

    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token)
    };
    
    const logoutHandler = () => {
        setToken(null)
    };

    const contextvalue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }

    return <AuthContext.Provider 
        value={contextvalue}
    >
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;