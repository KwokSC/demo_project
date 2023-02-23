import React from 'react'

// The initialization can be a value, an array[] or an object{}
let AuthContext = React.createContext({isLoggedIn: false});

// useContext can help refer the same context variables through the nested structure
export default AuthContext;