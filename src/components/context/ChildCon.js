import AuthContext from "./AuthContext";
import {useContext} from 'react'

export default function ChildCon(){
    let context = useContext(AuthContext)

    return(
        <h3>The child login status is {context.isLoggedIn+''}</h3>
    )
}