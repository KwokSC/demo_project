import AuthContext from "./AuthContext";
import ChildCon from "./ChildCon";
import { useContext } from 'react'

export default function ParentCon() {

    let context = useContext(AuthContext)

    return (
        <div>
            <h1>The login status in the parent container is {context.isLoggedIn + ''}</h1>
            <ChildCon />
            <button onClick={context.onLogin}>Login</button>
            <button onClick={context.onLogout}>Logout</button>
        </div>
    )
}