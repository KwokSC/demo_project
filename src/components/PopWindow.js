import { Fragment, useState } from "react";
import Model from "./Model";

export default function PopWindow() {

    const [display, setDisplay] = useState(false);

    function displayModel() {
        setDisplay(true);
    }

    function hideModel(){
        setDisplay(false);
    }

    return (
        <Fragment>
            <h2>This button will pop up a portal model</h2>
            <button onClick={displayModel}>Pop Window</button>
            <Model showModel={display} hideModel={hideModel}></Model>
        </Fragment>
    )
}