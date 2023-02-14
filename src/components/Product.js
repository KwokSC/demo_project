export default function Product(props) {

    const products = [
        { name: "Laptop", price: 500, amount: 0 },
        { name: "Phone", price: 400, amount: 0 },
        { name: "Modem", price: 100, amount: 0 },
        { name: "Computer", price: 1000, amount: 0 }]

    const productList = products.map((product, index) => (
        <div key={index}>
            <h3>
                {product.name}: ${product.price}
            </h3>
            <div>
                <button>-</button>
                Amount:{product.amount}
                <button>+</button>
            </div>
            <div>
                <button>Buy it</button>
                <button>Remove</button>
            </div>

        </div>
    ))

    return (
        <div>
            {productList}
        </div>
    )
}