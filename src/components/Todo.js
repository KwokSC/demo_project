import { useState } from "react"
import ListItem from "./ListItem";

export default function Todo() {

    const [todo, setTodo] = useState("");

    const [todoList, setTodoList] = useState([]);

    function handleChange(event) {
        setTodo(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        let tempList = todoList
        tempList.push(todo)
        setTodoList(tempList)
        console.log(todoList)
        setTodo("")
    }

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={todo} type="text"></input>
                <button type="submit">Add</button>
            </form>
            {todoList.map((item, index)=>(
                <ListItem key={index} name={item}>List Item</ListItem>
            ))}
        </div>
    )
}