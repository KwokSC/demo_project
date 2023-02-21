export default function InlineComponent() {

    const header =
    {
        color: "blue",
        fontSize: "20px",
        textAlign: "center",
    }

    return (
        <div>
            <h1 style={header}>This is an inline component</h1>
            <button>Change color</button>
        </div>
    )
}