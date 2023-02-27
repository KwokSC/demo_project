import { memo } from "react"

function Child({count, changeChildCount}) {

    console.log('Child component is being rerendered')

    return (
        <div>
            <h1>This is a child component</h1>
            <h3>Child count is: {count}</h3>
            <button onClick={changeChildCount}>Add child count</button>
        </div>
    )
}

// Memo can't store reference variables such as functions
// Functions will be re-created even if memo is applied
export default memo(Child);