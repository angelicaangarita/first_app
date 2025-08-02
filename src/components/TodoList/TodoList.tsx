import TodoItem from "../TodoItem/TodoItem"
import '../../styles/TodoList.css'

const TodoList = () => {
    return (
        <div className="todo-list">
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </div>
    )
}

export default TodoList