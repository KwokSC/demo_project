import { useRef } from "react"


export default function RefsDemo(){
    let nameInputRef = useRef();

    function showNameEventHandler(){
        console.log(nameInputRef.current.value);
    }

    return(
        <div>
            <span>Name:</span>
            <input type="text" ref={nameInputRef}/>
            <button onClick={showNameEventHandler}>Show name</button>
        </div>
    )
}