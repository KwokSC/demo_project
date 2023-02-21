import { useEffect, useState } from "react";

export default function SideEffect(){

    console.log('Side Effect rendered');

    // useState hook will re-render whenever the component start
    // and the parameter status change
    let[resourceType, setResourceType] = useState('Home');

    // useEffect will only be called whenever the parameter(s) change
    // It can bind with several parameters inside the []
    useEffect(()=>{console.log(resourceType)},[resourceType])

    return(<div>
        <button onClick={()=>{setResourceType('HOME')}}>HOME</button>
        <button onClick={()=>{setResourceType('ABOUT')}}>ABOUT</button>
        <button onClick={()=>{setResourceType('CONTACT')}}>CONTACT</button>
        <h3>{resourceType}</h3>
    </div>)


}