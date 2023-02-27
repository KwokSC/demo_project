import { useState, useCallback } from "react";
import Child from "./Child";


export default function Parent() {

    const[parentCount, setParentCount] = useState(0)
    const[childCount, setChildCount] = useState(0)

    function changeParentCount(){
        setParentCount(parentCount+1)
    }

    // To pass reference variables to memory to improve performance
    // useCallback can help reduce re-rendering of children's internal functions
    // If functions include any parameters that are outside themselves
    // Include the outside parameters in the [] array
    const changeChildCount = useCallback(function(){
        setChildCount(childCount+1)
    }, [setChildCount, childCount])

    return (

        <div>
            <h1>This is a parent component</h1>
            <h3>Parent count is: {parentCount}</h3>
            <button onClick={changeParentCount}>Add parent count</button>
            <Child count={childCount} changeChildCount={changeChildCount}></Child>
        </div>

    )
}