import { Component } from "react";

class ClassEvent extends Component {

    constructor() {
        super();
        this.state = {
            count: 0,
        };

        // Remember to bind functions to this if not using function()=>{} when declare
        // this.increment = this.increment.bind(this)
    }

    increment() {
        this.setState({
            count: this.state.count + 1,
        });
    }


    // Declaration in the way of function()=>{}
    // increment = () => {
    //     this.setState({
    //         count: this.state.count + 1,
    //     });
    // }

    handleClick() {
        console.log("Class event");
    }

    render() {
        return (
            <div>
                <p>Class Event</p>
                <button onClick={this.handleClick}>Click here</button>
                <p>Count value: {this.state.count}</p>
                {/* Even though not binding in the constructor
                We can still use ()=>this.function() when calling it*/}
                <button onClick={() => this.increment()}>Counter</button>
            </div>
        );
    }
}

export default ClassEvent;