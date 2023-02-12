import { useState } from "react";

function FunctionEvent(){

    const [count, setCount] = useState(0);

    function increment(){
        setCount(count+1);
    }

    function handleClick(){
        console.log("Function Event");
    }

    return (
        <div>
            <p>Functional Event</p>
            <button onClick = {handleClick}>Click here</button>
            <p>Count Value: {count}</p>
            <button onClick = {increment}>Counter</button>
        </div>
    );
}

export default FunctionEvent;