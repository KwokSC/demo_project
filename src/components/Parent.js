import { useState } from "react";
import Child from "./Child";


export default function Parent() {

    const[parentCount, setParentCount] = useState(0)
    const[childCount, setChildCount] = useState(0)

    function changeParentCount(){
        setParentCount(parentCount+1)
    }

    function changeChildCount(){
        setChildCount(childCount+1)
    }

    return (

        <div>
            <h1>This is a parent component</h1>
            <h3>Parent count is: {parentCount}</h3>
            <Child count={childCount}></Child>
            <button onClick={changeParentCount}>Add parent count</button>
            <button onClick={changeChildCount}>Add child count</button>
        </div>

    )
}