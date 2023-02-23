import AuthContext from "./AuthContext";
import ChildCon from "./ChildCon";
import {useState} from 'react'

export default function ParentCon(){

    const [isLoggedIn, setLoggedIn] = useState(false)

    return(
        <AuthContext.Provider value={{isLoggedIn:isLoggedIn}}>
            <h1>The login status in the parent container is {isLoggedIn+''}</h1>
            <ChildCon/>
            <button onClick={()=>setLoggedIn(!isLoggedIn)}>Change Context</button>
        </AuthContext.Provider>
    )
}