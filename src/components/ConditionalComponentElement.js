export default function ConditionalComponentElement(props) {
    return (
        <div>
            <h3>{props.text}</h3>
            <button>Click to change text</button>
        </div>
    )
}