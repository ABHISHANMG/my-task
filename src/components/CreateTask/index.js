import {Component} from 'react'

import {v4 as uuidV4} from 'uuid'

import TabItems from '../TabItems'

import Task from '../Task'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class CreateTask extends Component {
  state = {
    taskList: [],
    task: '',
    tag: tagsList[0].optionId,
    activeTag: null,
  }

  changeTask = event => {
    this.setState({task: event.target.value})
  }

  onSelect = event => {
    this.setState({tag: event.target.value})
    console.log(event.target.value)
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {task, activeTag, tag, taskList} = this.state
    const newTask = {
      iId: uuidV4(),
      task,
      tag,
    }

    this.setState(prevState => ({
      taskList: [...prevState.taskList, newTask],
    }))
    console.log(taskList)
    this.setState({task: '', tag: tagsList[0].optionId})
  }

  selectTab = optionId => {
    this.setState({activeTag: optionId})
  }

  render() {
    const {task, activeTag, taskList, tag} = this.state

    const filteredTasks = taskList.filter(
      eachItem => eachItem.tag === activeTag,
    )

    const filteredList = activeTag === null ? taskList : filteredTasks
    return (
      <div className="bg-container">
        <div className="form-container">
          <h1>Create a task!</h1>
          <form onSubmit={this.onSubmitForm}>
            <label htmlFor="Task">Task</label>
            <br />
            <input
              id="Task"
              className="input"
              placeholder="Enter the task here"
              type="text"
              onChange={this.changeTask}
              value={task}
            />
            <br />
            <label htmlFor="Tag">Tags</label>
            <br />
            <select
              id="Tag"
              className="input"
              value={tag}
              onChange={this.onSelect}
            >
              {tagsList.map(eachItem => (
                <option key={eachItem.optionId} value={eachItem.optionId}>
                  {eachItem.displayText}
                </option>
              ))}
            </select>
            <button className="add-btn" type="submit">
              Add Task
            </button>
          </form>
        </div>

        <div className="tags-container">
          <h1 className="tab-name">Tags</h1>
          <ul className="tabs-container">
            {tagsList.map(eachItem => (
              <TabItems
                tabs={eachItem}
                key={eachItem.optionId}
                selectTab={this.selectTab}
                isActive={activeTag === eachItem.optionId}
              />
            ))}
          </ul>
          <h1 className="tab-name">Tasks</h1>
          {filteredList.length === 0 ? (
            <div className="no-task-container">
              <p className="tab-name">No Tasks Added Yet</p>
            </div>
          ) : (
            <ul className="task-container">
              {filteredList.map(eachItem => (
                <Task key={eachItem.id} taskListInputs={eachItem} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default CreateTask
