import { Component } from "react";

class Resume extends Component {
    render() {
        // We can use {} to describe an object from the props that parent passes in
        // The key should be exactly the same
        const {name, age} = this.props;
        // Another writing way:
        // const name = this.props.name
        // const age = this.props.age
        return <h1>Resume component: {name} {age}</h1>;
    }
}

export default Resume;