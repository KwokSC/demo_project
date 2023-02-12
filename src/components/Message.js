import {Component} from "react"

class Message extends Component{
    render(){
        return <h1>This is a class component Message: {this.props.messagecontent} Code: {this.props.messagecode}</h1>
    }
}

export default Message;