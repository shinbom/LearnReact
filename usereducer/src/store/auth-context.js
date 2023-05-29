import React, {useState} from "react";

const AuthContext = React.createContext({
    isLoggedIn : false,
    onLogout : () => {},
    onLogin : (email, password) => {}
});

const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true)
    }

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false)
    }

    return <AuthContext.Provider
        valud={{
            isLoggedIn : isLoggedIn,
            onLogout : logoutHandler,
            onLogin : loginHandler,
        }}
    >{props.children}</AuthContext.Provider>
}

export {AuthContextProvider};
export default AuthContext;