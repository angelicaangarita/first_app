import Title from '../Title/Title'
import { AddButton } from '../AddButton/AddButton'
import { TodoList }  from '../TodoList/TodoList'
import '../../styles/Main.css'
import { useState } from 'react'

export interface Todo{
    id: string;
    text: string;
    isEditable: boolean;
}

export const Main = () => {

    const [todos, setTodos] = useState<Todo[]>([])

    const createTask = () => {
        const newTodo: Todo = {
            id: crypto.randomUUID(),
            text: "Nueva tarea",
            isEditable: false,
        }

        setTodos((prev => [...prev, newTodo]))
    }

    return (
    <div className="main">
        <Title/>
        <AddButton onAddTask={createTask}/>
        <TodoList todos= {todos} setTodos={setTodos}/>
    </div>
    )
}