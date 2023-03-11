import {Component} from 'react'

import './index.css'

class LastItem extends Component {
  render() {
    const {EachItem, lengths} = this.props
    const {activeId, task} = EachItem
    let Output
    if (lengths >= 1) {
      Output = (
        <li className="last">
          <p className="task">{task}</p>
          <p className="id">{activeId}</p>
        </li>
      )
    } else {
      Output = (
        <div>
          <p className="no-task">No Tasks Added Yet</p>
        </div>
      )
    }
    return <div>{Output}</div>
  }
}

export default LastItem
