import { TodoItem } from "../TodoItem/TodoItem"
import "../../styles/TodoList.css"
import type { Todo } from "../Main/Main"

export const TodoList = (props: ITodoList) => {
  return (
    <div className="todo-list">
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} setTodos={props.setTodos} />
      ))}
    </div>
  );
};
export interface ITodoList {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}
