import Title from '../Title/Title'
import AddButton from '../AddButton/AddButton'
import TodoList from '../TodoList/TodoList'
import '../../styles/Main.css'

const Main = () => {
    return (
    <div className="main">
        <Title/>
        <AddButton/>
        <TodoList/>
    </div>
    )
}

export default Main;