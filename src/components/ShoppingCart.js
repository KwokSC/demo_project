import { Component, Fragment } from "react"

class ShoppingCart extends Component {

    constructor() {
        super()
        this.state = {
            books: [{name:"A", date:"2023/02/14",price:"10", count:0},
            {name:"B", date:"2023/02/13",price:"15", count:0},
            {name:"C", date:"2023/02/12",price:"20", count:0},]
        }
    }
    // Get total price
    getTotalPrice() {
        const totalPrice = this.state.books.reduce((preValue, item) => {
            return preValue + item.count * item.price
        }, 0)
        return totalPrice
    }
    // Change the amount of book
    changeCount(index, count) {
        const newBooks = [...this.state.books]
        newBooks[index].count += count
        this.setState({ books: newBooks })
    }
    // Delete book
    removeItem(index) {
        // Create a temp list to store and update
        const newBooks = [...this.state.books]
        newBooks.splice(index, 1)
        this.setState({ books: newBooks })
    }
    // Render List
    renderBookList() {
        const { books } = this.state

        return <Fragment>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.date}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        {/**Disable delete when the amount is less than 1**/}
                                        <button
                                            disabled={item.count <= 1}
                                            onClick={() => this.changeCount(index, -1)}
                                        >-</button>
                                        {item.count}
                                        <button onClick={() => this.changeCount(index, 1)}>+</button>
                                    </td>
                                    <td><button onClick={() => this.removeItem(index)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <h2>Total Price: {this.getTotalPrice()}</h2>
        </Fragment>
    }
    // Shopping cart is empty
    renderBookEmpty() {
        return <div><h2>Nothing here, please add books</h2></div>
    }

    render() {
        const { books } = this.state

        return (<div>
            <h1>Shopping Cart</h1>
            {books.length ? this.renderBookList() : this.renderBookEmpty()}
        </div>)
    }
}

export default ShoppingCart;