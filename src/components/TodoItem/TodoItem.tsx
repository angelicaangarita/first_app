import "../../styles/TodoItem.css"
//import editIcon from "./../../assets/edit.png"
import type { Todo } from "../Main/Main"

export const TodoItem = (props: ITodoItem) => {
  return (
    <div className="todo-item">
      <span>{props.todo.text}</span>
      {/* <button className="add-task">
        <img
          src={editIcon}
          alt="Editar"
          style={{ width: "16px", height: "16px" }}
        />
      </button> */}
    </div>
  )
}
export interface ITodoItem{  
    todo: Todo
    setTodos: (todos: Todo[]) => void;  
}