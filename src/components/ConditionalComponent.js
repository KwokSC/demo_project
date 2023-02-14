import { useState } from "react";

export default function ConditionalComponent() {

    const [display, setDisplay] = useState(true);

    let output;

    function handleClick() {
        setDisplay(!display)
    }

    // if (display) {
    //     output = <h3>This is a ConditionalComponent</h3>
    // } else {
    //     output = <h3>Nothing to see here</h3>
    // }

    output = display?<h3>This is a ConditionalComponent</h3>:<h3>Nothing to see here</h3>

    return (
        <div>
            {output}
            <button onClick={handleClick}>Click here to change the text</button>
        </div>

    );
}