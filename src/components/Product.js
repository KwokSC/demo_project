export default function Product(props) {

    const { product,index} = props

    let output

    output = <div>
        <h3>
            {product.name}: ${product.price}
        </h3>
        <div>
            <button disabled={product.amount < 1} onClick={props.handleSub}>-</button>
            Amount:{product.amount}
            <button onClick={props.handleAdd}>+</button>
        </div>
        <div>
            <button>Buy it</button>
            <button onClick={props.handleDelete(index)}>Remove</button>
        </div>

    </div>

    return (
        <div>
            {output}
        </div>
    )
}