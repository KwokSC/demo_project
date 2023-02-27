export default function ChildTwo({list}){

    console.log("The child two component is being re-rendered")

    const output = list.map((item, index)=>(
        <div key={index}>        
            <span>The index is {index}, The item is {item}</span>
        </div>

    ))

    return <div>{output}</div>
    
}