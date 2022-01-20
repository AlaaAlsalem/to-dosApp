import React from "react"

function TodoItem(props) {
  return <li> <input
  type="checkbox"
  checked={props.complete}
  onChange={() => this.props.handleChangeProps()}
/> {props.todo.title} </li>
}

export default TodoItem