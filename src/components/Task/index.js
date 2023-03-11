import './index.css'

const Task = props => {
  const {taskListInputs} = props
  const {task, tag} = taskListInputs

  return (
    <li>
      <div className="task-list-container">
        <p className="task-para">{task}</p>
        <p className="tag-btn">{tag}</p>
      </div>
    </li>
  )
}

export default Task
