import { memo } from "react"

function Child({count}) {

    console.log('Child component is being rerendered')

    return (
        <div>
            <h1>This is a child component</h1>
            <h3>Child count is: {count}</h3>
        </div>
    )
}

export default memo(Child);