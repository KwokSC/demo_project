const name = "Chunkie";

const displayMessage = ()=>{
    return "Function result display";
}

function Hello(){
    return <h1>
        The function result is: {displayMessage()} This is a functional component {name} </h1>
}

// Another way to create functional components
// const Hello = ()=><h1>This is a functional component</h1>

export default Hello;