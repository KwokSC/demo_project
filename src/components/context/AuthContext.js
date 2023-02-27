import React, { useState, useEffect } from 'react'

// The initialization can be a value, an array[] or an object{}
let AuthContext = React.createContext(
    {
        isLoggedIn: false,
        onLogin: undefined,
        onLogout: undefined
    });

// Here to define the context provider
export function AuthContextProvider(props) {
    let [isLoggedIn, setLoggedIn] = useState(false)

    function loginHandler() {
        localStorage.setItem('isLoggedIn', '1')
        setLoggedIn(true)
    }

    function logoutHandler() {
        localStorage.removeItem('isLoggedIn')
        setLoggedIn(false)
    }

    useEffect(()=>{
        let logStatus = localStorage.getItem('isLoggedIn')
        if(logStatus === '1'){
            setLoggedIn(true)
        }
    },[])

    return <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
        {props.children}
    </AuthContext.Provider>
}

// useContext can help refer the same context variables through the nested structure
// If the variables are directly used between one parent and one child component, using props
// using context may make components non-reusable
export default AuthContext;