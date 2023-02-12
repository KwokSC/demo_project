import { Component } from "react";

class ClassEvent extends Component{

    constructor(){
        super();
        this.state = {
            count: 0,
        };
    }
    increment(){
        this.setState({
            count: this.state.count + 1,
        });
    }

    handleClick(){
        console.log("Class event");
    }

    render(){
        return(
            <div>
                <p>Class Event</p>
                <button onClick={this.handleClick}>Click here</button>
                <p>Count value: {this.state.count}</p>
                <button onClick={()=>this.increment()}>Counter</button>
            </div>
        );
    }
}

export default ClassEvent;