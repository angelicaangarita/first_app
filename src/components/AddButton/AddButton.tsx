import "../../styles/AddButton.css"

export const AddButton = (props: IAddButton) => {
  return (
    <button className="add-button" onClick={props.onAddTask}>      
      + Add Task
    </button>
  )
}

export interface IAddButton {
  onAddTask: () => void
}
