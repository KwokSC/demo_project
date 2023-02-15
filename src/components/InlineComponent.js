import { useState } from "react"

export default function InlineComponent(){

    const [header, setStyle] = useState({
        color: "blue",
        fontSize: "20px",
        textAlign: "center",
    })

    function changeColor(){
        setStyle(header.color="red")
    }

    return(
        <div>
            <h1 style={header}>This is an inline component</h1>
            <button onClick={changeColor}>Change color</button>
        </div>
    )
}