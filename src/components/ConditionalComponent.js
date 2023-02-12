import { useState } from "react";

export default function ConditionalComponent() {

    const [display, setDisplay] = useState(true);

    function handleClick(){
        setDisplay(!display)
    }

    if (display) {
        return (
            <div>
                <h3>This is a ConditionalComponent</h3>
                <button onClick={handleClick}>Click to change text</button>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Nothing to see here</h3>
                <button onClick={handleClick}>Click to change text</button>
            </div>
        )
    }

}